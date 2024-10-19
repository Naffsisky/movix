import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {StackActions} from '@react-navigation/native';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    const interval = setTimeout(() => {
      navigation.dispatch(StackActions.replace('Home'));
    }, 5000);

    return () => clearTimeout(interval);
  }, [navigation]);

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
