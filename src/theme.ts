import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const theme = extendTheme({
  config,
  colors: {
    blue: {
      50: '#eceff8',
      100: '#c8cee6',
      200: '#a3add6',
      300: '#7e8dc8',
      400: '#5a6cbb',
      500: '#4253a2',
      600: '#34407e',
      700: '#252e59',
      800: '#161b35',
      900: '#070913',
    },
  },
});

export default theme;
