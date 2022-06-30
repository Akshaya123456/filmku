import React from 'react';
import {DrawerItem} from '@react-navigation/drawer';
import {SafeAreaView, ScrollView, StyleSheet, Alert} from 'react-native';
import {CommonActions, StackActions} from '@react-navigation/native';

export default function CustomDrawer({navigation, state}) {
  const onLogOut = () => {
    Alert.alert(
      'Sign out?',
      'You can always access your content by signing back in',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Sign out',
          style: 'destructive',
          onPress: () => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'auth'}],
              }),
            );
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}>
        <DrawerIt label={'Logout'} icon="logout" onPress={onLogOut} />
      </ScrollView>
    </SafeAreaView>
  );
}

function DrawerIt({icon, label, active, ...other}) {
  return (
    <DrawerItem
      label={label}
      labelStyle={[styles.drawerLabel, active && {color: "'#110E47'"}]}
      style={[styles.drawerStyle, active && {backgroundColor: '#BCBCCD'}]}
      {...other}
    />
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerLabel: {
    marginLeft: 20,
    color: '#000',
    fontSize: 15,
  },
  drawerStyle: {
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 0,
    marginVertical: 0,
    paddingTop: 0,
    paddingVertical: 0,
    marginTop: 0,
  },
  devider: {
    height: 1,
    backgroundColor: '#d8d8d8',
    marginVertical: 5,
  },
});
