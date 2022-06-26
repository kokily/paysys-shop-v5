import type { NextPage } from 'next';
import Cart from '../components/cart/Cart';
import PageTemplate from '../components/common/PageTemplate';
import useLoggedIn from '../libs/hooks/auth/useLoggedIn';
import useCart from '../libs/hooks/cart/useCart';

const CartPage: NextPage = () => {
  const { user } = useLoggedIn();
  const {
    cart,
    title,
    hall,
    etc,
    totalAmount,
    onChange,
    onAddBill,
    onRemoveOneCart,
    modal,
    onModalClick,
    onCancel,
    onConfirm,
  } = useCart();

  return (
    <PageTemplate user={user}>
      <Cart
        cart={cart}
        title={title}
        hall={hall}
        etc={etc}
        totalAmount={totalAmount}
        onChange={onChange}
        onAddBill={onAddBill}
        onRemoveOneCart={onRemoveOneCart}
        modal={modal}
        onModalClick={onModalClick}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </PageTemplate>
  );
};

export default CartPage;
