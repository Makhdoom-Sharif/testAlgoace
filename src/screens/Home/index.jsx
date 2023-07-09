import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import profileImage from '../../assets/images/profileImage.jpg';
import {BooksCard, CustomSearchBar, Loading} from '../../components';
import {fetchBookList} from '../../services/bookData';
import {bookListData} from '../../store/actions';
import {styles} from './styles';
import debounce from '../../global/debounce';
const Home = () => {
  const dispatch = useDispatch();
  const [searchPhrase, setSearchPhrase] = useState('');
  const [loader, setLoader] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [dataDisplay, setDataDisplay] = useState(data);
  const data = useSelector(state => state.bookList);
  const screenHeight = Dimensions.get('window').height;
  const getBookList = async () => {
    try {
      const res = await fetchBookList();
      dispatch(bookListData(res?.data?.data));
      setLoader(false);
    } catch (err) {
      console.log('err', err);
    }
  };
  useEffect(() => {
    getBookList();
  }, []);

  const filterData = () => {
    if (!!searchPhrase.length) {
      setDataDisplay(
        data.filter(el =>
          el.title.toLowerCase().includes(searchPhrase.toLowerCase()),
        ),
      );
    } else {
      setDataDisplay(data);
    }
  };

  useEffect(() => {
    debounce(() => filterData(), 500);
  }, [searchPhrase, data]);

  const renderItem = ({item, index}) => {
    if (item?.title?.toLowerCase()?.includes(searchPhrase.toLowerCase())) {
      return <BooksCard item={item} index={index} />;
    }
  };

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
        {loader ? (
          <View style={styles.loaderContainer}>
            <Loading />
          </View>
        ) : (
          <FlatList
            data={dataDisplay}
            style={{height: screenHeight - 180}}
            renderItem={renderItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        )}
        <View />
      </View>
    </SafeAreaView>
  );
};

export default Home;
