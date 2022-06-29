import React from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';
import {THEMES} from '../../constants/themes';
const {light} = THEMES;
const {width} = Dimensions.get('screen');

const Input = props => {
  const {onChange, placeholder = '', customStyle = {}, value = ''} = props;
  return (
    <TextInput
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor={light.colors.gray}
      style={[styles.input, customStyle]}
      value={value}
    />
  );
};

export default Input;
const styles = StyleSheet.create({
  input: {
    minHeight: 50,
    paddingHorizontal: 15,
    backgroundColor: light.colors.bgColor,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 7,
    fontSize: 14,
    color: light.colors.black,
    fontFamily: light.fontFamily.boldMulish,
  },
});
