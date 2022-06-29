import styled from 'styled-components/native';

import {THEMES} from '../../constants/themes';

export const LoadingView = styled.View`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  border-radius: 10px;
  background-color: ${THEMES.light.colors.white};
  border-width: 1px;
`;
