import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import {THEMES} from '../../../constants/themes';

export const ContainerWrapper = styled.ScrollView`
  flex: 1;
  background-color: ${THEMES.light.colors.white};
`;

export const ImageBanner = styled.View`
  height: 300;
  width: ${Dimensions.get('screen').width};
  background-color: ${THEMES.light.colors.red};
  justify-content: center;
`;

export const DetailWrapper = styled.View`
  background-color: ${THEMES.light.colors.white};
  border-radius: 15px;
  bottom: 20px;
`;

export const SubWrapper = styled.View`
  padding: 24px;
`;

export const HeadingWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeadingTitleView = styled.View`
  flex: 0.8;
`;

export const HeadingTitle = styled.Text`
  padding-top: 12px;
  font-size: 20px;
  font-family: ${THEMES.light.fontFamily.boldMulish};
  line-height: 25px;
  color: ${THEMES.light.colors.black};
`;

export const BookMarkView = styled.View`
  flex: 0.2;
  align-items: flex-end;
`;

export const DescriptionWrapper = styled.View`
  padding-top: 24px;
`;

export const DescriptionHeading = styled.Text`
  font-size: 16px;
  line-height: 22px;
  font-family: ${THEMES.light.fontFamily.boldMerriweather};
  letter-spacing: 0.02;
  color: ${THEMES.light.colors.primary};
`;

export const DescriptionText = styled.Text`
  font-size: 12px;
  line-height: 25px;
  font-family: ${THEMES.light.fontFamily.regularMerriweather};
  letter-spacing: 0.02;
  color: ${THEMES.light.colors.gray};
  padding-top: 8px;
`;

export const MovieTypeView = styled.View`
  padding-top: 16px;
  flex-direction: row;
`;

export const MovieCategoryText = styled.Text`
  color: ${THEMES.light.colors.gray};
  font-size: 12px;
  line-height: 15px;
  font-family: ${THEMES.light.fontFamily.regularMulish};
`;

export const MovieCategoryValue = styled.Text`
  color: ${THEMES.light.colors.black};
  padding-top: 4px;
  font-size: 12px;
  line-height: 15px;
  font-family: ${THEMES.light.fontFamily.regularMulish};
`;

export const CastView = styled.View`
  width: 76px;
  height: 72px;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${THEMES.light.colors.black};
`;

export const CastText = styled.Text`
  font-size: 12px;
  padding-top: 8px;
  font-family: ${THEMES.light.fontFamily.regularMulish};
  line-height: 13px;
  letter-spacing: 0.02;
  color: ${THEMES.light.colors.primary};
  width: 76px;
  text-align: center;
`;

export const MovieCategoryView = styled.View`
  padding-horizontal: 12px;
  padding-vertical: 4px;
  border-width: 1px;
  border-color: ${THEMES.light.colors.fog};
  background-color: ${THEMES.light.colors.fog};
  border-radius: 100px;
  margin-right: 10px;
  margin-top: 4px;
`;

export const MovieCategoryWrapper = styled.View`
  padding-top: 16px;
  flex-direction: row;
  align-items: center;
`;

export const ImagePositionWrapper = styled.View`
  position: absolute;
  height: 300px;
  width: 100%;
  padding-horizontal: 28px;
  align-items: center;
`;

export const ImageRow = styled.View`
  flex-direction: row;
  padding-top: 20px;
`;

export const BackView = styled.View`
  flex: 0.5;
`;

export const MenuView = styled.View`
  flex: 0.5;
  align-items: flex-end;
`;

export const PlayView = styled.View`
  padding-top: 80px;
`;
