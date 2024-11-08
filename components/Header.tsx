import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {StackParamList} from '../App';

type NavigationProps = NavigationProp<StackParamList, 'Setting'>;

function Header() {
  console.log('Header component rendered');
  const navigation = useNavigation<NavigationProps>();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#282c34'} />

      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('Setting')}>
          <Icon name="cog" size={24} color="white" />
        </TouchableOpacity>
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
    letterSpacing: 3,
    marginRight: 14,
  },
});

export default Header;
