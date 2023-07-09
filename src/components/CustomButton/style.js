import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blue,
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
