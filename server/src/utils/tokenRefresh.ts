import type { Context } from 'koa';
import { dataSource } from '../server';
import User from '../entities/User';
import Token from '../entities/Token';
import decodeToken from './decodeToken';
import generateToken from './generateToken';
import setCookies from './setCookies';

export type TokenType = {
  iat: number;
  exp: number;
  iss: string;
  sub: string;
};

export type AccessTokenType = {
  user_id: string;
  username: string;
  admin: boolean;
} & TokenType;

export type RefreshTokenType = {
  user_id: string;
  username: string;
  admin: boolean;
  token_id: string;
} & TokenType;

async function tokenRefresh(ctx: Context, prevRefreshToken: string) {
  try {
    const decoded = await decodeToken<RefreshTokenType>(prevRefreshToken);
    const user = await dataSource
      .getRepository(User)
      .findOneBy({ id: decoded.user_id });

    if (!user) {
      ctx.throw(500, 'Invalid User Error');
    }

    const now = new Date().getTime();
    const diff = decoded.exp * 1000 - now;
    let refreshToken = prevRefreshToken;

    if (diff < 1000 * 60 * 60 * 24 * 15) {
      refreshToken = await generateToken(
        {
          user_id: user.id,
          username: user.username,
          admin: user.admin,
          token_id: decoded.token_id,
        },
        { subject: 'refresh_token', expiresIn: '15d' }
      );
    }

    const accessToken = await generateToken(
      { user_id: user.id, username: user.username, admin: user.admin },
      { subject: 'access_token', expiresIn: '15m' }
    );

    setCookies(ctx, { accessToken, refreshToken });

    await dataSource
      .getRepository(Token)
      .update({ id: decoded.token_id }, { token: refreshToken });

    return decoded.user_id;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

export default tokenRefresh;
