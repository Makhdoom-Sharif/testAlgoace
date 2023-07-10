import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primaryBackground,
    elevation: 5,
    shadowColor: COLORS.primaryText,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    paddingTop: 20,
  },
  image: {
    height: 500,
    width: '100%',
    borderRadius: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 14,
    paddingBottom: 20,
  },
  bottomSection: {
    alignItems: 'center',
    width: '33.33%',
  },
  bottomHeading: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.primaryText,
    marginBottom: 5,
  },
  bottomText: {color: COLORS.secondaryText, fontSize: 12},
});
