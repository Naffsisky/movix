import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>{children}</View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21252b',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default Layout;
