import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  searchBar: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.secondaryBackground,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 50,
  },
  input: {
    marginLeft: 10,
    width: '85%',
    color: COLORS.primaryText,
  },
});
