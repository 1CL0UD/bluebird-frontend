import { Button } from '@chakra-ui/react';
import { BsCart } from 'react-icons/bs';
import { CarType } from '../hooks/useData';

interface Props {
  vehicle: string;
  imageURL: string;
  price: string;
  onAddToCart(wishlist: CarType): void;
}

const AddToCartButton = ({ vehicle, imageURL, price, onAddToCart }: Props) => {
  const onAddWishlistClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const newWishlistCar = {
      vehicle: vehicle,
      imageURL: imageURL,
      price: price,
    };
    onAddToCart(newWishlistCar);
  };
  return (
    <Button flex={'1'} colorScheme="blue" onClick={onAddWishlistClick}>
      <BsCart />
    </Button>
  );
};

export default AddToCartButton;
