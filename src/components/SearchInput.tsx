import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

// interface Props {
//   onSearch: (searchText: string) => void;
// }

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputGroup>
        <InputLeftElement color={'blue.500'}>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search..."
          variant={'filled'}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
