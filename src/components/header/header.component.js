import React from 'react';
import { TouchableOpacity } from 'react-native';

import Menu from '../../assets/svgs/drawer.svg';
import Notification from '../../assets/svgs/notification.svg';

import {
  HeaderWrapper,
  MenuWrapper,
  TitleWrapper,
  TitleText,
  NotificationWrapper,
} from './styles';

function Header(props) {
  const {title} = props;

  const handleDrawer = () => props.navigation.toggleDrawer();

  return (
    <HeaderWrapper>
      <MenuWrapper>
        <TouchableOpacity onPress={handleDrawer}><Menu /></TouchableOpacity>
      </MenuWrapper>
      <TitleWrapper>
        <TitleText allowFontScaling={false}>{title}</TitleText>
      </TitleWrapper>
      <NotificationWrapper>
        <Notification />
      </NotificationWrapper>
    </HeaderWrapper>
  );
}

export default Header;
