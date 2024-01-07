import './App.css';
import { Flex, Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import CategoriesTabs from './components/CategoriesTabs';
import Footer from './components/Footer';
import useData, { Data } from './hooks/useData';
import { useEffect, useState } from 'react';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearch, setIsSearch] = useState(false);
  const [filteredCarTypes, setFilteredCarTypes] = useState<Data['type']>([]);
  const [wishlistActive, setWishlistActive] = useState(false);
  const [bookingsActive, setBookingsActive] = useState(false);
  const { data, loading, error } = useData();

  const handleWishlistClick = () => {
    setBookingsActive(false);
    setWishlistActive(!wishlistActive);
  };

  const handleBookingsClick = () => {
    setWishlistActive(false);
    setBookingsActive(!bookingsActive);
  };

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
        <NavBar
          onSearch={setSearchQuery}
          onWishlistClick={handleWishlistClick}
          onBookingsClick={handleBookingsClick}
        />
      </Box>
      <Box flex="1" mt={24}>
        {wishlistActive && !bookingsActive ? (
          <Wishlist />
        ) : bookingsActive && !wishlistActive ? (
          <Cart />
        ) : (
          <CategoriesTabs
            data={data}
            loading={loading}
            error={error}
            isSearch={isSearch}
            filteredCarTypes={filteredCarTypes}
          />
        )}
      </Box>

      <Box>
        <Footer />
      </Box>
    </Flex>
  );
}

export default App;
