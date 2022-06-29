import styled from 'styled-components/native';

import {THEMES} from '../../../constants/themes';

export const ScrollWrapper = styled.ScrollView`
  flex: 1;
  background-color: ${THEMES.light.colors.white};
  padding-horizontal: 40px;
  padding-vertical: 100px;
`;

export const HeadingText = styled.Text`
  font-size: 16px;
  color: ${THEMES.light.colors.primary};
  font-family: ${THEMES.light.fontFamily.blackMerriweather};
  text-align: center;
`;

export const PaddingView = styled.View`
  padding-top: ${props => props.paddingTop}px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${THEMES.light.colors.primary};
  margin-vertical: 50px;
  padding-horizontal: 20px;
  padding-vertical: 15px;
  align-items: center;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: ${THEMES.light.colors.white};
`;

export const FooterText = styled.Text`
  text-align: center;
  font-size: 16px;
  color: ${THEMES.light.colors.gray};
`;

export const FooterSubText = styled.Text`
  font-size: 16px;
  color: ${THEMES.light.colors.primary};
`;

export const ErrorView = styled.View`
  padding-vertical: 10px;
  align-items: center;
`;

export const ErrorText = styled.Text`
  font-size: 14px;
  color: red;
`;
