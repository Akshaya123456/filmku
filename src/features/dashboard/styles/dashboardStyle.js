import styled from 'styled-components/native';

import {THEMES} from '../../../constants/themes';

export const ContainerWrapper = styled.View`
  flex: 1;
  background-color: ${THEMES.light.colors.white};
`;

export const SubContainer = styled.View`
  padding-top: 16px;
  padding-horizontal: 24px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleContainer = styled.View`
  flex: 0.5;
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 22px;
  font-family: ${THEMES.light.fontFamily.blackMerriweather};
  letter-spacing: 0.02;
  color: ${THEMES.light.colors.primary};
`;

export const SeeMoreWrapper = styled.View`
  flex: 0.5;
  align-items: flex-end;
`;

export const SeeMoreView = styled.View`
  padding-horizontal: 8px;
  padding-vertical: 4px;
  border-width: 1px;
  border-color: ${THEMES.light.colors.mischka};
  border-radius: 100px;
`;

export const SeeMoreText = styled.Text`
font-size: 10px
font-family:${THEMES.light.fontFamily.regularMulish};
line-height: 13px;
letter-spacing: 0.02;
color: ${THEMES.light.colors.pearl};
`;

export const FlatListWrapper = styled.View`
  padding-top: 17px;
  flex: 1;
  margin-bottom: 5px;
`;

export const PosterWrapper = styled.TouchableOpacity`
  width: 143px;
  margin-right: 16px;
`;

export const ImageWrapper = styled.View`
  width: 143px;
  height: 212px;
  color: ${THEMES.light.colors.primary};
  border-radius: 10px;
`;

export const PosterName = styled.Text`
  padding-top: 12px;
  font-size: 14px;
  font-family: ${THEMES.light.fontFamily.boldMulish};
  line-height: 18px;
  color: ${THEMES.light.colors.black};
  width: 143px;
`;

export const RatingsWrapper = styled.View`
  padding-top: 8px;
  flex-direction: row;
  align-items: center;
`;

export const RatingText = styled.Text`
  color: ${THEMES.light.colors.gray};
  font-size: 12px;
  font-family: ${THEMES.light.fontFamily.regularMulish};
  line-height: 15px;
  padding-left: 4px;
`;

export const PopularListView = styled.View`
  padding-top: 24px;
  flex-direction: row;
  align-items: center;
`;

export const PopularListWrapper = styled.View`
  margin-horizontal: 24px;
`;

export const PopularSubContainer = styled.View`
  padding-top: 11px;
  flex-direction: row;
`;

export const PopularImageWrapper = styled.View`
  border-radius: 10px;
  width: 85px;
  height: 128px;
`;

export const PaddingView = styled.View`
  padding-left: 16px;
`;

export const MovieNameText = styled.Text`
  font-size: 14px;
  color: ${THEMES.light.colors.black};
  font-family: ${THEMES.light.fontFamily.boldMulish};
  letter-spacing: 0.02;
  line-height: 18px;
  width: 70%;
`;

export const MovieTypeWrapper = styled.View`
  padding-top: 8px;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 250px;
`;

export const MovieTypeView = styled.View`
  padding-horizontal: 12px;
  padding-vertical: 4px;
  border-width: 1px;
  border-color: ${THEMES.light.colors.fog};
  background-color: ${THEMES.light.colors.fog};
  border-radius: 100px;
  margin-right: 10px;
  margin-top: 4px;
`;

export const MovieTypeText = styled.Text`
  font-size: 8px;
  text-transform: uppercase;
  font-family: ${THEMES.light.fontFamily.semiBoldMulish};
  letter-spacing: 0.02;
  line-height: 10;
  color: ${THEMES.light.colors.portage};
`;

export const TimeWrapper = styled.View`
  padding-top: 8px;
  flex-direction: row;
  align-items: center;
`;

export const TimeText = styled.Text`
  font-size: 12px;
  line-height: 15px;
  font-family: ${THEMES.light.fontFamily.regularMulish};
  letter-spacing: 0.02;
  color: ${THEMES.light.colors.black};
  padding-left: 6.72px;
`;
