/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

const BASE_URL = 'https://htl-sdk-gateway-api-qa.akachains.io';
// const BASE_URL = 'https://fpt-mobile-gateway-api-qa.akachains.io';

// @ts-ignore
const ExampleApp = ({navigation}) => {
  const [username, setUsername] = useState('0907025327');
  const [password, setPassword] = useState('Test@12345');
  const [token, setToken] = useState(
    // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJQaG9uZSI6IjAzODc3NzYyNjIifQ.FT5-mxsQF_KVxdvFcs99Nkmau-cQSFd6ouqVQe2OgEI',
    // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJQaG9uZSI6IjA5NDk2OTAwMDIifQ.cxjYtNGa01VfCympin_tWt4vjMg9bmU_Ii3Q5VWzYTU',
    // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJQaG9uZSI6IjA5MDcwMjUzMjcifQ.H5HHzFUOujUsRQjLffoollULcpVyoRTjVpuWdng0gt4',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwOTQwMTA2MDA1IiwiaHRfaWQiOiJkZWU0MzllNC05NGM4LTQzOTQtOGRkNC0xYzAxOTFlZGZkYTIifQ.Aq8byobdcxvvQllQiN-paJ_mmqxFcojwKyBVbDXOiu0',
  );
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>☆AKC loyalty sdk example</Text>
      <Text style={styles.domain}>Remote Address: {BASE_URL}</Text>
      <TextInput
        style={styles.input}
        placeholder="access token"
        onChangeText={setToken}
        value={token}
        multiline
      />
    </View>
  );
};
export default ExampleApp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  domain: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color: '#FFF',
  },
  input: {
    height: 120,
    width: '85%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputArea: {
    height: 100,
    width: '85%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
