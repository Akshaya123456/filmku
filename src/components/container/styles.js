import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';

import {THEMES} from '../../constants/themes';

export const SafeAreaViewWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props =>
    props.backgroundColor || THEMES.light.colors.bgColor};
  padding-top: ${props => props.paddingTop ?? 0}px;
`;
