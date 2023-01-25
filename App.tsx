import React from 'react';

import { StatusBar } from 'react-native';
import { AppProvider } from './src/hooks';
import Routes from './src/routes/app.routes';

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
