import { HStack, Image, Link } from '@chakra-ui/react';
import logo from '../assets/Logo/Logo_Bluebird.png';
import SearchInput from './SearchInput';

interface Props {
  onSearch: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={4} justifyContent={'space-between'}>
      <HStack gap={8}>
        <Image src={logo} height={'4rem'} />
        <Link>Wishlist</Link>
        <Link>My Book</Link>
      </HStack>
      <SearchInput onSearch={onSearch} />
    </HStack>
  );
};

export default NavBar;
