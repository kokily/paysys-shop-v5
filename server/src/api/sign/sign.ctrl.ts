import type { Context } from 'koa';
import Joi from 'joi';
import Wedding from '../../entities/weddings/Wedding';
import { dataSource } from '../../server';
import validateBody from '../../utils/validateBody';

// Add Sign API
export async function addSignAPI(ctx: Context) {
  type RequestType = {
    weddingId: string;
    sex: string;
    image: string;
  };

  const schema = Joi.object().keys({
    weddingId: Joi.string().required(),
    sex: Joi.string().required(),
    image: Joi.string().required(),
  });

  if (!validateBody(ctx, schema)) return;

  const { weddingId, sex, image }: RequestType = ctx.request.body;

  try {
    const weddingRepo = dataSource.getRepository(Wedding);

    if (sex === 'husband') {
      await weddingRepo.update({ id: weddingId }, { husband_image: image });
    } else {
      await weddingRepo.update({ id: weddingId }, { bride_image: image });
    }

    ctx.status = 200;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}

// Remove Sign API
export async function removeSignAPI(ctx: Context) {
  type RequestType = {
    id: string;
  };

  const schema = Joi.object().keys({
    id: Joi.string().required(),
  });

  if (!validateBody(ctx, schema)) return;

  const { id }: RequestType = ctx.request.body;

  try {
    const weddingRepo = dataSource.getRepository(Wedding);

    await weddingRepo.update({ id }, { husband_image: '', bride_image: '' });

    ctx.status = 200;
  } catch (err: any) {
    ctx.throw(500, err);
  }
}
