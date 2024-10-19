import React from 'react';
import {Text, View, StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Header() {
  console.log('Header component rendered');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#282c34'} />

      <View style={styles.headerRow}>
        <View style={styles.iconContainer}>
          <Icon name="bars" size={24} color="white" />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Movix</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#21252b',
  },
  headerRow: {
    backgroundColor: '#282c34',
    padding: 20,
    flexDirection: 'row',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    elevation: 5,
    fontWeight: 'bold',
  },
});

export default Header;
