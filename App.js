import React from 'react';
import AppContainer from './app/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  );
};

export default App;
