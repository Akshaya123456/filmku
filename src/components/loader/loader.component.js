import React from 'react';
import {ActivityIndicator} from 'react-native';

import ModalView from 'react-native-modal';

import {THEMES} from '../../constants/themes';

import {LoadingView} from './styles';

const modalStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

const Loader = props => {
  const {isVisible} = props;
  console.log(isVisible);
  return (
    <ModalView
      animationIn="zoomIn"
      style={modalStyle}
      backdropOpacity={0.3}
      isVisible={isVisible}>
      <LoadingView>
        <ActivityIndicator size="small" colors={THEMES.light.colors.primary} />
      </LoadingView>
    </ModalView>
  );
};

export default Loader;
