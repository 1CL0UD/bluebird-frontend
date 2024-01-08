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
import { addCart, addWishlist } from '../actions/actions';
import { useDispatch } from 'react-redux';
import { CarType } from '../hooks/useData';
import { useState } from 'react';
import AddToCartButton from './AddToCartButton';

interface Props {
  vehicle: string;
  imageURL: string;
  price: string;
}

const VehicleDetail = ({ vehicle, imageURL, price }: Props) => {
  const [urlCopied, setUrlCopied] = useState(false);

  const dispatch = useDispatch();

  const onAddWishlist = (wishlist: CarType) => {
    dispatch(addWishlist(wishlist));
  };

  const onAddToCart = (cart: CarType) => {
    dispatch(addCart(cart));
  };
  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setUrlCopied(true);
    setTimeout(() => {
      setUrlCopied(false);
    }, 3000);
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
          <Button flex="1" onClick={handleShareClick}>
            {urlCopied ? 'URL Copied!' : 'Share'}
          </Button>
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
            <AddToCartButton
              vehicle={vehicle}
              imageURL={imageURL}
              price={price}
              onAddToCart={onAddToCart}
            />
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
  );
};

export default VehicleDetail;
