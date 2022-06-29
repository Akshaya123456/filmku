import React from 'react';
import {ActivityIndicator} from 'react-native';

import {LoadingView, MainContainer} from './styles';

import {THEMES} from '../../constants/themes';

const InlineLoader = () => {
  return (
    <MainContainer>
      <LoadingView>
        <ActivityIndicator size="small" color={THEMES.light.colors.primary} />
      </LoadingView>
    </MainContainer>
  );
};

export default InlineLoader;
