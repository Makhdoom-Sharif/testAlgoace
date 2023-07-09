import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
  container: isEvenIndex => ({
    width: '50%',
    paddingRight: isEvenIndex ? 5 : 0,
    marginBottom: 20,
    paddingLeft: isEvenIndex ? 0 : 5,
    position: 'relative',
  }),
  likedIconContainer: {
    backgroundColor: COLORS.primaryBackground,
    position: 'absolute',
    zIndex: 999,
    padding: 10,
    borderRadius: 40,
    right: 0,
    margin: 10,
  },
  image: {minWidth: '100%', height: 300, borderRadius: 10},
  bookTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primaryText,
    marginTop: 5,
  },
  ratingStars: {
    flexDirection: 'row',
    marginTop: 5,
    width: '100%',
  },
  price: {marginTop: 5},
});
