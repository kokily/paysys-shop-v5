import Router from 'koa-router';
import { authorizedAdmin } from '../../middlewares/authorized';
import { listWeddingsAPI, readWeddingAPI } from './weddings.ctrl';

const weddings = new Router();

weddings.get('/', authorizedAdmin, listWeddingsAPI);
weddings.get('/:id', authorizedAdmin, readWeddingAPI);

export default weddings;
