import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigation from './bottomTabNavigation';

import CustomDrawer from './customDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="dashboard"
      drawerType="back"
      drawerStyle={{
        backgroundColor: '#fff',
      }}
      drawerContentOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        activeBackgroundColor: 'transparent',
        labelStyle: {
          fontSize: 14,
          paddingLeft: 15,
          textTransform: 'capitalize',
          paddingVertical: 0,
        },
        itemStyle: {
          marginVertical: 0,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="dashboard"
        component={BottomTabNavigation}
        options={{unmountOnBlur: true}}
      />
    </Drawer.Navigator>
  );
}
