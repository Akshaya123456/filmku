import styled from 'styled-components/native';
import {THEMES} from '../../constants/themes';

export const HeaderWrapper = styled.View`
height: 60px;
padding-horizontal: 24px
background-color: ${THEMES.light.colors.white};
flex-direction: row;
align-items: center;
`;
