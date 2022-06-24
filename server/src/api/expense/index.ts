import Router from 'koa-router';
import { authorizedAdmin } from '../../middlewares/authorized';
import {
  addExpenseAPI,
  removeExpenseAPI,
  updateExpenseAPI,
} from './expense.ctrl';

const expense = new Router();

expense.post('/', authorizedAdmin, addExpenseAPI);
expense.delete('/:id', authorizedAdmin, removeExpenseAPI);
expense.put('/:id', authorizedAdmin, updateExpenseAPI);

export default expense;
