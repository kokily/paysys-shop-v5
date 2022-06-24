import type { Context } from 'koa';
import Joi from 'joi';
import Item from '../../entities/Item';
import { dataSource } from '../../server';
import validateBody from '../../utils/validateBody';

// Add Item API
export async function addItemAPI(ctx: Context) {
  type RequestType = {
    name: string;
    divide: string;
    native: string;
    unit: string;
    price: number;
  };

  const schema = Joi.object().keys({
    name: Joi.string().required(),
    divide: Joi.string().required(),
    native: Joi.string().required(),
    unit: Joi.string().required(),
    price: Joi.number().required(),
  });

  if (!validateBody(ctx, schema)) return;

  const { name, divide, native, unit, price }: RequestType = ctx.request.body;

  try {
    const itemRepo = dataSource.getRepository(Item);
    const itemCount = await itemRepo.count();
    const item = new Item();

    item.name = name;
    item.divide = divide;
    item.native = native;
    item.unit = unit;
    item.price = price;
    item.num = itemCount + 1;

    await itemRepo.save(item);

    ctx.body = item;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// List Items API
export async function listItemsAPI(ctx: Context) {
  type QueryType = {
    name?: string;
    divide?: string;
    native?: string;
    cursor?: string;
  };

  const { name, divide, native, cursor }: QueryType = ctx.query;

  try {
    const itemRepo = dataSource.getRepository(Item);
    const query = itemRepo
      .createQueryBuilder('items')
      .limit(30)
      .orderBy('items.num', 'DESC');

    if (name) {
      query.andWhere('items.name like :name', {
        name: `%${name}%`,
      });
    }

    if (divide) {
      query.andWhere('items.divide like :divide', {
        divide: `%${divide}%`,
      });
    }

    if (native) {
      query.andWhere('items.native like :native', {
        native: `%${native}%`,
      });
    }

    if (cursor) {
      const item = await itemRepo.findOneBy({ id: cursor });

      if (!item) {
        ctx.status = 404;
        ctx.body = '존재하지 않는 품목입니다.';
        return;
      }

      query.andWhere('items.num < :num', { num: item.num });
    }

    const items = await query.getMany();

    ctx.body = items;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Read Item API
export async function readItemAPI(ctx: Context) {
  const { id }: { id: string } = ctx.params;

  try {
    const itemRepo = dataSource.getRepository(Item);
    const item = await itemRepo.findOneBy({ id });

    if (!item) {
      ctx.status = 404;
      ctx.body = '존재하지 않는 품목입니다.';
      return;
    }

    ctx.body = item;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Remove Item API
export async function removeItemAPI(ctx: Context) {
  const { id }: { id: string } = ctx.params;

  try {
    const itemRepo = dataSource.getRepository(Item);

    await itemRepo.delete(id);

    ctx.status = 204;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Update Item API
export async function updateItemAPI(ctx: Context) {
  const { id }: { id: string } = ctx.params;

  type RequestType = {
    name: string;
    divide: string;
    native: string;
    unit: string;
    price: number;
  };

  const schema = Joi.object().keys({
    name: Joi.string().required(),
    divide: Joi.string().required(),
    native: Joi.string().required(),
    unit: Joi.string().required(),
    price: Joi.number().required(),
  });

  if (!validateBody(ctx, schema)) return;

  const { name, divide, native, unit, price }: RequestType = ctx.request.body;

  try {
    const itemRepo = dataSource.getRepository(Item);

    await itemRepo.update(
      { id },
      { name, divide, native, unit, price, updated_at: new Date() }
    );

    ctx.status = 200;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}
