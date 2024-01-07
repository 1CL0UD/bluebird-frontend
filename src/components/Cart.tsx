import { useSelector } from 'react-redux';
import { CartState } from '../reducers/cartReducer';

const Cart = () => {
  const cart = useSelector<CartState, CartState['cart']>((state) => state.cart);

  return (
    <div>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <img src={item.imageURL} alt={item.vehicle} />
            <p>{item.vehicle}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
