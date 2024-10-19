import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Layout from '../components/Layout';

function Film() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
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
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        options,
      );
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  const renderMovieItem = ({item}: {item: any}) => (
    <View style={styles.movieItem}>
      <Image
        style={styles.moviePoster}
        source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
      />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </View>
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
