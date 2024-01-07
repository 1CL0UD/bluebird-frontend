import { Text, HStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <HStack justifyContent={'center'} paddingY={4} mt={8} bg={'gray.700'}>
      <Text>© 2022 Blue Bird Group. All Rights Reserved.</Text>
    </HStack>
  );
};

export default Footer;
