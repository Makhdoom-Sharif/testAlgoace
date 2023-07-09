import React from 'react';
import {styles} from './style';
import {Image, Text, View} from 'react-native';
import RatingStars from '../RatingStars';

const BookPreviewCard = props => {
  const {book} = props;
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{uri: book?.imageLink}}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.bottomContainer}>
        <View style={styles.bottomSection}>
          <Text style={styles.bottomHeading}> Rating</Text>
          <RatingStars rating={book?.rating} iconSize={12} />
        </View>
        <View style={styles.bottomSection}>
          <Text style={styles.bottomHeading}>Reviews</Text>
          <Text style={styles.bottomText}>({book?.reviews})</Text>
        </View>
        <View style={styles.bottomSection}>
          <Text style={styles.bottomHeading}>Price</Text>
          <Text style={styles.bottomText}>{book?.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default BookPreviewCard;
