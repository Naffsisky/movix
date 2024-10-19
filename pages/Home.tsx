import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  FlatList,
  // Dimensions,
  ScrollView,
} from 'react-native';
import Layout from '../components/Layout';

// const {width} = Dimensions.get('window');
const numColumns = 2;

const images = [
  {
    id: '1',
    uri: 'https://occ-0-6711-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZXD1E47qSqSFsAjLPKullbFBpTZXUwh1hDhBoR9QWlJeSKqVivC0dnaOyDIcUyLO352_b5rLwqnzkiQUPyoJc0EtYGU2c465DmQtbTd6ToyI4w1ASZ5u-GJAaoMd9AQMrngm_YU6kCXpI0H0e5eoHv4QhD0IVtBXAM3E8DfYdtBnyPi2B8vbfVegBhxAOSeu7A5WUxmKqTg7xYGEa_t4jXorFFgIsTPF7Z0c6_FgkmycQ2WTXfTopbMN2W7dbPTSAt_oTxXmIxP-5UtV3kRda21d7ziU-asAmybfyw4ChlJ1W8qy9g_RILT6FhrWqgK0pUUTq0trw3AdlPdp-m3nfc.jpg?r=a05',
  },
  {
    id: '2',
    uri: 'https://occ-0-6711-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABX1b1G__WE2BCUqiWWP791fLYa6kmsmOEbcIXWkUw4_HOv4wxXC_G4QFt9KBNpM2UpbhqqjI7FIF-yA4LtoeegD4zBTG73aPSKVT4RqM84Sso095n37FQO56kwnjz07uWkuZZ4zTh8ty4aZG8MEs7jMQ5ePFXVyibFeG7tW6yF2ti6-HrzYUWkkicuo4V0Z1Gy1mUBtSspHTxMg4j2TBFsLQSXyHV04w2wHN_2oyVTl1dutbRG1GX0wZGmloMFFC4nX0BgWMgKZE6NYpdVnSOmic6WJiOscalhruflDZQ8FzBLARAZwWXxX6owAjd1i4ZbDGk4EDmo6aHFozsMAVnc8.jpg?r=b3b',
  },
  {
    id: '3',
    uri: 'https://occ-0-6711-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeyNEvpnjDQPmsWKbizBIa06RW7NoljfrTeRXpaeMoslVGXveJ2L8V7ICaW7XaO5EyNqGBszJMsuJ6vM6FMGoB4A3QYy9bHu5Pa6WFzIqmjtZ-5jzfSpaSwkP-r_u8QNytEmM5dyz3APPYA6eLMQCxi8C7COFWaofen7LSlhHhrsVriZwxDxY4LV0EnnT6qtsk8XBKU7uYwo5z-V_9UL07DyIykj9eghFdWuNBBVPNzyx_5l_vbj0NEIu88AU-HDSIoiN3WvuC9Xu1HcxYoN1BmmM7fgNWMDOI9ZDwdOr3o9eR3DVPFEHQnXWyW1i9uPNlKo4qp7zXgWfksX6i4qaZQ.jpg?r=2ad',
  },
  {
    id: '4',
    uri: 'https://occ-0-6711-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeMCOWgJsWZLTl5_lJS_M0gmXdKVIjNXK2kcQIdLNdW5JhX8hPwoOzQouAVVyRPilJXWCM2-NEGCdLg2mU9vJQSBrGCdgUhMWBNabbxL4bSg6fE94ITg1dL8oC4ihXzRk8tW3O1QFFUhcmYdqpZSVGrqfvGmOPlwlYO_wtDx8P1PElbHWgSASBfm17f3wMcB_3TdogtWz1kFLU6UzSw4Vh6Lxu10RVKCCas_Ehg1jlLClviVvHG8G3TYaCUQXkTzwTIFbsBrGFKWCXrV8gIy96ipItgdUiIFMtC5VH6OStVIyDjp9R9qz2fBeylwLa3siTwuVh0yRbkd9GI5cRGw0Rg.jpg?r=e26',
  },
  {
    id: '5',
    uri: 'https://occ-0-6711-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXr5dJ2ACm14Z4FtbwxtW2SM8XP30PLWThQBILlntosTsaQPtVdwytyTnQPHZCh4X4-XU6__w297DjaeDOt_RAZhQRJLhQzVFj_2oK3mJTsG0p0Q0dnRJFGcWO9hqI8DhZ3dGF2vc6Qv8ngfT_-pewJw-Huwf3wJB9BISHtDnA8X1OwN1NeMUq09Fnoc5ySaqwUWMfj-BQ2hXR1Tp2JQ4tTVxeaDk6tEy8g-QpKS_lMaswTzeEgnMufcu-jPBJnFq8qyfqITRCMfBbpHZ4UqTwkavXxV8fTwqVkC-pgNOuypkAYH4xfSZjc7.jpg?r=57a',
  },
  {
    id: '6',
    uri: 'https://occ-0-6711-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQqkEvPqZCTrc9nooazmOj5a0rdIRHrmT9kGm9ERvwCT0AftluUHh2g27rVU2efuOrabK90w7YfyN66gFb9B3PeW6-rnGSgnCixqC0qteUOZ5W2j0DmcOJDT5Fp62zuP8acnxr1O6JD7xPoD6YcyJkOx3DE7_IqhvKLwxi_eJWGT8FBHAP-HZN0XgaZNSL3h2zAkw61TqE51c0MVTzNPTgjkMrP2j_4jHA90o8lm9-l9PMcwBKWCxFZ-FYeEwcdk_7oE-7a4ijoBHrDMAx4A8qnR_NnV.jpg?r=9ff',
  },
];

function Home() {
  console.log('Home component rendered');

  const showAlert = ({item}: {item: {id: string; uri: string}}) => {
    Alert.alert(`Selected item id: ${item.id}`);
  };

  const renderItem = ({item}: {item: {id: string; uri: string}}) => (
    <TouchableOpacity
      style={styles.imageButton}
      onPress={() => showAlert({item})}>
      <Image source={{uri: item.uri}} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <Layout>
      <ScrollView style={styles.container}>
        <View style={styles.topFilm}>
          <Text style={styles.headerText}>Top Rated</Text>
          <Image
            source={require('../assets/images/silo.jpg')}
            style={styles.mainImage}
          />
        </View>
        <Text style={styles.headerText}>Top Review</Text>
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={numColumns}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    alignSelf: 'center',
  },
  mainImage: {
    width: 300,
    height: 200,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'orange',
  },
  imageButton: {
    flex: 1,
    margin: 5,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    // height: width / numColumns - 20,
    height: 200,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'red',
  },
  topFilm: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default Home;
