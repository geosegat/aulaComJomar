import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const CurrencyConverter = () => {
  const imageBitcoin = 'https://dolarhoje.com/img/icon-bitcoin.gif';
  const imageDolar = 'https://dolarhoje.com/img/icon-dolar.gif';
  const imageEuro = 'https://dolarhoje.com/img/icon-euro.gif';
  const imageOuro = 'https://dolarhoje.com/img/icon-ouro.gif';
  const imageDogeCoin = 'https://dolarhoje.com/img/icon-dogecoin.png';

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <TouchableOpacity>
          <Image width={45} height={45} source={{uri: imageBitcoin}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.marginImg}>
          <Image width={45} height={45} source={{uri: imageDolar}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.marginImg}>
          <Image width={45} height={45} source={{uri: imageEuro}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.marginImg}>
          <Image width={45} height={45} source={{uri: imageOuro}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.marginImg}>
          <Image width={45} height={45} source={{uri: imageDogeCoin}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.marginImg}>
          <Image width={45} height={45} source={{uri: imageDogeCoin}} />
        </TouchableOpacity>
      </View>
      <TextInput placeholder="0" placeholderTextColor={'#fff'}></TextInput>
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
  marginImg: {marginLeft: 15},
});

export default CurrencyConverter;
