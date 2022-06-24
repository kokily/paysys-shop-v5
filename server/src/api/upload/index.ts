import Router from 'koa-router';
import addImageAPI from './upload.ctrl';

const upload = new Router();

upload.post('/', addImageAPI);

export default upload;
