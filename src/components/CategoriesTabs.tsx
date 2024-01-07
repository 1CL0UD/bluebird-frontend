import {
  Tab,
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  Card,
  CardBody,
  Text,
  Image,
  HStack,
  VStack,
  Box,
  Stack,
  Heading,
  Button,
} from '@chakra-ui/react';

import { CarType, Data } from '../hooks/useData';
import LikeButton from './LikeButton';
import AddToCartButton from './AddToCartButton';
import { useDispatch } from 'react-redux';
import { addWishlist, addCart } from '../actions/actions';
import { SetStateAction, useState } from 'react';
import VehicleDetail from './VehicleDetail';
import { BsArrowLeft } from 'react-icons/bs';

interface Props {
  data: Data | null;
  loading: boolean;
  error: string | null;
  isSearch: boolean;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
  filteredCarTypes: Data['type'];
}

const CategoriesTabs = ({
  data,
  loading,
  error,
  isSearch,
  setIsSearch,
  filteredCarTypes,
}: Props) => {
  const [isDetail, setIsDetail] = useState(false);

  const [nowVehicle, setNowVehicle] = useState('');
  const [nowImageUrl, setNowImageUrl] = useState('');
  const [nowPrice, setPrice] = useState('');

  const showDetails = (
    vehicle: SetStateAction<string>,
    imageUrl: SetStateAction<string>,
    price: SetStateAction<string>
  ) => {
    {
      isDetail ? setIsDetail(false) : setIsDetail(true);
    }
    setIsSearch(false);
    setNowVehicle(vehicle);
    setNowImageUrl(imageUrl);
    setPrice(price);
  };

  const dispatch = useDispatch();

  const onAddWishlist = (wishlist: CarType) => {
    dispatch(addWishlist(wishlist));
  };

  const onAddToCart = (cart: CarType) => {
    dispatch(addCart(cart));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Tabs>
      <TabList>
        {[
          data?.category[0],
          data?.category[1],
          data?.category[3],
          data?.category[2],
        ].map(
          (category) => category && <Tab key={category.id}>{category.name}</Tab>
        )}
      </TabList>
      {isSearch ? (
        <Box pt={8} px={16}>
          {filteredCarTypes.map((type) => (
            <VStack key={type.id}>
              {type.car_type.map((car) => (
                <Card
                  key={car.vehicle}
                  direction={{ base: 'column', sm: 'row' }}
                  w={'100%'}
                  paddingY={4}
                  justifyContent={'center'}
                  alignItems={'center'}
                  onClick={() =>
                    showDetails(car.vehicle, car.imageURL, car.price)
                  }
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: '100%', sm: '200px' }}
                    src={car.imageURL}
                    alt={car.vehicle}
                  />

                  <Stack>
                    <CardBody>
                      <Heading size="md">{car.vehicle}</Heading>
                      <Text py="2">{car.price}</Text>
                      {car.description.map((desc, index) => (
                        <Text key={index}>{desc}</Text>
                      ))}
                    </CardBody>
                  </Stack>
                </Card>
              ))}
            </VStack>
          ))}
        </Box>
      ) : isDetail ? (
        <>
          <Button onClick={() => showDetails('', '', '')} ml={8} my={8}>
            <BsArrowLeft />
          </Button>
          <VehicleDetail
            vehicle={nowVehicle}
            imageURL={nowImageUrl}
            price={nowPrice}
          />
        </>
      ) : (
        <TabPanels>
          {data?.type?.[0] &&
            data?.type?.[3] &&
            data?.type?.[2] &&
            data?.type?.[1] &&
            [data?.type[0], data?.type[3], data?.type[2], data?.type[1]].map(
              (type) => (
                <TabPanel key={type.category_id}>
                  <HStack gap={4}>
                    {type.car_type.map((car, index) => (
                      <Card
                        key={index}
                        onClick={() =>
                          showDetails(car.vehicle, car.imageURL, car.price)
                        }
                      >
                        <CardBody>
                          <Image src={car.imageURL} />
                          <HStack justifyContent={'space-between'}>
                            <Text>{car.vehicle}</Text>
                            <HStack>
                              <AddToCartButton
                                vehicle={car.vehicle}
                                imageURL={car.imageURL}
                                price={car.price}
                                onAddToCart={onAddToCart}
                              />
                              <LikeButton
                                vehicle={car.vehicle}
                                imageURL={car.imageURL}
                                price={car.price}
                                onAddToWishlist={onAddWishlist}
                              />
                            </HStack>
                          </HStack>
                        </CardBody>
                      </Card>
                    ))}
                  </HStack>
                </TabPanel>
              )
            )}
        </TabPanels>
      )}
    </Tabs>
  );
};

export default CategoriesTabs;
