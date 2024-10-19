import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Category from './pages/Category';
import SplashScreen from './pages/SplashScreen';
import Film from './pages/Film';

export type StackParamList = {
  Home: undefined;
  Category: undefined;
  SplashScreen: undefined;
  Film: undefined;
};

const Stack = createStackNavigator<StackParamList>();

function App() {
  console.log('App component rendered');
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          cardStyle: {backgroundColor: '#21252b'},
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Film" component={Film} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
