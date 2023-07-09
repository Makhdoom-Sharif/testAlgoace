import React from 'react';
import {FlatList} from 'react-native';
import {COLORS, ICONS} from '../../theme';
import {styles} from './style';

const RatingStars = props => {
  const {rating, iconSize} = props;
  return (
    <FlatList
      data={Array.from({length: 5}, (_, index) => index)}
      renderItem={({index}) => (
        <ICONS.FontAwesome
          name="star"
          size={iconSize}
          style={styles.ratingStarIcon}
          color={index < rating ? COLORS.yellow : COLORS.gray}
        />
      )}
      keyExtractor={index => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
    />
  );
};

export default RatingStars;
