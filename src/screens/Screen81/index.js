import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navbar from '../../components/Navbar';
import ContrastLabel from '../../refundComponents/ContrastLabel';
import RadioButtonSelect from '../../refundComponents/RadioButtonSelect';
import FooterButton from '../../refundComponents/FooterButton';
import {useNavigation} from '@react-navigation/native';

const Screen81 = () => {
  const navigation = useNavigation();

  const goToScreen80 = () => {
    navigation.navigate('Screen80');
  };

  return (
    <View style={styles.container}>
      <Navbar onPressBotaoBack={goToScreen80} label={'Adicionar despesa'} />
      <ContrastLabel
        style={styles.containerContrastLabel}
        label={'Itens autorizados com saldo disponível'}
      />
      <View style={styles.containerItems}>
        <RadioButtonSelect
          disabled
          style={styles.marginTop}
          label={'Atorvastatina Cálcica'}
        />
        <RadioButtonSelect
          disabled
          style={styles.marginTop}
          label={'Clortalidona'}
        />
        <RadioButtonSelect
          disabled
          style={styles.marginTop}
          label={'Janumet'}
        />
      </View>
      <ContrastLabel label={'Apresentação'} />
      <View style={styles.containerRadioButton}>
        <RadioButtonSelect
          disabled
          style={styles.marginTop}
          label={'Atorvastatina Cálcica'}
        />
        <RadioButtonSelect
          disabled
          style={styles.marginTop}
          label={'Clortalidona'}
        />
        <RadioButtonSelect
          disabled
          style={styles.marginTop}
          label={'Janumet'}
        />
      </View>

      <FooterButton label={'CONTINUAR'} showHideButtonOff />
    </View>
  );
};

export default Screen81;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)'},
  containerItems: {marginHorizontal: 17, flex: 1},
  containerRadioButton: {marginHorizontal: 17, flex: 2},

  marginTop: {marginTop: 25},
  containerContrastLabel: {marginTop: 10},
});
