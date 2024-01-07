import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { CarType } from '../hooks/useData';

interface Props {
  vehicle: string;
  imageURL: string;
  price: string;
  onAddToWishlist(wishlist: CarType): void;
}

const LikeButton = ({ vehicle, imageURL, price, onAddToWishlist }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const onAddWishlistClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const newWishlistCar = {
      vehicle: vehicle,
      imageURL: imageURL,
      price: price,
    };
    onAddToWishlist(newWishlistCar);
    setIsLiked(!isLiked);
  };
  return (
    <Button flex="1" onClick={onAddWishlistClick}>
      {isLiked ? <BsHeartFill /> : <BsHeart />}
    </Button>
  );
};

export default LikeButton;
