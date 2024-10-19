import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {StackParamList} from '../App';
import Icon from 'react-native-vector-icons/FontAwesome5';

type NavigationProps = NavigationProp<StackParamList>;

function Footer() {
  const navigation = useNavigation<NavigationProps>();

  const renderNavButton = (
    label: string,
    route: keyof StackParamList,
    icon: string,
  ) => (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate(route)}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}>
          <Icon name={icon} size={24} color="white" />
          <Text style={styles.navText}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.footerContainer}>
      <View style={styles.navRow}>
        {renderNavButton('Category', 'Category', 'list')}
        {renderNavButton('Home', 'Home', 'home')}
        {renderNavButton('Movie', 'Film', 'tv')}
      </View>
    </SafeAreaView>
  );
}

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#282c34',
    paddingVertical: 10,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 10,
  },
  navButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#3a3f47',
  },
  navText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
