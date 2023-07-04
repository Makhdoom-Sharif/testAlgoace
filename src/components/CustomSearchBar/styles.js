import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../theme';
// import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  searchBar: {
    // padding: Platform.OS === 'ios' ? 12 : 2,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.secondaryBackground,
    borderRadius: 25,
    alignItems: 'center',
    // borderColor: COLORS.primary,
    // borderWidth: 1,
    justifyContent: 'space-evenly',
    height: 50,
  },
  input: {
    // fontSize: 20,
    marginLeft: 10,
    width: '85%',
    // color: COLORS.primaryBlack,
  },
});
