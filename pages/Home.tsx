import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Layout from '../components/Layout';

const images = [
  {
    id: 1,
    uri: 'https://images.unsplash.com/photo-1729158323861-258ebf8f7339?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    uri: 'https://images.unsplash.com/photo-1729158323861-258ebf8f7339?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    uri: 'https://images.unsplash.com/photo-1729158323861-258ebf8f7339?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

function Home() {
  console.log('Home component rendered');

  // Fungsi untuk menampilkan alert saat tombol ditekan
  const showAlert = () => {
    Alert.alert('Hello');
  };

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>Home Screen</Text>

        <Image
          source={require('../assets/images/ai-1.jpg')}
          style={styles.mainImage}
        />

        {images.map(image => (
          <TouchableOpacity
            key={image.id}
            style={styles.imageButton}
            onPress={showAlert}>
            <Image source={{uri: image.uri}} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Layout>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
  },
  imageButton: {
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});
