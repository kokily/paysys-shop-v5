import Router from 'koa-router';
import { authorizedAdmin } from '../../middlewares/authorized';
import { addReserveAPI, removeReserveAPI } from './reserve.ctrl';

const reserve = new Router();

reserve.post('/', authorizedAdmin, addReserveAPI);
reserve.delete('/:id', authorizedAdmin, removeReserveAPI);

export default reserve;
