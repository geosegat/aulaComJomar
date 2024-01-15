import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../../components/AppText';
import SvgLogo from './../../../../svgs/nubankLogo.svg';
import SvgCopiar from './../../../../svgs/copiar.svg';
import SvgAtualizar from './../../../../svgs/atualizar.svg';
import SvgLixeira from './../../../../svgs/lixeira-de-reciclagem.svg';

const faker = require('faker');

const VirtualCardGenerator = style => {
  const [nomeTitular, setNomeTitular] = useState('Mc Cabelinho');
  const [colorCard, setColorCard] = useState('#547789');
  const [colorTextCard, setColorTextCard] = useState('#547789');
  const [creditNumber, setCreditNumber] = useState('');
  const [creditCvv, setCreditCvv] = useState('000');
  const [creditDate, setCreditDate] = useState('00/00');
  const [numerosDividos, setNumerosDividos] = useState([
    '0000',
    '0000',
    '0000',
    '0000',
  ]);

  const generateCreditCard = () => {
    const nameTitularCard = faker.name.findName();
    const creditCardNumber = `4${faker.datatype.number({
      min: 100000000000000,
      max: 999999999999999,
    })}`;
    const creditCardCVV = faker.finance.creditCardCVV('');
    const dataLimit = faker.date.future(6);
    const mes = `0${dataLimit.getMonth() + 1}`.slice(-2);
    const ano = dataLimit.getFullYear().toString().slice(-2);
    const dataVencimento = `${mes}/${ano}`;

    const numerosDividos = [];

    for (let i = 0; i < 16; i += 4) {
      numerosDividos.push(creditCardNumber.substring(i, i + 4));
    }
    setNomeTitular(nameTitularCard);
    setCreditCvv(creditCardCVV);
    setCreditNumber(numerosDividos);
    setCreditDate(dataVencimento);
    setNumerosDividos(numerosDividos);
    return;
  };
  const deleteCard = () => {
    setNomeTitular('Mc Cabelinho');
    setCreditCvv('000');
    setNumerosDividos(['0000', '0000', '0000', '0000']);
    setCreditDate('00/00');
    return;
  };

  const alterarCor = () => {
    const newColorCard = colorCard === '#547789' ? '#7a09aa' : '#547789';
    const newColorText = colorTextCard === '#547789' ? '#cea3e1' : '#547789';
    setColorCard(newColorCard);
    setColorTextCard(newColorText);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => alterarCor()}
        style={[styles.containerCard, {backgroundColor: colorCard}]}>
        <View style={styles.containerLogo}>
          <SvgLogo color={'#efb3f1'} />

          <Image
            source={{
              width: 50,
              height: 30,
              uri: 'https://cdn-icons-png.flaticon.com/512/11378/11378185.png',
            }}
          />
        </View>
        <View style={styles.containerCardNumber}>
          {numerosDividos.map((numero, index) => (
            <AppText
              style={styles.styleCardText}
              key={index}
              size="xhuge"
              color="#fff"
              variant="semiBold">
              {numero}
            </AppText>
          ))}

          <TouchableOpacity>
            <SvgCopiar width={25} height={25} color={'#efb3f1'} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View style={styles.containerTitularCard}>
        <AppText color="#fff" size="large">
          Nome do Titular
        </AppText>
        <AppText color={colorTextCard} size="large" variant="semiBold">
          {nomeTitular}
        </AppText>
      </View>

      <View style={styles.containerDataCvv}>
        <View style={styles.caixa100}>
          <AppText color="#fff" size="large">
            Data de Vencimento
          </AppText>
          <AppText color={colorTextCard} size="large" variant="semiBold">
            {creditDate}
          </AppText>
        </View>
        <View style={styles.caixa100}>
          <AppText color="#fff" size="large">
            Cód. de Segurança
          </AppText>
          <AppText color={colorTextCard} size="large" variant="semiBold">
            {creditCvv}
          </AppText>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={generateCreditCard}>
            <SvgAtualizar width={35} height={35} color={colorTextCard} />
          </TouchableOpacity>
          <AppText color="gray" variant="bold" size="xxlarge">
            Gerar Cartão
          </AppText>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={deleteCard}>
            <SvgLixeira width={35} height={35} color={colorTextCard} />
          </TouchableOpacity>
          <AppText color="gray" variant="bold" size="xxlarge">
            Deletar Cartão
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default VirtualCardGenerator;

const styles = StyleSheet.create({
  container: {backgroundColor: '#2A2A2B', flex: 1, padding: 15},
  containerCard: {
    backgroundColor: '#821ea1',
    padding: 25,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  containerLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerCardNumber: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
  },
  styleCardText: {marginRight: 12},
  containerTitularCard: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  containerDataCvv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,

    flex: 1,
  },
  caixa100: {width: 100},
});
