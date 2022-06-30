import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';

import FastImage from 'react-native-fast-image';

import Container from '../../../components/container/container.component';
import EmptyList from '../../../components/emptyList/emptyList.component';
import Loader from '../../../components/loader/loader.component';

import Star from '../../../assets/svgs/Star.svg';
import Play from '../../../assets/svgs/buttonPlay.svg';
import Back from '../../../assets/svgs/back.svg';
import Menu from '../../../assets/svgs/menu.svg';
import Search from '../../../assets/svgs/search.svg';
import {config} from '../../../constants/config';

import {
  ContainerWrapper,
  ImageBanner,
  DetailWrapper,
  SubWrapper,
  HeadingWrapper,
  HeadingTitleView,
  HeadingTitle,
  BookMarkView,
  DescriptionWrapper,
  DescriptionHeading,
  DescriptionText,
  MovieCategoryText,
  MovieCategoryValue,
  MovieTypeView,
  CastView,
  CastText,
  MovieCategoryView,
  MovieCategoryWrapper,
  ImagePositionWrapper,
  ImageRow,
  BackView,
  MenuView,
  PlayView,
} from '../styles/detailsStyle';
import {
  RatingsWrapper,
  RatingText,
  TitleContainer,
  Title,
  SeeMoreWrapper,
  SeeMoreText,
  SeeMoreView,
  MovieTypeText,
} from '../styles/dashboardStyle';
import {THEMES} from '../../../constants/themes';
import {getDetails} from '../../../redux-store/actions/dashboardAction';
import NoImageSvg from '../../../assets/svgs/NoImageSvg';
import {strings} from '../../../constants/strings';

function Details(props) {
  const [detailsData, setDetailsData] = useState();
  const [isLoading, setLoading] = useState(true);

  const movieId = props?.route?.params?.movieId;

  const {
    popularity,
    ratings,
    seeMore,
    noCastFound,
    description,
    noTitle,
    releaseDate,
    noDescription,
  } = strings;

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    let res = await getDetails(movieId);
    if (res) {
      setDetailsData(res);
    }
    setLoading(false);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{paddingTop: 17, paddingRight: 13}}>
        <CastView>
          {item?.logo_path ? (
            <FastImage
              source={{
                uri: `${config.imageUrl + item.logo_path}`,
              }}
              style={{width: 76, height: 72, borderRadius: 10}}
              resizeMode={FastImage.resizeMode.contain}
            />
          ) : (
            <NoImageSvg
              height={60}
              width={76}
              fillColor={THEMES.light.colors.white}
            />
          )}
        </CastView>
        <CastText>{item.name}</CastText>
      </View>
    );
  };

  const renderCommonStarRow = ratings => {
    return (
      <RatingsWrapper>
        <Star />
        <RatingText>{ratings}</RatingText>
      </RatingsWrapper>
    );
  };

  //  see more
  const renderCommonSeeMoreRow = title => {
    return (
      <View style={{paddingTop: 24}}>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <SeeMoreWrapper>
          <SeeMoreView>
            <SeeMoreText>{seeMore}</SeeMoreText>
          </SeeMoreView>
        </SeeMoreWrapper>
      </View>
    );
  };

  const handleBack = () => props.navigation.goBack()

  return (
    <Container>
      {isLoading ? (
        <Loader isVisible={isLoading} />
      ) : (
        <ContainerWrapper>
          <ImageBanner>
            {detailsData?.backdrop_path ? (
              <FastImage
                source={{
                  uri: `${config.imageUrl + detailsData?.backdrop_path}`,
                }}
                style={{width: '100%', height: '100%'}}
                resizeMode={FastImage.resizeMode.stretch}
              />
            ) : (
              <NoImageSvg
                height={230}
                width={'100%'}
                fillColor={THEMES.light.colors.bgColor}
              />
            )}
          </ImageBanner>
          <ImagePositionWrapper>
            <ImageRow>
              <BackView>
                <TouchableOpacity onPress={handleBack}>
                    <Back />
                </TouchableOpacity>
              </BackView>
              <MenuView>
                    <Menu />
              </MenuView>
            </ImageRow>
            <PlayView>
              <Play></Play>
            </PlayView>
          </ImagePositionWrapper>
          <DetailWrapper>
            <SubWrapper>
              <HeadingWrapper>
                <HeadingTitleView>
                  <HeadingTitle>
                    {detailsData?.name
                      ? detailsData?.name
                      : detailsData?.title
                      ? detailsData?.title
                      : noTitle}
                  </HeadingTitle>
                </HeadingTitleView>
                <BookMarkView>
                  <Search fill={THEMES.light.colors.alto} />
                </BookMarkView>
              </HeadingWrapper>

              {renderCommonStarRow(
                detailsData?.vote_average ? detailsData?.vote_average : '0',
              )}
              <MovieCategoryWrapper>
                {detailsData?.genres.map(data => {
                  return (
                    <>
                      {data && (
                        <MovieCategoryView>
                          <MovieTypeText>{data?.name}</MovieTypeText>
                        </MovieCategoryView>
                      )}
                    </>
                  );
                })}
              </MovieCategoryWrapper>

              <MovieTypeView>
                <View>
                  <MovieCategoryText>{releaseDate}</MovieCategoryText>
                  <MovieCategoryValue>
                    {detailsData?.release_date
                      ? detailsData?.release_date
                      : '--'}
                  </MovieCategoryValue>
                </View>

                <View style={{paddingLeft: 69}}>
                  <MovieCategoryText>{popularity}</MovieCategoryText>
                  <MovieCategoryValue>
                    {' '}
                    {detailsData?.popularity ? detailsData?.popularity : '--'}
                  </MovieCategoryValue>
                </View>

                <View style={{paddingLeft: 69}}>
                  <MovieCategoryText>{ratings}</MovieCategoryText>
                  <MovieCategoryValue>
                    {detailsData?.vote_average ? detailsData?.vote_average : 0}
                  </MovieCategoryValue>
                </View>
              </MovieTypeView>

              <DescriptionWrapper>
                <DescriptionHeading>{description}</DescriptionHeading>
              </DescriptionWrapper>

              <DescriptionText>
                {detailsData?.overview ? detailsData?.overview : noDescription}
              </DescriptionText>

              {renderCommonSeeMoreRow('Cast')}

              <FlatList
                horizontal={true}
                data={detailsData?.production_companies}
                keyExtractor={(it, i) => String(i)}
                contentContainerStyle={{flexGrow: 1}}
                keyboardShouldPersistTaps={'handled'}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <EmptyList message={noCastFound} />}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
              />
            </SubWrapper>
          </DetailWrapper>
        </ContainerWrapper>
      )}
    </Container>
  );
}

export default Details;
