import React, { useEffect, useState } from 'react';
import {SafeAreaView} from 'react-native';
import {
  ScrollView,
  HStack,
  Avatar,
  Box,
  Input,
  Text,
  Button,
  Flex,
  AlertDialog,
  Center
} from "native-base";
import { useDispatch } from 'react-redux';
import { getUserInfoHandle } from '../store/actionType';
import { SIGN_UP, VERYFY_OTP, PASSWORD, PROFILE, FORGET_PASSWORD, RESET_PASSWORD } from './const';

const SignInScreen = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(SIGN_UP);
  const [isOpen, setIsOpen] = React.useState(false);
  const cancelRef = React.useRef(null);
  const otpList = ['', '', '', '', '', ''];

  const onClose = () => setIsOpen(false);

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

  const nextStep = () => {
    onClose();
    setStep(RESET_PASSWORD);
  }


  return (
    // <SafeAreaView style={{flex: 1, flexDirection: 'column', height: 'auto', backgroundColor: '#FFF'}}>
      // <NativeBaseProvider>
        <Box flex={1} p="3">
          <HStack justifyContent="center" space={2}>
            <Avatar bg="green.500"  size="2xl" source={{
                  uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                }}>
              AJ
            </Avatar>
          </HStack>
          {step === SIGN_UP ? (
            <>
              <Box mt={3} alignSelf="center">
                <Text fontSize="4xl">Sign up</Text>
              </Box>
              <Box mt={3}>
                <Input placeholder="Email" w="100%" />
              </Box>
              <Box alignItems="center" mt={3}>
                <Button w="100%" colorScheme="danger" onPress={() => setStep(VERYFY_OTP)}>Sign up</Button>
              </Box>
            </>
          ) : null}
          {step === VERYFY_OTP ? (
            <>
              <Box mt={3} alignSelf="center">
                <Text fontSize="4xl">OTP Verify</Text>
              </Box>
              <Box mt={3}>
                <Flex direction="row" alignItems="center" justifyContent="space-between">
                  {otpList.map(item => <Input w="50px" h="50px" />)}
                </Flex>
              </Box>
              <Box alignItems="center" mt={3}>
                <Button w="100%" colorScheme="danger" onPress={() => setStep(PASSWORD)}>Verify</Button>
              </Box>
            </>
          ) : null}
          {step === PASSWORD ? (
            <>
              <Box mt={3} alignSelf="center">
                <Text fontSize="4xl">Password</Text>
              </Box>
              <Box mt={3}>
                <Text fontSize="md">Password</Text>
                <Input placeholder="Password" w="100%" />
              </Box>
              <Box mt={3}>
                <Text fontSize="md">Password Confirm</Text>
                <Input w="100%" />
              </Box>
              <Box alignItems="center" mt={3}>
                <Button w="100%" colorScheme="danger" onPress={() => setStep(PROFILE)}>Save</Button>
              </Box>
            </>
          ) : null}
          {step === PROFILE ? (
            <ScrollView h="80" _contentContainerStyle={{
              px: "20px",
              mb: "4",
            }}>
              <Box mt={3} alignSelf="center">
                <Text fontSize="4xl">Profile</Text>
              </Box>
              <Box mt={3}>
                <Text fontSize="md">Fullname</Text>
                <Input w="100%" />
              </Box>
              <Box mt={3}>
                <Text fontSize="md">Gender</Text>
                <Input w="100%" />
              </Box>
              <Box mt={3}>
                <Text fontSize="md">Phone</Text>
                <Input w="100%" />
              </Box>
              <Box mt={3}>
                <Text fontSize="md">Address</Text>
                <Input w="100%" />
              </Box>
              <Box mt={3}>
                <Text fontSize="md">Ward</Text>
                <Input w="100%" />
              </Box>
              <Box mt={3}>
                <Text fontSize="md">District</Text>
                <Input w="100%" />
              </Box>
              <Box mt={3}>
                <Text fontSize="md">City</Text>
                <Input w="100%" />
              </Box>
              <Box alignItems="center" mt={3}>
                <Button w="100%" colorScheme="danger" onPress={() => setStep(FORGET_PASSWORD)}>Save</Button>
              </Box>
            </ScrollView>
          ) : null}
          {step === FORGET_PASSWORD ? (
            <ScrollView h="80" _contentContainerStyle={{
              px: "20px",
              mb: "4",
            }}>
              <Box mt={3} alignSelf="center">
                <Text fontSize="4xl">Forget Password</Text>
              </Box>
              <Box mt={3}>
                <Text fontSize="md">Email</Text>
                <Input w="100%" />
              </Box>
              <Box alignItems="center" mt={3}>
                <Button w="100%" colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>Confirm</Button>
              </Box>
            </ScrollView>
          ) : null}
          {step === RESET_PASSWORD ? (
            <>
              <Box mt={3} alignSelf="center">
                <Text fontSize="4xl">Reset pasword</Text>
              </Box>
              <Box mt={3}>
                <Text fontSize="md">Password</Text>
                <Input placeholder="Password" w="100%" />
              </Box>
              <Box mt={3}>
                <Text fontSize="md">Password Confirm</Text>
                <Input w="100%" />
              </Box>
              <Box alignItems="center" mt={3}>
                <Button w="100%" colorScheme="danger" onPress={() => setStep(SIGN_UP)}>Reset pasword</Button>
              </Box>
            </>
          ) : null}
          <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
            <AlertDialog.Content>
              <AlertDialog.Body py={10}>
                Please check your email to reset password
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group>
                  <Button w="100%" colorScheme="danger" onPress={() => nextStep()}>
                    OK
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </Box>
      // </NativeBaseProvider>
    // </SafeAreaView>
  );
};
export default SignInScreen;
