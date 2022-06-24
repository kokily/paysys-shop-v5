import Router from 'koa-router';
import { authorized } from '../../middlewares/authorized';
import {
  addCartAPI,
  removeCartAPI,
  removeOneCartAPI,
  viewCartAPI,
} from './cart.ctrl';

const cart = new Router();

cart.post('/', authorized, addCartAPI);
cart.get('/', authorized, viewCartAPI);
cart.delete('/', authorized, removeCartAPI);
cart.patch('/:id', authorized, removeOneCartAPI);

export default cart;
