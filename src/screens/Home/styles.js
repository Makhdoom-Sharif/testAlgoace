import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../theme';
const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {padding: 20},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    color: COLORS.primaryText,
    fontSize: 18,
    fontWeight: '600',
  },
  searchBarContainer: {
    marginVertical: 20,
  },
  bookListContainer: {},
  bookImage: {},
  bookTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primaryText,
    marginTop: 5,
  },
  ratingStars: {
    flexDirection: 'row',
    marginTop: 5,
  },
  loaderContainer: {
    height: screenHeight - 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
