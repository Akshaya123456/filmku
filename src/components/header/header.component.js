import React from 'react';

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

  return (
    <HeaderWrapper>
      <MenuWrapper>
        <Menu />
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
