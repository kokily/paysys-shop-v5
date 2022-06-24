import type { Context } from 'koa';
import bcrypt from 'bcryptjs';
import Joi from 'joi';
import User from '../../entities/User';
import { dataSource } from '../../server';
import { serialize } from '../../utils/serialize';
import validateBody from '../../utils/validateBody';

// List Users API
export async function listUsersAPI(ctx: Context) {
  type QueryType = {
    username?: string;
    cursor?: string;
  };

  const { username, cursor }: QueryType = ctx.query;

  try {
    const userRepo = dataSource.getRepository(User);
    const query = await userRepo
      .createQueryBuilder('users')
      .limit(20)
      .orderBy('users.created_at', 'DESC')
      .addOrderBy('users.id', 'DESC');

    if (username) {
      query.andWhere('users.username like :username', {
        username: `%${username}%`,
      });
    }

    if (cursor) {
      const user = await userRepo.findOneBy({ id: cursor });

      if (!user) {
        ctx.status = 404;
        ctx.body = '존재';
        return;
      }

      query.andWhere('users.created_at < :date', {
        date: user.created_at,
      });

      query.orWhere('users.created_at = :date AND users.id = :id', {
        date: user.created_at,
        id: user.id,
      });
    }

    const users = await query.getMany();

    ctx.body = users.map((user) => ({
      ...serialize(user),
    }));
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Read User API
export async function readUserAPI(ctx: Context) {
  const { id }: { id: string } = ctx.params;

  try {
    const userRepo = dataSource.getRepository(User);
    const user = await userRepo.findOneBy({ id });

    if (!user) {
      ctx.status = 404;
      ctx.body = '존재하지 않는 사용자입니다.';
      return;
    }

    ctx.body = serialize(user);
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Remove User API
export async function removeUserAPI(ctx: Context) {
  const { id }: { id: string } = ctx.params;

  try {
    const userRepo = dataSource.getRepository(User);

    await userRepo.delete({ id });

    ctx.status = 204;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Set Admin API
export async function setAdminAPI(ctx: Context) {
  type RequestType = {
    id: string;
    isAdmin: boolean;
  };

  const schema = Joi.object().keys({
    id: Joi.string().required(),
    isAdmin: Joi.boolean().required(),
  });

  if (!validateBody(ctx, schema)) return;

  const { id, isAdmin }: RequestType = ctx.request.body;

  try {
    const userRepo = dataSource.getRepository(User);
    const user = await userRepo.findOneBy({ id });

    if (!user) {
      ctx.status = 404;
      ctx.body = '해당 사용자가 존재하지 않습니다.';
      return;
    }

    await userRepo.update(
      {
        id,
      },
      {
        admin: isAdmin,
        updated_at: new Date(),
      }
    );

    ctx.status = 200;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Change Password API
export async function changePasswordAPI(ctx: Context) {
  type RequestType = {
    password: string;
  };

  const schema = Joi.object().keys({
    password: Joi.string().min(4).required(),
  });

  if (!validateBody(ctx, schema)) return;

  const { password }: RequestType = ctx.request.body;

  try {
    const { user_id } = ctx.state.user;

    if (!user_id) {
      ctx.status = 401;
      ctx.body = '로그인 후 이용하세요';
      return;
    }

    const userRepo = dataSource.getRepository(User);
    const user = await userRepo.findOne(user_id);

    if (!user) {
      ctx.status = 404;
      ctx.body = '접속된 사용자가 없습니다.';
      return;
    }

    await userRepo.update(
      { id: user.id },
      {
        password: await bcrypt.hash(password, 10),
      }
    );

    ctx.status = 200;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}
