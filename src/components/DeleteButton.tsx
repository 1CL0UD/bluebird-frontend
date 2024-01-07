import { Button } from '@chakra-ui/react';
import { BsTrash } from 'react-icons/bs';

interface Props {
  vehicle: string;
  onDelete(vehicle: string): void;
}

const DeleteButton = ({ vehicle, onDelete }: Props) => {
  const onDeleteItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onDelete(vehicle);
  };
  return (
    <Button onClick={onDeleteItem}>
      <BsTrash />
    </Button>
  );
};

export default DeleteButton;
