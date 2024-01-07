import { Button } from '@chakra-ui/react';
import { BsTrash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { removeCar } from '../reducers/wishlistReducer';

interface Props {
  vehicle: string;
}

const DeleteButton = ({ vehicle }: Props) => {
  const dispatch = useDispatch();

  const handleRemoveFromWihslit = () => {
    dispatch(removeCar(vehicle));
    window.alert(`Successfully deleted ${vehicle} from Wishlist!`);
  };
  return (
    <Button onClick={handleRemoveFromWihslit}>
      <BsTrash />
    </Button>
  );
};

export default DeleteButton;
