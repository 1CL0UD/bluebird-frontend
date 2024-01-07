import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import LikeButton from './LikeButton';
import { addWishlist } from '../actions/actions';
import { useDispatch } from 'react-redux';
import { CarType } from '../hooks/useData';

interface Props {
  vehicle: string;
  imageURL: string;
  price: string;
}

const VehicleDetail = ({ vehicle, imageURL, price }: Props) => {
  const dispatch = useDispatch();

  const onAddWishlist = (wishlist: CarType) => {
    dispatch(addWishlist(wishlist));
  };
  return (
    <Grid
      gridTemplateColumns={'0.4fr 1fr'}
      gap={6}
      paddingX={8}
      alignItems={'center'}
    >
      <GridItem>
        <Image src={imageURL} />
        <Flex direction={'row'} alignItems={'center'} gap={4}>
          <Button flex="1">Share</Button>
          <LikeButton
            vehicle={vehicle}
            imageURL={imageURL}
            price={price}
            onAddToWishlist={onAddWishlist}
          />
        </Flex>
      </GridItem>
      <GridItem>
        <Card h={'100%'}>
          <CardBody>
            <Text fontSize={'3xl'}>{vehicle}</Text>
          </CardBody>
          <CardFooter gap={8}>
            <Button flex="1" fontSize={'xl'}>
              {price}
            </Button>
            <Button flex="1" fontSize={'xl'}>
              Book
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
  );
};

export default VehicleDetail;
