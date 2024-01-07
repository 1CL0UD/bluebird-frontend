import { Button } from '@chakra-ui/react';
import { BsCart } from 'react-icons/bs';
import { CarType } from '../hooks/useData';

interface Props {
  vehicle: string;
  imageURL: string;
  price: string;
  onAddToWishlist(wishlist: CarType): void;
}

const AddToCartButton = ({
  vehicle,
  imageURL,
  price,
  onAddToWishlist,
}: Props) => {
  const onAddWishlistClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const newWishlistCar = {
      vehicle: vehicle,
      imageURL: imageURL,
      price: price,
    };
    onAddToWishlist(newWishlistCar);
  };
  return (
    <Button colorScheme="blue" onClick={onAddWishlistClick}>
      <BsCart />
    </Button>
  );
};

export default AddToCartButton;
