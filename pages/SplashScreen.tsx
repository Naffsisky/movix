import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {StackActions} from '@react-navigation/native';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    const interval = setTimeout(() => {
      navigation.dispatch(StackActions.replace('Home'));
    }, 5000);

    return () => clearTimeout(interval);
  }, [navigation]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          color: 'white',
          fontSize: 30,
          fontWeight: 'bold',
          marginVertical: 20,
        }}>
        Welcome to Movix
      </Text>
      <Image
        source={require('../assets/logo/movix-logo.png')}
        style={{width: 150, height: 150, borderRadius: 20}}
      />
    </View>
  );
};

export default SplashScreen;
