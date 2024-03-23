import React from "react";
import "./App.css";
import AppRouter from "./Router";

import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
