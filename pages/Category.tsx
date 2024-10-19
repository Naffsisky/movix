import React from 'react';
import {Text, View} from 'react-native';
import Layout from '../components/Layout';

function Category() {
  return (
    <Layout>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white'}}>Category Screen</Text>
      </View>
    </Layout>
  );
}

export default Category;
