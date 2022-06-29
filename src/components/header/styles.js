import styled from 'styled-components/native';

import {THEMES} from '../../constants/themes';

export const HeaderWrapper = styled.View`
height: 60px;
padding-horizontal: 24px
background-color: ${THEMES.light.colors.white};
flex-direction: row;
align-items: center;
`;

export const MenuWrapper = styled.View`
  flex: 0.2;
`;

export const TitleWrapper = styled.View`
  flex: 0.6;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: ${THEMES.light.colors.primary};
  font-size: 16px;
  letter-spacing: 0.02;
  fontfamily: ${THEMES.light.fontFamily.blackMerriweather};
  line-height: 20px;
`;

export const NotificationWrapper = styled.View`
  flex: 0.2;
  align-items: flex-end;
`;
