import "./App.css";
import AppRouter from "./Router";

import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import Layout from "./layout";

function App() {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <Layout>
          <AppRouter />
        </Layout>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
