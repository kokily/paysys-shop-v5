import Router from 'koa-router';
import { authorizedAdmin } from '../../middlewares/authorized';
import { addSignAPI, removeSignAPI } from './sign.ctrl';

const sign = new Router();

sign.post('/', authorizedAdmin, addSignAPI);
sign.delete('/:id', authorizedAdmin, removeSignAPI);

export default sign;
