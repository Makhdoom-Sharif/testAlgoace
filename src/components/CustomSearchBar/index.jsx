import React from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native';
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
        {/* {!clicked && !!searchPhrase?.length < 1 ? (
          <ICONS.MaterialIcons
            name="search"
            size={20}
            // color={COLORS.primary}
          />
        ) : (
          <ICONS.MaterialIcons
            name="cancel"
            size={20}
            // color={COLORS.primary}
            onPress={() => {
              setSearchPhrase('');
              setClicked(prev => !prev);
            }}
          />
        )} */}
      </View>
    </View>
  );
};
export default CustomSearchBar;
