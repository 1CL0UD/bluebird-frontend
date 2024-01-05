import { Tab, TabList, Tabs, TabPanels, TabPanel } from '@chakra-ui/react';

const CategoriesTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Taxi</Tab>
        <Tab>Car Rental</Tab>
        <Tab>Bus</Tab>
        <Tab>Shuttle Service</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>Taxi Page</p>
        </TabPanel>
        <TabPanel>
          <p>Car Rental Page</p>
        </TabPanel>
        <TabPanel>
          <p>Bus Page</p>
        </TabPanel>
        <TabPanel>
          <p>Shuttle Service Page</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default CategoriesTabs;
