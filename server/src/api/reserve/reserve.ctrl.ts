import type { Context } from 'koa';
import Joi from 'joi';
import Bill from '../../entities/Bill';
import { dataSource } from '../../server';
import validateBody from '../../utils/validateBody';

// Add Reserve API
export async function addReserveAPI(ctx: Context) {
  type RequestType = {
    bill_id: string;
    reserve: number;
  };

  const schema = Joi.object().keys({
    bill_id: Joi.string().required(),
    reserve: Joi.number().required(),
  });

  if (!validateBody(ctx, schema)) return;

  const { bill_id, reserve }: RequestType = ctx.request.body;

  try {
    const billRepo = dataSource.getRepository(Bill);
    const bill = await billRepo.findOneBy({ id: bill_id });

    if (!bill) {
      ctx.status = 404;
      ctx.body = '존재하지 않는 빌지입니다.';
      return;
    }

    let updateBill = { ...bill, reserve };

    await billRepo.update({ id: bill_id }, { ...updateBill });

    ctx.body = bill;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Remove Reserve API
export async function removeReserveAPI(ctx: Context) {
  const { id } = ctx.params;

  try {
    const billRepo = dataSource.getRepository(Bill);
    const bill = await billRepo.findOneBy({ id });

    if (!bill) {
      ctx.status = 404;
      ctx.body = '존재하지 않는 빌지입니다.';
      return;
    }

    if (bill.reserve) {
      let removeBill = { ...bill, reserve: 0 };

      await billRepo.update({ id }, { ...removeBill });

      ctx.status = 200;
    } else {
      ctx.status = 404;
      ctx.body = '예약금이 없습니다.';
      return;
    }
  } catch (err: any) {
    ctx.throw(500, err);
  }
}
