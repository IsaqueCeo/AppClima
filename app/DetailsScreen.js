import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const cities = ['Teresina', 'Timon', 'Parnaiba', 'Campo_Maior', 'Sete_Cidades', 'Oeiras', 'Floriano', 'Picos'];

const DetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {cities.map((city, index) => (
        <TouchableOpacity
          key={index}
          style={styles.cityButton}
          onPress={() => navigation.navigate('Category', { cidade: city })}
        >
          <Text style={styles.cityName}>{city}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17243E',
  },
  cityButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default DetailsScreen;
