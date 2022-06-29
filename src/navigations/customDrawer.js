import React from 'react';
import {DrawerItem} from '@react-navigation/drawer';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Linking,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CustomDrawer({navigation, state}) {
  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}>
        <DrawerIt
          label={'Logout'}
          icon="logout"
          onPress={() => console.log('test')}
        />
      </ScrollView>
    </View>
  );
}

function DrawerIt({icon, label, active, ...other}) {
  return (
    <DrawerItem
      label={label}
      icon={() => (
        <Icon
          name={icon}
          size={26}
          color={active ? '#110E47' : '#000000'}
          style={{paddingLeft: 10}}
        />
      )}
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
    marginLeft: -10,
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
