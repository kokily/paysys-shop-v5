import Router from 'koa-router';
import { authorized, authorizedAdmin } from '../../middlewares/authorized';
import {
  changePasswordAPI,
  listUsersAPI,
  readUserAPI,
  removeUserAPI,
  setAdminAPI,
} from './users.ctrl';

const users = new Router();

users.patch('/password', authorized, changePasswordAPI);
users.get('/', authorizedAdmin, listUsersAPI);
users.get('/:id', authorizedAdmin, readUserAPI);
users.delete('/:id', authorizedAdmin, removeUserAPI);
users.post('/admin', authorizedAdmin, setAdminAPI);

export default users;
