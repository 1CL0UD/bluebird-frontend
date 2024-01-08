import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { CarType } from '../hooks/useData';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import { deleteWishlist } from '../actions/actions';
import { useDispatch } from 'react-redux';

interface Props {
  vehicle: string;
  imageURL: string;
  price: string;
  onAddToWishlist(wishlist: CarType): void;
}

const LikeButton = ({ vehicle, imageURL, price, onAddToWishlist }: Props) => {
  const dispatch = useDispatch();
  const isVehicleInWishlist = useSelector((state: RootState) =>
    state.wishlist.wishlist.some((car) => car.vehicle === vehicle)
  );

  const [isLiked, setIsLiked] = useState(isVehicleInWishlist);
  const onAddWishlistClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (!isLiked) {
      const newWishlistCar = {
        vehicle: vehicle,
        imageURL: imageURL,
        price: price,
      };
      onAddToWishlist(newWishlistCar);
      setIsLiked(true);
    } else {
      dispatch(deleteWishlist(vehicle));
      setIsLiked(false);
    }
  };
  return (
    <Button flex="1" onClick={onAddWishlistClick}>
      {isLiked ? <BsHeartFill /> : <BsHeart />}
    </Button>
  );
};

export default LikeButton;
