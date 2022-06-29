import React from 'react';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {SafeAreaViewWrapper} from './styles';

const Container = ({backgroundColor, children}) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaViewWrapper
      backgroundColor={backgroundColor}
      paddingTop={insets.top}>
      {children}
    </SafeAreaViewWrapper>
  );
};

export default Container;
