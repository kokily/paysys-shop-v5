import Joi from 'joi';
import type { Context } from 'koa';
import { dataSource } from '../../server';
import validateBody from '../../utils/validateBody';
import Agree from '../../entities/Agree';

// Add Agree API
export async function addAgreeAPI(ctx: Context) {
  type RequestType = {
    name: string;
    sign: string;
  };

  const schema = Joi.object().keys({
    name: Joi.string().required(),
    sign: Joi.string().required(),
  });

  if (!validateBody(ctx, schema)) return;

  const { name, sign }: RequestType = ctx.request.body;

  try {
    const agreesRepo = await dataSource.getRepository(Agree);

    const agree = new Agree();

    agree.isAgree = true;
    agree.name = name;
    agree.sign = sign;

    await agreesRepo.save(agree);

    ctx.status = 200;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// List Agrees API
export async function listAgreesAPI(ctx: Context) {
  type QueryType = {
    name?: string;
    cursor?: string;
  };

  const { name, cursor }: QueryType = ctx.query;

  try {
    const agreesRepo = await dataSource.getRepository(Agree);
    const query = agreesRepo
      .createQueryBuilder('agrees')
      .limit(30)
      .orderBy('agrees.created_at', 'DESC')
      .addOrderBy('agrees.id', 'DESC');

    if (name) {
      query.andWhere('agrees.name like :name', { name });
    }

    if (cursor) {
      const agree = await agreesRepo.findOneBy({ id: cursor });

      if (!agree) {
        ctx.status = 404;
        ctx.body = '존재하지 않는 동의서입니다.';
        return;
      }

      query.andWhere('items.created_at > :date', {
        date: agree.created_at,
      });

      query.orWhere('items.created_at = :date AND items.id > :id', {
        date: agree.created_at,
        id: agree.id,
      });
    }

    const agrees = await query.getMany();

    ctx.body = agrees;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Read Agree API
export async function readAgreeAPI(ctx: Context) {
  const { id }: { id: string } = ctx.params;

  try {
    const agreesRepo = await dataSource.getRepository(Agree);
    const agree = await agreesRepo.findOneBy({ id });

    if (!agree) {
      ctx.status = 404;
      ctx.body = '존재하지 않는 동의서입니다.';
      return;
    }

    ctx.body = agree;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Remove Agree API
export async function removeAgreeAPI(ctx: Context) {
  const { id }: { id: string } = ctx.params;

  try {
    const agreesRepo = await dataSource.getRepository(Agree);

    await agreesRepo.delete({ id });

    ctx.status = 204;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}
