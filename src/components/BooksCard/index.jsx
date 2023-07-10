import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, Text, View} from 'react-native';
import {COLORS, ICONS} from '../../theme';
import RatingStars from '../RatingStars';
import {styles} from './style';

const BooksCard = props => {
  const {item, index} = props;
  const {navigate} = useNavigation();
  return (
    <Pressable
      style={styles.container(index % 2 == 0)}
      onPress={() => navigate('BookPreview', {item})}>
      <View style={styles.likedIconContainer}>
        <ICONS.AntDesign
          name={item?.is_liked ? 'heart' : 'hearto'}
          color={COLORS.red}
          size={20}
        />
      </View>
      <Image
        source={{uri: item?.imageLink}}
        style={styles.image}
        resizeMode="stretch"
      />

      <Text style={styles.bookTitle}>{item?.title}</Text>

      <View style={styles.ratingStars}>
        <RatingStars rating={item?.rating} iconSize={20} />
        <Text>({item?.reviews})</Text>
      </View>
      <Text style={styles.price}>{`$ ${item?.price}`}</Text>
    </Pressable>
  );
};

export default BooksCard;
