import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './src/store/store';
import AppNavigator from './src/navigation/AppNavigator';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from "native-base";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NativeBaseProvider>
          <AppNavigator />
        </NativeBaseProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
