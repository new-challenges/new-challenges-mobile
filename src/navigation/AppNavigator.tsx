import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import isEqual from 'react-fast-compare';
import HomeScreen from '../features/home/design';
import navigationActions from './NavigationService';
import SignInScreen from '../features/sign-in/design';

export type RootStackParams = {
  SignInStack: undefined;
  HomeStack: undefined;
};
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator<RootStackParams>();

const animationTransitionDefault = TransitionPresets.SlideFromRightIOS;
const getActiveRouteName = (state: any): string => {
  const route = state.routes[state.index];
  if (route.state) {
    return getActiveRouteName(route.state);
  }
  return route.name;
};
const AppNavigator = () => {
  const routeNameRef = React.useRef();

  const createHomeStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          //header: headerProps => <BackHeader {...headerProps} />,
          // gestureEnabled: true,
          //cardOverlayEnabled: true,
          //presentation: 'screen'
        }}>
        <Stack.Screen
          name="SignInStack"
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeStack"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer
      onStateChange={state => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getActiveRouteName(state);

        if (previousRouteName !== currentRouteName) {
          //tracking screen
        }
      }}
      ref={ref => navigationActions.setNavigation(ref)}>
      {createHomeStack()}
    </NavigationContainer>
  );
};
export default React.memo(AppNavigator, isEqual);
