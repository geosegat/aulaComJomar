import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../../components/AppText';
import CardResultSearch from '../componentes/CardResultSearch';
import Api from './../services/apiCep/api';

const CepResultsScreen = () => {
  const [cepHeader, setCepHeader] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUF] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  async function buscarCep() {
    try {
      if (cep === '' || cep.length < 8) {
        Alert.alert('Preencha um CEP válido!');
        setCep('');
        return;
      }

      const response = await Api.get(`/${cep}/json/`);

      if (response.data.erro) {
        Alert.alert('CEP não encontrado');
        setCep('');
      } else {
        const cepExists = searchResults.some(
          item => item.cep.toLowerCase() === response.data.cep.toLowerCase(),
        );
        if (!cepExists) {
          setLogradouro(response.data.logradouro);
          setBairro(response.data.bairro);
          setCidade(response.data.localidade);
          setUF(response.data.uf);
          setCepHeader(cep);
          setSearchResults([...searchResults, response.data]);
        } else {
          Alert.alert('Este CEP já foi adicionado.');
        }
      }
    } catch (error) {
      console.log('Erro ao buscar CEP:', error);
      Alert.alert(
        'Ocorreu um erro ao buscar o CEP. Por favor, tente novamente.',
      );
    }
  }

  const deleteCep = cepToDelete => {
    setSearchResults(prev => prev.filter(item => item.cep !== cepToDelete));
  };

  const renderItem = ({item}) => (
    <CardResultSearch
      cepHeader={item.cep}
      logradouro={item.logradouro}
      bairro={item.bairro}
      cidade={item.localidade}
      uf={item.uf}
      style={styles.styleCard}
      onPressDelete={() => deleteCep(item.cep)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerCenter}>
        <View style={styles.caixaHeight} />
        <AppText size="xxlarge" color="#fff">
          Digite um cep para encontrar o endereço
        </AppText>
        <TextInput
          placeholder="Digite o cep..."
          placeholderTextColor={'gray'}
          keyboardType="numeric"
          onChangeText={text => setCep(text)}
          maxLength={8}
          style={styles.containerTextInput}></TextInput>
        <TouchableOpacity
          onPress={buscarCep}
          style={styles.contianerButtonSearch}>
          <AppText color="#fff" size="xxxlarge">
            PESQUISAR
          </AppText>
        </TouchableOpacity>
      </View>
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={item => item.cep}
      />
    </View>
  );
};

export default CepResultsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2A2B',
    flex: 1,
    padding: 15,
  },
  containerTextInput: {
    color: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    padding: 15,
    borderColor: '#547789',
    marginTop: 20,
    width: 200,
  },
  caixaHeight: {height: 20},
  containerCenter: {alignItems: 'center'},
  contianerButtonSearch: {
    backgroundColor: '#547789',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  styleCard: {marginTop: 20},
});
