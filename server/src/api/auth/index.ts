import Router from 'koa-router';
import { checkAPI, loginAPI, logoutAPI, registerAPI } from './auth.ctrl';

const auth = new Router();

auth.get('/check', checkAPI);
auth.post('/login', loginAPI);
auth.post('/logout', logoutAPI);
auth.post('/register', registerAPI);

export default auth;
