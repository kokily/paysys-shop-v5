import type { Context, Next } from 'koa';
import uploadImage from '../../utils/s3upload';

// Add Image API
export async function addImageAPI(ctx: Context, next: Next) {
  if (ctx.request.files) {
    const file = ctx.request.files.file;
    const { key, url } = await uploadImage(file as any);

    ctx.body = { key, url };
  } else {
    return next();
  }
}

export default addImageAPI;
