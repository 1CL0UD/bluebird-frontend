import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import {
  VStack,
  Button,
  Card,
  CardBody,
  Text,
  Image,
  CardFooter,
  Heading,
  Stack,
  HStack,
} from '@chakra-ui/react';
import { BsArrowLeft } from 'react-icons/bs';
import DeleteButton from './DeleteButton';
import { deleteWishlist } from '../actions/actions';

interface Props {
  onWishlistClick: () => void;
}

const Wishlist = ({ onWishlistClick }: Props) => {
  const wishlists = useSelector((state: RootState) => state.wishlist.wishlist);
  const dispatch = useDispatch();
  const handleDelete = (vehicle: string) => {
    dispatch(deleteWishlist(vehicle));
  };
  return (
    <>
      <VStack padding={8}>
        <HStack w={'100%'}>
          <Button onClick={onWishlistClick} mr={4}>
            <BsArrowLeft />
          </Button>
          <Text fontSize="3xl">Your Wishlist</Text>
        </HStack>
        {wishlists.length === 0 ? (
          <Text>No Wishlist Added Yet</Text>
        ) : (
          wishlists.map((item, index) => (
            <>
              <Card
                key={index}
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                padding={8}
                alignItems={'center'}
              >
                <Image
                  src={item.imageURL}
                  alt={item.vehicle}
                  objectFit="cover"
                  maxW={{ base: '100%', sm: '200px' }}
                />

                <Stack>
                  <CardBody>
                    <Heading size="md">{item.vehicle}</Heading>
                    <Text>{item.price}</Text>
                  </CardBody>
                  <CardFooter>
                    <DeleteButton
                      vehicle={item.vehicle}
                      onDelete={handleDelete}
                    />
                  </CardFooter>
                </Stack>
              </Card>
            </>
          ))
        )}
      </VStack>
    </>
  );
};

export default Wishlist;
