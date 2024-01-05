import './App.css';
import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import CategoriesTabs from './components/CategoriesTabs';

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"` }}
      templateColumns={{ base: `"1fr"` }}
    >
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <GridItem area={'main'}>
        <CategoriesTabs />
      </GridItem>
    </Grid>
  );
}

export default App;
