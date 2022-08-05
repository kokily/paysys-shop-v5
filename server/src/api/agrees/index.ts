import Router from 'koa-router';
import { authorizedAdmin } from '../../middlewares/authorized';
import {
  addAgreeAPI,
  listAgreesAPI,
  readAgreeAPI,
  removeAgreeAPI,
} from './agrees.ctrl';

const agrees = new Router();

agrees.get('/', authorizedAdmin, listAgreesAPI);
agrees.get('/:id', authorizedAdmin, readAgreeAPI);
agrees.post('/', addAgreeAPI);
agrees.delete('/:id', authorizedAdmin, removeAgreeAPI);

export default agrees;
