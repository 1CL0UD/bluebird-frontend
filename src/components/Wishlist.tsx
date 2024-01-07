import { useSelector } from 'react-redux';
import { WishlistState } from '../reducers/wishlistReducer';

const Wishlist = () => {
  const wishlists = useSelector<WishlistState, WishlistState['wishlist']>(
    (state) => state.wishlist
  );

  return (
    <div>
      <ul>
        {wishlists.map((item, index) => (
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

export default Wishlist;
