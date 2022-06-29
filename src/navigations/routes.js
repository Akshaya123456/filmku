import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import AuthStack from './authStack';
import DrawerNavigator from './drawerNavigator';
import {navigationRef, goBack} from './rootNavigation';
import Login from '../features/login/screen/login';
import Details from '../features/dashboard/screen/details';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="auth"
        screenOptions={{
          // gestureEnabled: false,
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="auth" component={AuthStack} />
        <Stack.Screen name="dashboard" component={DrawerNavigator} />
        <Stack.Screen name="details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
