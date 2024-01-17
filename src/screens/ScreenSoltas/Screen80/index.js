import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navbar from '../../../components/Navbar';
import ContrastLabel from '../../../refundComponents/ContrastLabel';
import RadioButtonSelect from '../../../refundComponents/RadioButtonSelect';
import FooterButton from '../../../refundComponents/FooterButton';
import {useNavigation} from '@react-navigation/native';

const Screen80 = () => {
  const navigation = useNavigation();

  const goToScreen68 = () => {
    navigation.navigate('Screen68');
  };
  const goToScreen81 = () => {
    navigation.navigate('Screen81');
  };
  return (
    <View style={styles.container}>
      <Navbar onPressBotaoBack={goToScreen68} label={'Adicionar despesa'} />
      <ContrastLabel
        style={styles.containerContrastLabel}
        label={'Itens autorizados com saldo disponível'}
      />
      <View style={styles.containerRadioButton}>
        <RadioButtonSelect
          onPressText={goToScreen81}
          style={styles.marginTop}
          label={'Atorvastatina Cálcica'}
        />
        <RadioButtonSelect
          showHide
          onPressText={goToScreen81}
          style={styles.marginTop}
          label={'Clortalidona'}
        />
        <RadioButtonSelect
          onPressText={goToScreen81}
          style={styles.marginTop}
          label={'Janumet'}
        />
      </View>

      <FooterButton label={'CONTINUAR'} showHideButtonOff />
    </View>
  );
};

export default Screen80;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)'},
  containerRadioButton: {marginHorizontal: 17, flex: 1},
  marginTop: {marginTop: 25},
  containerContrastLabel: {marginTop: 10},
});
