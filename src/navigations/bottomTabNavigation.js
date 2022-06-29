import React from 'react';

import {Platform} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Dashboard from '../features/dashboard/screen/dashboard';
import Search from '../features/search/screen/search';
import BookMark from '../features/bookmark/screen/bookmark';

import BottomTabBarItem from './bottomTabBarItem';

const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false,
  gestureEnabled: false,
});

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="dashboard"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: [{display: 'flex'}, null],
      }}
      tabBar={props => <BottomTabBarItem {...props} />}>
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={navOptionHandler}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={navOptionHandler}
        options={{
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="bookmark"
        component={BookMark}
        options={navOptionHandler}
      />
    </Tab.Navigator>
  );
}
