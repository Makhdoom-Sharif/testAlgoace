import React from 'react';
import {ActivityIndicator} from 'react-native';
import {COLORS} from '../../theme';
const Loading = () => {
  return <ActivityIndicator size="large" color={COLORS.blue} />;
};

export default Loading;
