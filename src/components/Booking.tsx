import { useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardBody,
  VStack,
  Image,
  Text,
  Heading,
  Stack,
  CardFooter,
  HStack,
} from '@chakra-ui/react';
import { BsArrowLeft } from 'react-icons/bs';
import { RootState } from '../reducers/rootReducer';
import DeleteButton from './DeleteButton';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../actions/actions';

interface Props {
  onBookingClick: () => void;
}

const Booking = ({ onBookingClick }: Props) => {
  const carts = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const handleDelete = (vehicle: string) => {
    dispatch(deleteCart(vehicle));
  };

  return (
    <>
      <VStack padding={8}>
        <HStack w={'100%'}>
          <Button onClick={onBookingClick} mr={4}>
            <BsArrowLeft />
          </Button>
          <Text fontSize="3xl">Your Bookings</Text>
        </HStack>

        {carts.length === 0 ? (
          <Text>No Bookings Added Yet</Text>
        ) : (
          carts.map((item, index) => (
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

export default Booking;
