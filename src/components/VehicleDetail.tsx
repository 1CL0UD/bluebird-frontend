import {
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import logo from '../assets/Logo/Logo_Bluebird.png';
import LikeButton from './LikeButton';

const VehicleDetail = () => {
  return (
    <Grid
      gridTemplateColumns={'0.4fr 1fr'}
      gap={6}
      paddingX={4}
      alignItems={'center'}
    >
      <GridItem>
        <Image src={logo} />
        <Flex direction={'row'} alignItems={'center'} gap={4}>
          <Button flex="1">Share</Button>
          <LikeButton />
        </Flex>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>
            <Text>test</Text>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
};

export default VehicleDetail;
