import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {BookPreviewCard, CustomButton} from '../../components';
import {COLORS, ICONS} from '../../theme';
import {styles} from './style';

const BookPreview = props => {
  const {goBack} = useNavigation();
  const book = props.route.params.item;
  const data = [
    {label: 'Author', value: book?.author},
    {label: 'Country', value: book?.country},
    {label: 'language', value: book?.language},
    {label: 'Year', value: book?.year},
    {label: 'Pages', value: book.pages},
  ];
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <ICONS.Ionicons
          name="arrow-back"
          color={COLORS.primaryText}
          size={30}
          onPress={goBack}
        />
        <View>
          <BookPreviewCard book={book} />
          <Text style={styles.title}>{book?.title}</Text>
          <FlatList
            scrollEnabled={false}
            data={data}
            style={styles.flatList}
            renderItem={({item}) => {
              return (
                <View style={styles.itemContainer}>
                  <Text style={styles.label}>{item?.label}:</Text>
                  <Text style={styles.value}>{item?.value}</Text>
                </View>
              );
            }}
          />
          <CustomButton label={'View Details'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookPreview;
