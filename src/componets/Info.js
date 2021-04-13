import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';

export default Info = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            // <Text>{item.title}, {item.releaseYear}</Text>
            <Item item={item}/>
          )}
        />
      )}
    </View>
  );
};

function Item({ item }) {
  return (
    <View style={styles.card}>
      <Text>{item.title}</Text>
      <Text>{item.releaseYear}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#F2F0FE",
    borderRadius: 20,
    margin: 10,
    padding: 15,
    height: 50,
    width: 300,
  },
});