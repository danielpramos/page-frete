import { NativeBaseProvider } from "native-base";

import { Frete } from './src/screens/Frete';


export default function App() {
  return (
    <NativeBaseProvider>
      <Frete />
    </NativeBaseProvider>
  );
}


