import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackParamList} from '../App';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, NavigationProp} from '@react-navigation/native';

type MovieDetailRouteProp = RouteProp<StackParamList, 'MovieDetail'>;
type NavigationProps = NavigationProp<StackParamList>;

type Props = {
  route: MovieDetailRouteProp;
};

function MovieDetail({route}: Props) {
  const {movie} = route.params;
  console.log(movie);
  const navigation = useNavigation<NavigationProps>();

  return (
    <ScrollView>
      <SafeAreaView style={{paddingBottom: 20}}>
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
      <View style={styles.container}>
        <Image
          style={styles.poster}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
        />
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
        <Text style={styles.release}>Release Date: {movie.release_date}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'trasparent',
    paddingHorizontal: 10,
  },
  poster: {
    width: '100%',
    height: 500,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    elevation: 5,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  overview: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'justify',
  },
  release: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'justify',
    paddingBottom: 20,
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
});

export default MovieDetail;
