import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes/app.routes';

import { StatusBar } from 'react-native';
import { AppProvider } from './src/hooks';

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor='transparent'
        barStyle='dark-content'
      />
      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
}
