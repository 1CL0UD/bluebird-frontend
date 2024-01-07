import { Button } from '@chakra-ui/react';
import { BsCart } from 'react-icons/bs';

interface Props {
  vehicle: string;
  imageURL: string;
  price: string;
}

const AddToCartButton = ({ vehicle, imageURL, price }: Props) => {
  return (
    <Button
      colorScheme="blue"
      onClick={() =>
        window.alert(`Added ${vehicle} at ${price} with ${imageURL}`)
      }
    >
      <BsCart />
    </Button>
  );
};

export default AddToCartButton;
