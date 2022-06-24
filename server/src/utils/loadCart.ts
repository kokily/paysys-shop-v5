import Cart from '../entities/Cart';
import { dataSource } from '../server';

async function loadCart(user_id: string) {
  const cartRepo = dataSource.getRepository(Cart);
  const cart = await cartRepo
    .createQueryBuilder('cart')
    .where('cart.user_id = :user_id', { user_id })
    .andWhere('cart.completed = false')
    .andWhere('cart.deleted = false')
    .getOne();

  return cart;
}

export default loadCart;
