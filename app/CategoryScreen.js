import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Dados das cidades
const cityData = {
  Teresina: {
    image: require('../assets/teresina.png'),
    description: 'Teresina é a capital do Piauí, conhecida por seu clima quente e acolhedor.',
    touristSpots: ['Parque Potycabana', 'Palácio de Karnak', 'Encontro dos Rios']
  },
  Timon: {
    image: require('../assets/timon.png'),
    description: 'Timon é uma cidade vizinha a Teresina, no Maranhão, com uma rica história cultural.',
    touristSpots: ['Balneário São Francisco', 'Mercado Velho']
  },
  // Adicione mais cidades se necessário
};

const CategoryScreen = ({ route }) => {
  const cidade = route?.params?.cidade;

  if (!cidade) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorMessage}>Nenhuma cidade selecionada.</Text>
      </View>
    );
  }

  const cityInfo = cityData[cidade];

  if (!cityInfo) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorMessage}>Informações da cidade não encontradas.</Text>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={['#0A0C14', '#17243E', '#050D19']}
      style={styles.gradientBackground}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.cityName}>{cidade}</Text>
        <Image source={cityInfo.image} style={styles.cityImage} />
        <Text style={styles.cityDescription}>{cityInfo.description}</Text>
        <Text style={styles.touristTitle}>Pontos Turísticos</Text>
        {cityInfo.touristSpots.map((spot, index) => (
          <Text key={index} style={styles.touristSpot}>
            {index + 1}. {spot}
          </Text>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  cityName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
  },
  cityImage: {
    width: 300,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  cityDescription: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 20,
  },
  touristTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  touristSpot: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 18,
    color: 'red',
  },
});

export default CategoryScreen;
