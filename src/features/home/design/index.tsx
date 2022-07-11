import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native';
import {
  NativeBaseProvider,
  Button,
  Box,
  HStack,
  Text,
  Switch
} from "native-base";
import { useDispatch } from 'react-redux';
import { getUserInfoHandle } from '../store/actionType';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const param = {code: 'code111'};
    const success = (res: any) => {
      console.log(res);
    };
    const failure = (error: any) => {
      console.log(error);
    };
    dispatch(getUserInfoHandle(param, success, failure));
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <NativeBaseProvider>
        <Box alignItems="center">
          <Button onPress={() => console.log("hello world")}>Click Me</Button>
        </Box>
        <Box alignItems="center">
          <HStack alignItems="center" space={4}>
            <Text>HomeScreen</Text>
            <Switch size="lg" />
          </HStack>
        </Box>
      </NativeBaseProvider>
    </SafeAreaView>
  );
};
export default HomeScreen;
