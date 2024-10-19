import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import Layout from '../components/Layout';

function Category() {
  const categories = [
    {
      id: '1',
      name: 'Action',
      desc: 'Action movie',
      img: require('../assets/images/action.png'),
    },
    {
      id: '2',
      name: 'Comedy',
      desc: 'Comedy movie',
      img: require('../assets/images/comedy.png'),
    },
    {
      id: '3',
      name: 'Drama',
      desc: 'Drama movie',
      img: require('../assets/images/drama.png'),
    },
    {
      id: '4',
      name: 'Horror',
      desc: 'Horror movie',
      img: require('../assets/images/horror.png'),
    },
    {
      id: '5',
      name: 'Romance',
      desc: 'Romance movie',
      img: require('../assets/images/romance.png'),
    },
    {
      id: '6',
      name: 'Thriller',
      desc: 'Thriller movie',
      img: require('../assets/images/thriller.png'),
    },
  ];

  return (
    <Layout>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Categories Movie
        </Text>
      </View>
      <FlatList
        data={categories}
        style={{paddingVertical: 10}}
        renderItem={({item}) => (
          <View
            style={{
              marginHorizontal: 10,
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#3a3f47',
              padding: 30,
              borderRadius: 5,
              elevation: 5,
              borderColor: 'white',
              borderWidth: 2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
              }}>
              <Image
                source={item.img}
                style={{width: 50, height: 50, backgroundColor: 'transparent'}}
              />
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                {item.name}
              </Text>
            </View>
          </View>
        )}
      />
    </Layout>
  );
}

export default Category;
