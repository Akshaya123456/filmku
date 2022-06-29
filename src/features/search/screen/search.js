import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';

import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';

import Container from '../../../components/container/container.component';
import Header from '../../../components/header/header.component';
import Input from '../../../components/inputComponent/input.component';
import {config} from '../../../constants/config';
import {strings} from '../../../constants/strings';
import {THEMES} from '../../../constants/themes';
import {getSearchList} from '../../../redux-store/actions/searchAction';
import {
  ContainerWrapper,
  FlatListWrapper,
  MovieNameText,
  MovieTypeWrapper,
  PaddingView,
  PopularImageWrapper,
  PopularListWrapper,
  PopularSubContainer,
  RatingsWrapper,
  RatingText,
  TimeText,
  TimeWrapper,
  MovieTypeView,
  MovieTypeText,
} from '../../dashboard/styles/dashboardStyle';
import Star from '../../../assets/svgs/Star.svg';
import Clock from '../../../assets/svgs/clock.svg';
import {SEARCH_DATA_ERROR} from '../../../redux-store/types';

const {search} = strings;
const {light} = THEMES;
let timeOutId;

const debounce = (func, delay) => {
  return (...args) => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

function Search(props) {
  const dispatch = useDispatch();
  const {isSearching, searchList, totalPages} = useSelector(
    ({search}) => search,
  );
  const {genericData, movieList} = useSelector(({dashboard}) => dashboard);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (searchQuery && searchQuery?.length < 3) {
      dispatch({
        type: SEARCH_DATA_ERROR,
      });
    } else if (searchQuery && searchQuery?.length >= 3) {
      debounceSearch(searchQuery);
    }
  }, [searchQuery, page]);

  const initSearch = async () => {
    dispatch(getSearchList(searchQuery, page));
  };

  const debounceSearch = debounce(initSearch, 500);

  const renderSearchInput = () => {
    return (
      <Input
        value={searchQuery}
        placeholder={search}
        onChange={text => {
          setSearchQuery(text);
        }}
      />
    );
  };

  const handlePullTorefresh = () => {
    setRefreshing(true);
    setSearchQuery('');
    setPage(1);
    dispatch({
      type: SEARCH_DATA_ERROR,
    });
    setRefreshing(false);
  };

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
                {item.release_date
                  ? item.release_date
                  : item.first_air_date
                  ? item.first_air_date
                  : '--'}
              </TimeText>
            </TimeWrapper>
          </PaddingView>
        </PopularSubContainer>
      </PopularListWrapper>
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

  const loadMoreData = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <Container>
      <Header title={search} {...props} />
      <ContainerWrapper>
        {renderSearchInput()}
        <>
          <FlatListWrapper>
            <FlatList
              data={searchList?.length ? searchList : movieList}
              keyExtractor={(it, i) => String(i)}
              contentContainerStyle={{flexGrow: 1}}
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps={'never'}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
              onEndReachedThreshold={0.9}
              onEndReached={loadMoreData}
              refreshing={refreshing}
              onRefresh={handlePullTorefresh}
              ListFooterComponent={
                isSearching ? (
                  <ActivityIndicator
                    size="small"
                    colors={light.colors.primary}
                  />
                ) : null
              }
            />
          </FlatListWrapper>
        </>
      </ContainerWrapper>
    </Container>
  );
}

export default Search;
