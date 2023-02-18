import { extendTheme } from '@chakra-ui/react';
import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('#fff', '#121212')(props),
        scrollBehavior: 'smooth',
      },
    }),
  },
});

export default theme;
