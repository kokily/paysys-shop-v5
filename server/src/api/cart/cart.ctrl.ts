import type { Context } from 'koa';
import Joi from 'joi';
import Cart from '../../entities/Cart';
import Item from '../../entities/Item';
import { dataSource } from '../../server';
import loadCart from '../../utils/loadCart';
import validateBody from '../../utils/validateBody';

// Add Cart API
export async function addCartAPI(ctx: Context) {
  type RequestType = {
    item_id: string;
    count: number;
    price: number;
  };

  const schema = Joi.object().keys({
    item_id: Joi.string().required(),
    count: Joi.number().required(),
    price: Joi.number().required(),
  });

  if (!validateBody(ctx, schema)) return;

  const { item_id, count, price }: RequestType = ctx.request.body;

  try {
    const { user_id } = ctx.state.user;

    if (!user_id) {
      ctx.status = 401;
      ctx.body = '로그인 후 이용해주세요';
      return;
    }

    const itemRepo = dataSource.getRepository(Item);
    const cartRepo = dataSource.getRepository(Cart);
    const prevCart = await loadCart(user_id);
    const item = await itemRepo.findOneBy({ id: item_id });

    if (!item) {
      ctx.status = 404;
      ctx.body = '존재하지 않는 품목입니다.';
      return;
    }

    const addItem = {
      ...item,
      count,
      price,
      amount: count * price,
    };

    if (!prevCart) {
      // 기존 카트가 존재하지 않을 때
      const cart = new Cart();

      cart.items = [addItem];
      cart.user_id = user_id;
      cart.completed = false;
      cart.deleted = false;

      await cartRepo.save(cart);

      ctx.body = cart;
    } else {
      // 기존 카트가 있을 경우 기존 카트에 품목 추가
      await cartRepo.update(
        { id: prevCart.id },
        { ...prevCart, items: [...prevCart.items, addItem] }
      );

      const cart = await cartRepo.findOneBy({ id: prevCart.id });

      if (!cart) {
        ctx.status = 404;
        ctx.body = '카트가 존재하지 않습니다.';
        return;
      }

      ctx.body = cart;
    }
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// View Cart API
export async function viewCartAPI(ctx: Context) {
  try {
    const { user_id } = ctx.state.user;

    if (!user_id) {
      ctx.status = 401;
      ctx.body = '로그인 후 이용하세요';
    }

    const cart = await loadCart(user_id);

    if (!cart) {
      ctx.status = 404;
      ctx.body = '카트가 존재하지 않습니다';
      return;
    }

    ctx.body = cart;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Remove Cart API
export async function removeCartAPI(ctx: Context) {
  try {
    const { user_id } = ctx.state.user;

    if (!user_id) {
      ctx.status = 401;
      ctx.body = '로그인 후 이용하세요';
      return;
    }

    const cartRepo = dataSource.getRepository(Cart);
    const cart = await loadCart(user_id);

    if (!cart) {
      ctx.status = 404;
      ctx.body = '카트가 존재하지 않습니다.';
      return;
    }

    let removeCart = { ...cart };
    let updateCart = {
      id: removeCart.id,
      user_id,
      deleted: true,
    };

    await cartRepo.update({ id: cart.id }, { ...updateCart });

    ctx.status = 200;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Remove One Item API
export async function removeOneCartAPI(ctx: Context) {
  // Params id => item.id
  const { id }: { id: string } = ctx.params;

  try {
    const { user_id } = ctx.state.user;

    if (!user_id) {
      ctx.status = 401;
      ctx.body = '로그인 후 이용하세요';
      return;
    }

    const cartRepo = dataSource.getRepository(Cart);
    const cart = await loadCart(user_id);

    if (!cart) {
      ctx.status = 404;
      ctx.body = '카트가 존재하지 않습니다.';
      return;
    }

    if (cart.items.length === 1) {
      // 카트 내 품목 수가 하나일 경우 카트 삭제
      let removeCart = { ...cart };
      let updateCart = {
        id: removeCart.id,
        user_id,
        deleted: true,
      };

      await cartRepo.update({ id: cart.id }, { ...updateCart });

      ctx.body = cart;
    } else {
      // 카트 내 품목 수가 두 가지 이상일 경우 품목만 삭제
      let updateCart = { ...cart };

      const idx = updateCart.items.findIndex((item) => {
        return item.id === id;
      });

      if (idx > -1) {
        updateCart.items.splice(idx, 1);
      }

      await cartRepo.update({ id: cart.id }, { ...updateCart });

      ctx.body = cart;
    }
  } catch (err: any) {
    ctx.throw(500, err);
  }
}
