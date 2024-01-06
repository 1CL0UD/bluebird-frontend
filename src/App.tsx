import './App.css';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import CategoriesTabs from './components/CategoriesTabs';
import Footer from './components/Footer';
import useData from './hooks/useData';
import { useEffect, useState } from 'react';

interface Data {
  category: {
    id: number;
    name: string;
    imageURL: string;
  }[];
  type: {
    id: number;
    category_id: number;
    car_type: {
      vehicle: string;
      imageURL: string;
      price: string;
      description: string[];
    }[];
  }[];
}
function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearch, setIsSearch] = useState(false);
  const [filteredCarTypes, setFilteredCarTypes] = useState<Data['type']>([]);

  const { data, loading, error } = useData();

  useEffect(() => {
    if (searchQuery) {
      setIsSearch(true);
      const filteredTypes: Data['type'] = [];

      if (data) {
        data.type.forEach((type) => {
          const filteredCars = type.car_type.filter((car) =>
            car.vehicle.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (filteredCars.length > 0) {
            filteredTypes.push({
              ...type,
              car_type: filteredCars,
            });
          }
        });
      }

      setFilteredCarTypes(filteredTypes);
    } else {
      setIsSearch(false);
      setFilteredCarTypes([]);
    }
  }, [searchQuery, data]);

  return (
    <Flex color="white" direction={'column'} minHeight={'100vh'}>
      <Box>
        <NavBar onSearch={setSearchQuery} />
      </Box>
      <Box flex="1">
        {isSearch ? (
          <Box>
            {filteredCarTypes.map((type) => (
              <Box key={type.id} w="100%" alignItems={'center'}>
                {type.car_type.map((car) => (
                  <Flex key={car.vehicle} alignItems={'center'}>
                    <Image src={car.imageURL} alt={car.vehicle} />
                    <Flex direction="column" ml={4}>
                      <Text>{car.vehicle}</Text>
                      <Text>{car.price}</Text>
                      {car.description.map((desc, index) => (
                        <Text key={index}>{desc}</Text>
                      ))}
                    </Flex>
                  </Flex>
                ))}
              </Box>
            ))}
          </Box>
        ) : (
          <CategoriesTabs data={data} loading={loading} error={error} />
        )}
      </Box>
      <Box>
        <Footer />
      </Box>
    </Flex>
  );
}

export default App;
