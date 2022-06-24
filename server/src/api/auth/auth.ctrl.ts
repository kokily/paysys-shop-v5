import type { Context } from 'koa';
import bcrypt from 'bcryptjs';
import Joi from 'joi';
import Token from '../../entities/Token';
import User from '../../entities/User';
import { dataSource } from '../../server';
import validateBody from '../../utils/validateBody';
import createToken from '../../utils/createToken';
import setCookies from '../../utils/setCookies';

// Login API
export async function loginAPI(ctx: Context) {
  type RequestType = {
    username: string;
    password: string;
  };

  const schema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().min(4).required(),
  });

  if (!validateBody(ctx, schema)) return;

  const { username, password }: RequestType = ctx.request.body;

  try {
    const userRepo = dataSource.getRepository(User);
    const tokenRepo = dataSource.getRepository(Token);
    const user = await userRepo.findOneBy({ username });

    if (!user) {
      ctx.status = 404;
      ctx.body = '등록된 사용자가 없습니다';
      return;
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      ctx.status = 401;
      ctx.body = '비밀번호가 틀렸습니다';
      return;
    }

    // 기존 Refresh Token(DB)이 존재할 경우 삭제
    const prevToken = await tokenRepo.findOneBy({ fk_user_id: user.id });

    if (prevToken) {
      await tokenRepo.delete({ fk_user_id: user.id });
    }

    const tokens = await createToken(user);

    setCookies(ctx, tokens);

    ctx.body = {
      user_id: user.id,
      username: username,
      admin: user.admin,
    };
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Register API
export async function registerAPI(ctx: Context) {
  type RequestType = {
    username: string;
    password: string;
  };

  const schema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().min(4).required(),
  });

  if (!validateBody(ctx, schema)) return;

  const { username, password }: RequestType = ctx.request.body;

  try {
    const userRepo = dataSource.getRepository(User);
    const exists = await userRepo.findOneBy({ username });
    let admin = false;

    if (exists) {
      ctx.status = 409;
      ctx.body = '이미 이용중인 아이디입니다';
      return;
    }

    if (
      username === process.env.ADMIN_NAME1 ||
      username === process.env.ADMIN_NAME2 ||
      username === process.env.ADMIN_NAME3 ||
      username === process.env.ADMIN_NAME4
    ) {
      admin = true;
    }

    const user = new User();

    user.username = username;
    user.password = await bcrypt.hash(password, 10);
    user.admin = admin;

    await userRepo.save(user);

    ctx.body = {
      user_id: user.id,
      username: user.username,
      admin: user.admin,
    };
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Logout API
export async function logoutAPI(ctx: Context) {
  try {
    const { user_id } = ctx.state.user;
    const userRepo = dataSource.getRepository(User);
    const tokenRepo = dataSource.getRepository(Token);
    const user = await userRepo.findOneBy({ id: user_id });

    if (!user) {
      ctx.status = 401;
      ctx.body = '로그인 후 이용하세요';
      return;
    }

    const token = await tokenRepo.findOneBy({ fk_user_id: user.id });

    if (!token) {
      ctx.status = 401;
      ctx.body = '토큰이 존재하지 않습니다.';
      return;
    }

    setCookies(ctx);

    ctx.state.user = undefined;

    await tokenRepo.delete(token.id);

    ctx.status = 204;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Check API
export async function checkAPI(ctx: Context) {
  try {
    const { user_id } = ctx.state.user;

    if (!user_id) {
      ctx.throw(401, '로그인 후 이용해 주세요');
    }

    const userRepo = dataSource.getRepository(User);
    const tokenRepo = dataSource.getRepository(Token);
    const user = await userRepo.findOneBy({ id: user_id });

    if (!user) {
      ctx.status = 401;
      ctx.body = '로그인 후 이용해 주세요';
      return;
    }

    const token = await tokenRepo.findOneBy({ fk_user_id: user.id });

    if (!token) {
      ctx.status = 401;
      ctx.body = '토큰이 존재하지 않습니다.';
      return;
    }

    ctx.body = {
      user_id,
      username: user.username,
      admin: user.admin,
    };
  } catch (err: any) {
    ctx.throw(500, err);
  }
}
