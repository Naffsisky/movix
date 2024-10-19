import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {StackParamList} from '../App';

type NavigationProps = NavigationProp<StackParamList>;
function Setting() {
  const DATA = [
    {
      title: 'Profile',
      data: ['Name', 'Email', 'Password'],
    },
    {
      title: 'Application',
      data: ['Storage'],
    },
  ];
  const navigation = useNavigation<NavigationProps>();
  return (
    <View>
      <SafeAreaView>
        <StatusBar barStyle={'light-content'} backgroundColor={'#282c34'} />

        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Setting</Text>
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#21252b',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  item: {
    backgroundColor: '#282c34',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: 'transparent',
    color: 'white',
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

export default Setting;
