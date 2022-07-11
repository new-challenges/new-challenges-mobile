import React from "react";
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import navigationActions from '../../navigation/NavigationService';

const FooterComponent = () => {
  const [selected, setSelected] = React.useState(1);

  const onSelected = (index: number, name: string) => {
    setSelected(index);
    navigationActions.navigate(name);
  }

  return <NativeBaseProvider>
    <Box flex={1} bg="white" safeAreaTop width="100%" alignSelf="center" borderWidth="1">
      <Center flex={1}></Center>
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => onSelected(0, 'HomeStack')}>
          <Center>
            <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? "home" : "home-outline"} />} color="white" size="sm" />
            <Text color="white" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => onSelected(1, 'SignInStack')}>
          <Center>
            <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
            <Text color="white" fontSize="12">
              Search
            </Text>
          </Center>
        </Pressable>
        <Pressable opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => onSelected(2, 'SignInStack')}>
          <Center>
            <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? "cart" : "cart-outline"} />} color="white" size="sm" />
            <Text color="white" fontSize="12">
              Cart
            </Text>
          </Center>
        </Pressable>
        <Pressable opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => onSelected(3, 'SignInStack')}>
          <Center>
            <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? "account" : "account-outline"} />} color="white" size="sm" />
            <Text color="white" fontSize="12">
              Account
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  </NativeBaseProvider>;
}

export const Footer = () => {
  return (
    <FooterComponent />
  );
};