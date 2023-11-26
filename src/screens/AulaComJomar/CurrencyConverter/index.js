import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';

const CurrencyConverter = () => {
  const [text, setText] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [result, setResult] = useState(null);

  const handleTextChange = newText => {
    const filteredText = newText.replace(/[^0-9.]/g, '');
    setText(filteredText);
  };

  const handleCurrencyPress = currency => {
    setSelectedCurrency(currency);
    calculateResult();
  };

  const calculateResult = () => {
    if (text !== '' && selectedCurrency !== null) {
      const calculatedResult = parseFloat(text) * selectedCurrency.valor;
      setResult({
        value: calculatedResult.toFixed(2),
        currencySing: selectedCurrency.moeda,
        currencyPlu: selectedCurrency.moedaP,
      });
    }
  };
  const getResultMessage = () => {
    if (text > 1 && result) {
      return ` ${text} ${result.currencyPlu} valem R$ ${result.value}`;
    } else if (text == 1 && result) {
      return ` ${text} ${result.currencySing} vale R$ ${result.value}`;
    } else {
      return 'Digite um valor e selecione a moeda desejada.';
    }
  };

  const currencies = [
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

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        {currencies.map((currency, index) => (
          <TouchableOpacity
            style={styles.marginImg}
            key={index}
            onPress={() => {
              handleCurrencyPress(currency);
            }}>
            <Image width={45} height={45} source={{uri: currency.image}} />
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        onChangeText={handleTextChange}
        keyboardType="numeric"
        style={styles.styleTextInput}
        placeholder="0"
        placeholderTextColor={'#E6E6E46f'}
        value={text}
        onBlur={calculateResult}
      />
      <Text style={styles.resultText}>{getResultMessage()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2A2A2B',
    paddingHorizontal: 15,
  },
  containerImg: {flexDirection: 'row', padding: 15},
  styleTextInput: {color: '#fff', marginTop: 10, marginBottom: 10},
  resultText: {color: '#fff', marginTop: 10},
  marginImg: {marginLeft: 12},
});

export default CurrencyConverter;
