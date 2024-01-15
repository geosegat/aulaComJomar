import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
} from 'react-native';

const currencies = [
  {
    moeda: 'Ark',
    moedaP: 'Arks',
    valor: 5.2,
    image: 'https://dolarhoje.com/img/icon-ark.png',
  },
  {
    moeda: 'Binancecoin',
    moedaP: 'Binancecoins',
    valor: 1119.34,
    image: 'https://dolarhoje.com/img/icon-binance-coin.png',
  },
  {
    moeda: 'Iota',
    moedaP: 'Iotas',
    valor: 1.12,
    image: 'https://dolarhoje.com/img/icon-iota.png',
  },
  {
    moeda: 'Litecoin',
    moedaP: 'Litecoins',
    valor: 343.93,
    image: 'https://dolarhoje.com/img/icon-litecoin.gif',
  },
  {
    moeda: 'Xem',
    moedaP: 'Xems',
    valor: 0.17,
    image: 'https://dolarhoje.com/img/icon-nem.png',
  },
  {
    moeda: 'Xrp',
    moedaP: 'Xrps',
    valor: 3,
    image: 'https://dolarhoje.com/img/icon-xrp.png',
  },
  {
    moeda: 'Salt',
    moedaP: 'Salts',
    valor: 0.18,
    image: 'https://dolarhoje.com/img/icon-salt.png',
  },
  {
    moeda: 'Shiba',
    moedaP: 'Shibas',
    valor: 0.000041,
    image: 'https://dolarhoje.com/img/icon-shiba-inu.png',
  },
  {
    moeda: 'Tron',
    moedaP: 'Trons',
    valor: 0.5,
    image: 'https://dolarhoje.com/img/icon-tron.png',
  },
  {
    moeda: 'Bitcoin',
    moedaP: 'Bitcoins',
    valor: 186203,
    image: 'https://dolarhoje.com/img/icon-bitcoin.gif',
  },
  {
    moeda: 'Dolar',
    moedaP: 'Dolares',
    valor: 4.9,
    image: 'https://dolarhoje.com/img/icon-dolar.gif',
  },
  {
    moeda: 'Euro',
    moedaP: 'Euros',
    valor: 5.36,
    image: 'https://dolarhoje.com/img/icon-euro.gif',
  },
  {
    moeda: 'Libra',
    moedaP: 'Libras',
    valor: 6.17,
    image: 'https://dolarhoje.com/img/icon-libra.gif',
  },
  {
    moeda: 'Dogecoin',
    moedaP: 'Dogecoins',
    valor: 0.38,
    image: 'https://dolarhoje.com/img/icon-dogecoin.png',
  },
];

const initialMessage = 'Digite um valor e selecione a meda desejada';

const CurrencyConverter = () => {
  const [currencyInput, setCurrencyInput] = useState('');
  const [message, setMessage] = useState(initialMessage);
  const [seachInput, setSearchInput] = useState('');

  const filteredCurrencyList = currencies.filter(c =>
    c.moeda.toLowerCase().includes(seachInput),
  );

  const onPressCurrency = item => {
    const value = parseInt(currencyInput, 10) * item.valor;

    if (currencyInput > 1) {
      setMessage(`${currencyInput} ${item.moedaP} valem R$${value.toFixed(2)}`);
    } else if (currencyInput == 1) {
      setMessage(`${currencyInput} ${item.moeda} vale R$${value.toFixed(2)}`);
    } else if (currencyInput === '') {
      setMessage(initialMessage);
      return;
    }
  };

  const onChangeTextSearchInput = e => {
    setSearchInput(e.toLowerCase());
  };

  const onChangeTextCurrencyInput = e => {
    setCurrencyInput(e.replace(/[^0-9.]/g, ''));
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.marginImg}
      onPress={() => onPressCurrency(item)}>
      <Image width={45} height={45} source={{uri: item.image}} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.caixaHeight} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar moeda"
          placeholderTextColor={'#fff'}
          onChangeText={onChangeTextSearchInput}
          value={seachInput}
        />
        <FlatList
          data={filteredCurrencyList}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.resultContainer}>
        <TextInput
          style={styles.resultText}
          placeholder="0"
          keyboardType="numeric"
          placeholderTextColor="#E6E6E46f"
          onChangeText={onChangeTextCurrencyInput}
          value={currencyInput}
        />
        <Text style={styles.resultText}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2B',
    paddingHorizontal: 15,
  },
  styleTextInput: {
    color: '#fff',
    marginTop: 10,
    marginBottom: 10,
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {color: '#fff', marginTop: 10},
  marginImg: {marginRight: 15},
  caixaHeight: {height: 50},
  searchInput: {
    height: 50,
    borderColor: '#547789',
    borderWidth: 1,
    color: '#fff',
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default CurrencyConverter;
