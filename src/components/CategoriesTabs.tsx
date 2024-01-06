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
  Button,
} from '@chakra-ui/react';

import useData from '../hooks/useData';
import LikeButton from './LikeButton';
import { BsCart } from 'react-icons/bs';

const CategoriesTabs = () => {
  const { data, loading, error } = useData();

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
                    <Card key={index}>
                      <CardBody>
                        <Image src={car.imageURL} />
                        <HStack justifyContent={'space-between'}>
                          <Text>{car.vehicle}</Text>
                          <HStack>
                            <Button
                              colorScheme="blue"
                              onClick={() =>
                                console.log('added to wishlist: ' + index)
                              }
                            >
                              <BsCart />
                            </Button>
                            <LikeButton />
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
    </Tabs>
  );
};

export default CategoriesTabs;
