import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';

import Container from '../../../components/container/container.component';
import Header from '../../../components/header/header.component';
import Loader from '../../../components/loader/loader.component';
import Star from '../../../assets/svgs/Star.svg';
import Clock from '../../../assets/svgs/clock.svg';
import {
  ContainerWrapper,
  SubContainer,
  RowContainer,
  TitleContainer,
  Title,
  SeeMoreWrapper,
  SeeMoreText,
  SeeMoreView,
  FlatListWrapper,
  PosterWrapper,
  ImageWrapper,
  PosterName,
  RatingsWrapper,
  RatingText,
  PopularListView,
  PopularListWrapper,
  PopularSubContainer,
  PopularImageWrapper,
  PaddingView,
  MovieNameText,
  MovieTypeWrapper,
  MovieTypeView,
  MovieTypeText,
  TimeWrapper,
  TimeText,
} from '../styles/dashboardStyle';
import {strings} from '../../../constants/strings';
import {config} from '../../../constants/config';

import {
  getTrendingList,
  getGenericList,
} from '../../../redux-store/actions/dashboardAction';

const {filmKu, nowShowing, popular, seeMore} = strings;

function Dashboard(props) {
  const dispatch = useDispatch();
  const {isFetching, movieList, genericData} = useSelector(
    ({dashboard}) => dashboard,
  );

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    await dispatch(getGenericList());
    await dispatch(getTrendingList());
  };

  // popular list item
  const renderItem = ({item}) => {
    return (
      <PopularListWrapper>
        <PopularSubContainer>
          <PopularImageWrapper>
            <FastImage
              source={{
                uri: `${config.imageUrl + item.poster_path}`,
              }}
              style={{width: 85, height: 128, borderRadius: 10}}
              resizeMode={FastImage.resizeMode.contain}
            />
          </PopularImageWrapper>
          <PaddingView>
            <MovieNameText numberOfLines={2}>
              {item.name ? item.name : item.title}
            </MovieNameText>
            {renderCommonStarRow(item.vote_average)}
            <MovieTypeWrapper>
              {item?.genre_ids.map(data => {
                return (
                  <>
                    {genericData?.[data] && (
                      <MovieTypeView>
                        <MovieTypeText>{genericData?.[data]}</MovieTypeText>
                      </MovieTypeView>
                    )}
                  </>
                );
              })}
            </MovieTypeWrapper>
            <TimeWrapper>
              <Clock />
              <TimeText>
                {item.release_date ? item.release_date : item.first_air_date}
              </TimeText>
            </TimeWrapper>
          </PaddingView>
        </PopularSubContainer>
      </PopularListWrapper>
    );
  };

  //  now showing item
  const renderNowShowingItem = ({item}) => {
    return (
      <PosterWrapper
        onPress={() =>
          props.navigation.navigate('details', {movieId: item?.id})
        }>
        <ImageWrapper>
          <FastImage
            source={{
              uri: `${config.imageUrl + item.poster_path}`,
            }}
            style={{width: 143, height: 212, borderRadius: 10}}
            resizeMode={FastImage.resizeMode.contain}
          />
        </ImageWrapper>
        <PosterName allowFontScaling={false}>
          {item?.name ? item?.name : item?.title}
        </PosterName>
        {renderCommonStarRow(item.vote_average)}
      </PosterWrapper>
    );
  };

  //  star
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
      <>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <SeeMoreWrapper>
          <SeeMoreView>
            <SeeMoreText>{seeMore}</SeeMoreText>
          </SeeMoreView>
        </SeeMoreWrapper>
      </>
    );
  };

  // now showing list
  const renderHeaderComponent = ({item, index}) => {
    return (
      <View style={{marginLeft: 24}}>
        <FlatList
          horizontal={true}
          data={movieList}
          keyExtractor={(it, i) => String(i)}
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={renderNowShowingItem}
        />
        <PopularListView style={{marginRight: 24}}>
          {renderCommonSeeMoreRow(popular)}
        </PopularListView>
      </View>
    );
  };

  return (
    <Container>
      <Header title={filmKu} {...props} />
      <ContainerWrapper>
        {isFetching ? (
          <Loader isVisible={isFetching} />
        ) : (
          <>
            <SubContainer>
              <RowContainer>{renderCommonSeeMoreRow(nowShowing)}</RowContainer>
            </SubContainer>
            <FlatListWrapper>
              <FlatList
                data={movieList}
                keyExtractor={(it, i) => String(i)}
                contentContainerStyle={{flexGrow: 1}}
                ListHeaderComponent={renderHeaderComponent}
                keyboardShouldPersistTaps={'handled'}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
              />
            </FlatListWrapper>
          </>
        )}
      </ContainerWrapper>
    </Container>
  );
}

export default Dashboard;
