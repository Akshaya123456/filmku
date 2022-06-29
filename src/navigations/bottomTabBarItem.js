import React from 'react';
import {TouchableOpacity} from 'react-native';

import Film from '../../src/assets/svgs/film.svg';
import BookMark from '../../src/assets/svgs/bookmark.svg';
import Search from '../../src/assets/svgs/search.svg';

import {BottomTabContainer, IconContainer} from './styles';

const tabBarStyle = {
  flex: 1 / 3,
  height: '100%',
  paddingTop: 10,
  alignItems: 'center',
  marginBottom: 10,
};

const BottomTabBarItem = ({navigation, state}) => {
  const currentIndex = state.index;

  const Tab = ({icon, index, route}) => {
    const active = currentIndex === index;
    const Icon = icon;
    return (
      <TouchableOpacity
        style={tabBarStyle}
        activeOpacity={active ? 1 : 0.5}
        onPress={() => navigation.navigate(route)}>
        <IconContainer>
          <Icon fill={active ? '#110E47' : '#BCBCCD'} />
        </IconContainer>
      </TouchableOpacity>
    );
  };

  return (
    <BottomTabContainer>
      <Tab index={0} route="dashboard" icon={Film} />
      <Tab index={1} route="search" icon={Search} />
      <Tab index={2} route="bookmark" icon={BookMark} />
    </BottomTabContainer>
  );
};

export default BottomTabBarItem;
