  import React, { useState, useEffect } from 'react';
  import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
  import { LinearGradient } from 'expo-linear-gradient';
  import axios from 'axios';
  
  const WeatherScreen = ({ navigation }) => {
    const [cidade, setCidade] = useState('Teresina');
    const [dadosClima, setDadosClima] = useState(null);
    const apiKey = '11371fa143855be92f85ee055f29a258';
        
    useEffect(() => {
      buscarClima();
    }, []);

    const buscarClima = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
        );
        setDadosClima(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados.', error);
      }
    };

    const getWeatherIcon = (icon) => {
      return `https://openweathermap.org/img/wn/${icon}@2x.png`;
    };

    return (
      <LinearGradient
        colors={['#0A0C14', '#17243E', '#050D19']}
        style={styles.gradientBackground}
      >
        <View style={styles.container}>
          {dadosClima ? (
            <View style={styles.weatherContainer}>
              <Text style={styles.cityName}>{dadosClima.name}</Text>
              <Image
                style={styles.weatherIcon}
                source={{ uri: getWeatherIcon(dadosClima.weather[0].icon) }}
              />
              <Text style={styles.temperature}>{Math.round(dadosClima.main.temp)}°C</Text>
              <Text style={styles.weatherDescription}>{dadosClima.weather[0].description}</Text>
              <Text style={styles.minMaxTemp}>
                Min {Math.round(dadosClima.main.temp_min)}°C / Max {Math.round(dadosClima.main.temp_max)}°C
              </Text>
              <Text style={styles.feelsLike}>
                Sensação Térmica: {Math.round(dadosClima.main.feels_like)}°C
              </Text>

              <Text style={styles.forecastTitle}>Previsão para os Próximos 3 Dias</Text>
              <ScrollView horizontal style={styles.forecastContainer}>
                <View style={styles.forecastDay}>
                  <Text style={styles.day}>Fri</Text>
                  <Image
                    style={styles.forecastIcon}
                    source={{ uri: getWeatherIcon('01d') }} 
                  />
                  <Text style={styles.forecastTemp}>19°C</Text>
                </View>
                <View style={styles.forecastDay}>
                  <Text style={styles.day}>Sat</Text>
                  <Image
                    style={styles.forecastIcon}
                    source={{ uri: getWeatherIcon('01n') }} 
                  />
                  <Text style={styles.forecastTemp}>20°C</Text>
                </View>
                <View style={styles.forecastDay}>
                  <Text style={styles.day}>Sun</Text>
                  <Image
                    style={styles.forecastIcon}
                    source={{ uri: getWeatherIcon('04d') }} 
                  />
                  <Text style={styles.forecastTemp}>18°C</Text>
                </View>
              </ScrollView>

              <TouchableOpacity
                style={styles.customButton}
                onPress={() => navigation.navigate('Details')}
              >
                <Text style={styles.customButtonText}>Destinos</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={styles.loading}>Carregando...</Text>
          )}
        </View>
      </LinearGradient>
    );
  };

  const styles = StyleSheet.create({
    gradientBackground: {
      flex: 1,
    },
    container: {
      flex: 1,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    weatherContainer: {
      alignItems: 'center',
    },
    cityName: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
    },
    weatherIcon: {
      width: 100,
      height: 100,
      marginVertical: 20,
    },
    temperature: {
      color: '#fff',
      fontSize: 48,
      fontWeight: 'bold',
    },
    weatherDescription: {
      color: '#aaa',
      fontSize: 18,
      textTransform: 'capitalize',
      marginVertical: 10,
    },
    minMaxTemp: {
      color: '#fff',
      fontSize: 16,
    },
    feelsLike: {
      color: '#fff',
      fontSize: 16,
      marginVertical: 10,
    },
    forecastTitle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 20,
    },
    forecastContainer: {
      flexDirection: 'row',
    },
    forecastDay: {
      alignItems: 'center',
      marginHorizontal: 10,
      backgroundColor: '#1c1c1e',
      borderRadius: 15,
      padding: 15,
      width: 100,
    },
    day: {
      color: '#fff',
      fontSize: 16,
      marginBottom: 5,
    },
    forecastIcon: {
      width: 50,
      height: 50,
      marginBottom: 5,
    },
    forecastTemp: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    customButton: {
      backgroundColor: '#fff',
      paddingVertical: 15,
      paddingHorizontal: 60,
      borderRadius: 25,
      marginTop: 30,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
    customButtonText: {
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    loading: {
      color: '#fff',
      fontSize: 20,
    },
  });

  export default WeatherScreen;
