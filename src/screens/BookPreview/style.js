import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
  container: {padding: 20},
  title: {
    color: COLORS.primaryText,
    fontWeight: '600',
    fontSize: 22,
    marginBottom: 20,
  },
  flatList: {marginBottom: 20},
  itemContainer: {flexDirection: 'row', marginBottom: 5},
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.primaryText,
    marginRight: 5,
  },
  value: {fontSize: 16, color: COLORS.primaryText},
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#004D6D',
    paddingVertical: 10,
    borderRadius: 100,
    marginBottom: 25,
  },
  buttonText: {
    color: COLORS.primaryBackground,
    fontSize: 16,
    fontWeight: '500',
    marginRight: 5,
  },
});
