import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
  onSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleInputChange = () => {
    if (ref.current) {
      onSearch(ref.current.value);
    }
  };
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
          onChange={handleInputChange}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
