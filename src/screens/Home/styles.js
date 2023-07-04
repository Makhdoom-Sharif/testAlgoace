import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

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
});
