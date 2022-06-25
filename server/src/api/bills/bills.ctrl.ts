import type { Context } from 'koa';
import Joi from 'joi';
import aligo from 'aligoapi';
import Bill from '../../entities/Bill';
import Cart from '../../entities/Cart';
import { dataSource } from '../../server';
import loadCart from '../../utils/loadCart';
import validateBody from '../../utils/validateBody';

// Add Bill API
export async function addBillAPI(ctx: Context) {
  type RequestType = {
    title: string;
    hall: string;
    etc: string;
  };

  const schema = Joi.object().keys({
    title: Joi.string().required(),
    hall: Joi.string().required(),
    etc: Joi.string().required(),
  });

  if (!validateBody(ctx, schema)) return;

  const { title, hall, etc }: RequestType = ctx.request.body;

  try {
    const { user_id, username } = ctx.state.user;

    if (!user_id || !username) {
      ctx.status = 401;
      ctx.body = '로그인 후 이용하세요';
      return;
    }

    const billRepo = dataSource.getRepository(Bill);
    const cartRepo = dataSource.getRepository(Cart);
    const cart = await loadCart(user_id);

    if (!cart) {
      ctx.status = 404;
      ctx.body = '카트가 존재하지 않습니다.';
      return;
    }

    let inputCart = { ...cart };
    let total = 0;

    inputCart.items.map((item) => {
      return (total += item.amount);
    });

    const bill = new Bill();

    bill.title = title;
    bill.hall = hall;
    bill.etc = etc;
    bill.username = username;
    bill.user_id = user_id;
    bill.cart_id = inputCart.id;
    bill.total_amount = total;
    bill.items = inputCart.items;

    let updateCart = { ...cart, completed: true };

    await billRepo.save(bill);
    await cartRepo.update({ id: cart.id }, { ...updateCart });

    // SMS Service
    const smsConfig = {
      key: process.env.ALIGO_KEY,
      user_id: process.env.ALIGO_USER,
    };
    const sender = process.env.ALIGO_SENDER;
    const receiver =
      process.env.NODE_ENV === 'production'
        ? `${process.env.ALIGO_RECEIVER1},${process.env.ALIGO_RECEIVER2},${process.env.ALIGO_RECEIVER3}`
        : `${process.env.ALIGO_RECEIVER1}`;

    ctx.request.body = {
      sender,
      receiver,
      msg: `[${username}]님 [${hall}]에서 [${title}] 전표전송 https://paysys.kr/fronts/${bill.id} `,
    };

    aligo
      .send(ctx.request, smsConfig)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    ctx.status = 200;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// List Bills API
export async function listBillsAPI(ctx: Context) {
  type QueryType = {
    user_id?: string;
    title?: string;
    hall?: string;
    cursor?: string;
  };

  const { user_id, title, hall, cursor }: QueryType = ctx.query;

  try {
    const billRepo = dataSource.getRepository(Bill);
    const query = billRepo
      .createQueryBuilder('bills')
      .limit(30)
      .orderBy('bills.created_at', 'DESC')
      .addOrderBy('bills.id', 'DESC');

    if (user_id) {
      query.andWhere('bills.user_id = :user_id', { user_id });
    }

    if (title) {
      query.andWhere('bills.title like :title', {
        title: `%${title}%`,
      });
    }

    if (hall) {
      query.andWhere('bills.hall like :hall', {
        hall: `%${hall}%`,
      });
    }

    if (cursor) {
      const bill = await billRepo.findOneBy({ id: cursor });

      if (!bill) {
        ctx.status = 404;
        ctx.body = '해당 빌지가 존재하지 않습니다.';
        return;
      }

      query.andWhere('bills.created_at < :date', {
        date: bill.created_at,
      });

      query.orWhere('bills.created_at = :date AND bills.id < :id', {
        date: bill.created_at,
        id: bill.id,
      });
    }

    const bills = await query.getMany();

    ctx.body = bills;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Read Bill API
export async function readBillAPI(ctx: Context) {
  const { id }: { id: string } = ctx.params;

  try {
    const billRepo = dataSource.getRepository(Bill);
    const bill = await billRepo.findOneBy({ id });

    if (!bill) {
      ctx.status = 404;
      ctx.body = '존재하지 않는 빌지입니다.';
      return;
    }

    ctx.body = bill;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Remove Bill API
export async function removeBillAPI(ctx: Context) {
  const { id }: { id: string } = ctx.params;

  try {
    const { user_id, admin } = ctx.state.user;
    const billRepo = dataSource.getRepository(Bill);
    const bill = await billRepo.findOneBy({ id });

    if (!user_id && !admin) {
      ctx.status = 401;
      ctx.body = '로그인 후 이용해 주세요';
      return;
    }

    if (!bill) {
      ctx.status = 404;
      ctx.body = '존재하지 않는 빌지입니다.';
      return;
    }

    if (user_id === bill.user_id || admin) {
      await billRepo.delete(id);

      ctx.status = 204;
    } else {
      ctx.status = 403;
      ctx.body = '삭제 권한이 없습니다.';
      return;
    }
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Restore Bill API
export async function restoreBillAPI(ctx: Context) {
  const { id }: { id: string } = ctx.params;

  try {
    const { user_id } = ctx.state.user;
    const billRepo = dataSource.getRepository(Bill);
    const cartRepo = dataSource.getRepository(Cart);
    const bill = await billRepo.findOneBy({ id });

    if (!user_id) {
      ctx.status = 401;
      ctx.body = '로그인 후 이용하세요';
      return;
    }

    if (!bill) {
      ctx.status = 404;
      ctx.body = '존재하지 않는 빌지입니다.';
      return;
    }

    if (user_id === bill.user_id) {
      const cart = await cartRepo.findOneBy({ id: bill.cart_id });

      if (!cart) {
        ctx.status = 404;
        ctx.body = '존재하지 않는 카트입니다.';
        return;
      }

      let updateCart = { ...cart };

      updateCart.completed = false;

      await cartRepo.update({ id: cart.id }, { ...updateCart });
      await billRepo.delete(id);

      ctx.body = cart;
    } else {
      ctx.status = 403;
      ctx.body = '빌지 수정 권한이 없습니다.';
      return;
    }
  } catch (err: any) {
    ctx.throw(500, err);
  }
}
