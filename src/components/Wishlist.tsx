import { useSelector } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import {
  VStack,
  Button,
  Grid,
  GridItem,
  Card,
  CardBody,
  Text,
  Image,
} from '@chakra-ui/react';
import { BsArrowLeft } from 'react-icons/bs';

interface Props {
  onWishlistClick: () => void;
}

const Wishlist = ({ onWishlistClick }: Props) => {
  const wishlists = useSelector((state: RootState) => state.wishlist.wishlist);

  return (
    <>
      <VStack padding={8}>
        <Button onClick={onWishlistClick} alignSelf={'start'} mb={4}>
          <BsArrowLeft />
        </Button>
        <Grid templateColumns="repeat(4, 1fr)" gap={8}>
          {wishlists.length === 0 ? (
            <GridItem colSpan={4}>
              <Text>No Wishlist Added Yet</Text>
            </GridItem>
          ) : (
            wishlists.map((item, index) => (
              <GridItem key={index} colSpan={1}>
                <Card>
                  <CardBody>
                    <Image src={item.imageURL} alt={item.vehicle} />
                    <Text>{item.vehicle}</Text>
                    <Text>{item.price}</Text>
                  </CardBody>
                </Card>
              </GridItem>
            ))
          )}
        </Grid>
      </VStack>
    </>
  );
};

export default Wishlist;
