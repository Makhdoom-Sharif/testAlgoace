import React, {useEffect, useState} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import profileImage from '../../assets/images/profileImage.jpg';
import backgroundCard from '../../assets/images/backgroundCard.png';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {CustomSearchBar} from '../../components';
import {fetchBookList} from '../../services/bookData';
import {useDispatch, useSelector} from 'react-redux';
import {bookListData} from '../../store/actions';
import {COLORS, ICONS} from '../../theme';
const Home = () => {
  const dispatch = useDispatch();
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const data = useSelector(state => state.bookList);
  // console.log('data==', data);
  let item = data[0];
  console.log('item', item);
  const getBookList = async () => {
    try {
      // const data = await fetchBookList();
      // console.log('data', data?.data?.data);
      // dispatch(bookListData(data?.data?.data));
    } catch (err) {
      console.log('err', err);
    }
  };
  useEffect(() => {
    getBookList();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hi Nick</Text>
          <Image source={profileImage} style={styles.image} />
        </View>
        <View style={styles.searchBarContainer}>
          <CustomSearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
        </View>
        <View style={{width: '50%'}}>
          <Image
            source={{uri: item?.imageLink}}
            style={{width: '100%', height: 350}}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: COLORS.primaryText,
              marginTop: 5,
            }}>
            {item?.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
            }}>
            <FlatList
              style={{maxWidth: 125}}
              scrollEnabled={false}
              horizontal
              data={[0, 1, 2, 3, 4]}
              renderItem={({item}) => {
                return (
                  <ICONS.FontAwesome
                    name="star"
                    size={20}
                    style={{marginRight: 5}}
                  />
                );
              }}
            />
            <Text>({item.reviews})</Text>
          </View>
          <Text
            style={{
              marginTop: 5,
            }}>{`$ ${item?.price}`}</Text>
        </View>
        <View />
      </View>
    </SafeAreaView>
  );
};

export default Home;
