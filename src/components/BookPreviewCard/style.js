import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    // Add styles for your view container
    backgroundColor: '#FFFFFF', // Example background color
    elevation: 5, // Controls the depth of the shadow

    shadowColor: '#000000', // Sets the color of the shadow
    shadowOffset: {
      width: 5, // Controls the shadow's horizontal offset
      height: 5, // Controls the shadow's vertical offset
    },
    shadowOpacity: 0.5, // Sets the opacity/transparency of the shadow
    shadowRadius: 5, // Sets the blur radius of the shadow
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
