import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { newsData } from '../data/newsPortals';

function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data from an API)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('NewsPortal', { portal: item })}
    >
      <View style={styles.card}>
        <Image
          source={{ uri: item.image || 'https://www.example.com/default-image.jpg' }}
          style={styles.cardImage}
        />
        <Text style={styles.cardText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        />
      ) : (
        <FlatList
          data={newsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      )}
    </View>
  );
}



const styles = {
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cardText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
};

export default HomeScreen;
