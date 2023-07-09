import React from 'react';
import {TextInput, View} from 'react-native';
import {COLORS, ICONS} from '../../theme';
import {styles} from './styles';

const CustomSearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <ICONS.MaterialIcons
          name="search"
          size={20}
          color={COLORS.primaryText}
        />
        <TextInput
          placeholderTextColor={COLORS.primaryText}
          style={styles.input}
          placeholder="Search..."
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(prev => !prev);
          }}
        />
      </View>
    </View>
  );
};
export default CustomSearchBar;
