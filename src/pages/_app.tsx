import { ChakraProvider } from "@chakra-ui/react";
import tema from "../styles/theme/";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={tema}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
