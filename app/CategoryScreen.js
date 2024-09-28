import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

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
  Parnaiba: {
    image: require('../assets/parnaiba.png'),
    description: 'Parnaíba é uma cidade histórica, conhecida pela sua cultura e proximidade com o Delta do Parnaíba.',
    touristSpots: ['Delta do Parnaíba', 'Praia de Barroquinha', 'Igreja de Nossa Senhora da Graça']
  },
  Campo_Maior: {
    image: require('../assets/campo_maior.png'),
    description: 'Campo Maior é famosa por suas festas religiosas e pelo comércio de artesanato.',
    touristSpots: ['Museu Histórico de Campo Maior', 'Catedral de Santo Antônio']
  },
  Sete_Cidades: {
    image: require('../assets/sete_cidades.png'),
    description: 'Sete Cidades é conhecida pelo Parque Nacional de Sete Cidades, um lugar cheio de formações rochosas e lendas.',
    touristSpots: ['Parque Nacional de Sete Cidades', 'Formações Rochosas']
  },
  // Oeiras: {
  //   image: require('../assets/oeiras.png'),
  //   description: 'Oeiras é a primeira capital do Piauí e é conhecida por seu patrimônio histórico.',
  //   touristSpots: ['Igreja de Nossa Senhora da Vitória', 'Palácio da Cidade']
  // },
  // Floriano: {
  //   image: require('../assets/floriano.png'),
  //   description: 'Floriano é um importante polo comercial e de serviços da região sul do Piauí.',
  //   touristSpots: ['Museu de Floriano', 'Praça da Independência']
  // },
  // Picos: {
  //   image: require('../assets/picos.png'),
  //   description: 'Picos é conhecida por suas tradições culturais e festas populares.',
  //   touristSpots: ['Igreja de São José', 'Parque de Exposições']
  // },
};

const CategoryScreen = ({ route }) => {
  const cidade = route?.params?.cidade;
  const navigation = useNavigation();

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

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Details')}>
          <Text style={styles.backButtonText}>Voltar para Detalhes</Text>
        </TouchableOpacity>
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
  backButton: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0A0C14',
    textAlign: 'center',
  },
});

export default CategoryScreen;
