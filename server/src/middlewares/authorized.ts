import type { Middleware } from 'koa';
import User from '../entities/User';
import { dataSource } from '../server';

export const authorized: Middleware = async (ctx, next) => {
  const userRepo = dataSource.getRepository(User);

  if (!ctx.state.user) {
    ctx.status = 401;
    ctx.body = '로그인 후 이용해 주세요';
    return;
  }

  const user = await userRepo.findOneBy({ id: ctx.state.user.user_id });

  if (!user) {
    ctx.status = 401;
    ctx.body = '로그인 후 이용해 주세요';
    return;
  }

  return next();
};

export const authorizedAdmin: Middleware = async (ctx, next) => {
  const userRepo = dataSource.getRepository(User);

  if (!ctx.state.user) {
    ctx.status = 401;
    ctx.body = '로그인 후 이용해 주세요';
    return;
  }

  const user = await userRepo.findOneBy({ id: ctx.state.user.user_id });

  if (!user) {
    ctx.status = 401;
    ctx.body = '로그인 후 이용해 주세요';
    return;
  }

  if (!user.admin) {
    ctx.status = 401;
    ctx.body = '관리자 로그인이 필요합니다.';
  }

  return next();
};
