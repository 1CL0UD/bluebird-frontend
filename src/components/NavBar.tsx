import { Button, HStack, Image } from '@chakra-ui/react';
import logo from '../assets/Logo/Logo_Bluebird.png';
import SearchInput from './SearchInput';

interface Props {
  onSearch: React.Dispatch<React.SetStateAction<string>>;
  onWishlistClick: () => void;
  onBookingsClick: () => void;
}

const NavBar = ({ onSearch, onWishlistClick, onBookingsClick }: Props) => {
  return (
    <HStack
      padding={4}
      justifyContent={'space-between'}
      boxShadow={'base'}
      bg={'gray.800'}
      position={'fixed'}
      zIndex={200}
      w={'100%'}
    >
      <HStack gap={8}>
        <Image src={logo} height={'4rem'} />

        <Button onClick={onWishlistClick}>Wishlist</Button>
        <Button onClick={onBookingsClick}>My Bookings</Button>
      </HStack>
      <SearchInput onSearch={onSearch} />
    </HStack>
  );
};

export default NavBar;
