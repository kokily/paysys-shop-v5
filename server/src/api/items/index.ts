import Router from 'koa-router';
import { authorized, authorizedAdmin } from '../../middlewares/authorized';
import {
  addItemAPI,
  listItemsAPI,
  readItemAPI,
  removeItemAPI,
  updateItemAPI,
} from './items.ctrl';

const items = new Router();

items.post('/', authorizedAdmin, addItemAPI);
items.get('/', authorized, listItemsAPI);
items.get('/:id', authorized, readItemAPI);
items.delete('/:id', authorizedAdmin, removeItemAPI);
items.patch('/:id', authorizedAdmin, updateItemAPI);

export default items;
