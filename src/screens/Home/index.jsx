import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, SafeAreaView, Text, View} from 'react-native';
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
  const [dataDisplay, setDataDisplay] = useState(data);
  // console.log('data==', data);
  let item = data[0];
  console.log('item', item);
  const getBookList = async () => {
    try {
      const data = await fetchBookList();
      console.log('data', data?.data?.data);
      dispatch(bookListData(data?.data?.data));
    } catch (err) {
      console.log('err', err);
    }
  };
  useEffect(() => {
    getBookList();
  }, []);
  const [imageWidth, setImageWidth] = useState(0);

    const screenHeight = Dimensions.get('window').height;
  // useEffect(() => {
  //   const margin = 20; // Adjust the margin between images as needed
  //   const calculatedWidth = (screenWidth - margin * 3) / 2; // Two images per row with margin space
  //   setImageWidth(calculatedWidth);
  // }, [])
  const filterData=()=>{
    if(!!searchPhrase.length){
    setDataDisplay(data.filter((el)=>el.title.toLowerCase().includes(searchPhrase.toLowerCase())))
  
  }else{
    setDataDisplay(data)
  }
  }


  useEffect(()=>{
filterData()

  },[searchPhrase])
  const renderItem = ({ item,index }) =>{
    
    if(item?.title?.toLowerCase()?.includes( searchPhrase.toLowerCase())){

      return(
        <View style={{width: '50%',paddingRight:index%2==0?5:0, marginBottom:20,paddingLeft:index%2==0?0:5}}>
      <Image
        source={{ uri: item?.imageLink }}
        style={[{ minWidth:'100%',height: 300 , borderRadius:10}]}
        resizeMode='stretch'
      />

      <Text style={styles.bookTitle}>{item?.title}</Text>
  
      <View style={{...styles.ratingStars,width:'100%'}}>
        <FlatList
          data={Array.from({ length: 5 }, (_, index) => index)}
          renderItem={({index}) => (
            <ICONS.FontAwesome name="star" size={20} style={{ marginRight: 5 }} 
            
            color={index<item?.rating? 'yellow':'gray'}
            />
          )}
          keyExtractor={(index) => index.toString()}
          horizontal
          />
         
        <Text>({item?.reviews})</Text>
      </View>
  
      <Text style={{ marginTop: 5 }}>{`$ ${item?.price}`}</Text>
    </View>
  )};
}
  
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
        <FlatList
        data={dataDisplay}
        style={{height:screenHeight-180}}
        renderItem={renderItem}
          numColumns={2}
          // contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
/>
<View />
      </View>
    </SafeAreaView>
  );
};

export default Home;
