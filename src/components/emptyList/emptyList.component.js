import React from 'react';
import {Text, View} from 'react-native';

import {THEMES} from '../../constants/themes';
import {InlineLoader} from '../inlineLoader/inlineLoader.component';

const root = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const textStyle = {
  opacity: 0.6,
  textAlign: 'center',
  color: THEMES.light.colors.gray,
  fontSize: 12,
};

export default function EmptyList({message, isLoading, containStyle}) {
  return (
    <View style={[root, containStyle]}>
      {isLoading ? (
        <InlineLoader />
      ) : (
        <Text
          allowFontScaling={false}
          style={textStyle}
          color={THEMES.light.colors.black}>
          {message}
        </Text>
      )}
    </View>
  );
}
