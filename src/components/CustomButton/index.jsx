import React from 'react';
import {Pressable, Text} from 'react-native';
import {COLORS, ICONS} from '../../theme';
import {styles} from './style';

const CustomButton = props => {
  const {label} = props;
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
      <ICONS.Feather
        name="external-link"
        color={COLORS.primaryBackground}
        size={24}
      />
    </Pressable>
  );
};

export default CustomButton;
