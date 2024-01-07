import './App.css';
import { Flex, Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import CategoriesTabs from './components/CategoriesTabs';
import Footer from './components/Footer';
import useData, { Data } from './hooks/useData';
import { useEffect, useState } from 'react';
import VehicleDetail from './components/VehicleDetail';
import Wishlist from './components/Wishlist';

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
      <Box flex="1" mt={24}>
        <CategoriesTabs
          data={data}
          loading={loading}
          error={error}
          isSearch={isSearch}
          filteredCarTypes={filteredCarTypes}
        />
        <VehicleDetail />
      </Box>
      <Box>
        <Wishlist />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Flex>
  );
}

export default App;
