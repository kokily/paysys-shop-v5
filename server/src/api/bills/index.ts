import Router from 'koa-router';
import { authorized } from '../../middlewares/authorized';
import {
  addBillAPI,
  listBillsAPI,
  readBillAPI,
  removeBillAPI,
  restoreBillAPI,
} from './bills.ctrl';

const bills = new Router();

bills.post('/', authorized, addBillAPI);
bills.get('/', authorized, listBillsAPI);
bills.get('/:id', authorized, readBillAPI);
bills.delete('/:id', authorized, removeBillAPI);
bills.patch('/:id', authorized, restoreBillAPI);

export default bills;
