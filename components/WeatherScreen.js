import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const WeatherScreen = () => {
  const [cidade, setCidade] = useState('');
  const [dadosClima, setDadosClima] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const apiKey = '11371fa143855be92f85ee055f29a258'; 

  const buscarClima = async () => {
    setCarregando(true);
    setErro('');
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      setDadosClima(response.data);
    } catch (error) {
      setErro('Erro ao buscar os dados. Verifique a cidade ou tente novamente.');
    }
    setCarregando(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de Clima</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome da cidade"
        value={cidade}
        onChangeText={setCidade}
      />

      <Button title="Buscar" onPress={buscarClima} />

      {carregando && <Text style={styles.loading}>Carregando...</Text>}

      {erro ? <Text style={styles.error}>{erro}</Text> : null}

      {dadosClima && !carregando && (
        <View style={styles.result}>
          <Text style={styles.cityName}>{dadosClima.name}</Text>
          <Text style={styles.info}>Temperatura: {dadosClima.main.temp}°C</Text>
          <Text style={styles.info}>Sensação Térmica: {dadosClima.main.feels_like}°C</Text>
          <Text style={styles.info}>Clima: {dadosClima.weather[0].description}</Text>
          <Text style={styles.info}>Umidade: {dadosClima.main.humidity}%</Text>
          <Text style={styles.info}>Velocidade do Vento: {dadosClima.wind.speed} m/s</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 18,
  },
  loading: {
    textAlign: 'center',
    fontSize: 18,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
  },
  result: {
    marginTop: 20,
    backgroundColor: '#f1f1f1',
    padding: 20,
    borderRadius: 5,
  },
  cityName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default WeatherScreen;
