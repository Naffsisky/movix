import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Layout from '../components/Layout';
import {StackParamList} from '../App';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, NavigationProp} from '@react-navigation/native';

type NavigationProps = NavigationProp<StackParamList>;

function Film() {
  const navigation = useNavigation<NavigationProps>();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const fetchMovies = async (currentPage: number) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTJlZTNkMTdkZTQyZWI3MGM2MTliMWJlM2ZjY2MxMSIsIm5iZiI6MTcyOTMzMzgxMy4wMzI1NzksInN1YiI6IjY1NWNmNmRkMDgxNmM3MDBmZDMzZDE0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CblO_Xf_i2EnTy8StCkqqHAqQ_dwTraiyWUcuzg-5MA',
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`,
        options,
      );
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  const renderMovieItem = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.movieItem}
      onPress={() => navigation.navigate('MovieDetail', {movie: item})}>
      <Image
        style={styles.moviePoster}
        source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
      />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <Layout>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <View style={styles.centered}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      </Layout>
    );
  }

  return (
    <Layout>
      <Text
        style={{
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 10,
          paddingBottom: 10,
          alignSelf: 'center',
        }}>
        Movies
      </Text>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.movieList}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 10,
            backgroundColor: '#282c34',
          }}
          onPress={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            {page === 1 ? (
              <Icon name="arrow-left" size={20} color="gray" />
            ) : (
              <Icon name="arrow-left" size={20} color="white" />
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 10,
            backgroundColor: '#282c34',
          }}
          onPress={() => {
            setPage(page + 1);
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            <Icon name="arrow-right" size={20} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  movieList: {
    padding: 10,
  },
  movieItem: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    paddingVertical: 10,
  },
  moviePoster: {
    width: 150,
    height: 225,
    borderRadius: 10,
  },
  movieTitle: {
    color: 'white',
    marginTop: 5,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Film;
