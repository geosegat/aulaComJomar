import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navbar from '../../../components/Navbar';
import {useNavigation} from '@react-navigation/native';
import ContrastLabel from '../../../refundComponents/ContrastLabel';
import RadioButtonSelect from '../../../refundComponents/RadioButtonSelect';
import FooterButton from '../../../refundComponents/FooterButton';

const Screen68 = () => {
  const navigation = useNavigation();

  const goToScreen67 = () => {
    navigation.navigate('Screen67');
  };
  const goToScreen80 = () => {
    navigation.navigate('Screen80');
  };

  return (
    <View style={styles.container}>
      <Navbar onPressBotaoBack={goToScreen67} label={'Adicionar despesa'} />
      <ContrastLabel
        style={styles.containerContrastLabel}
        label={'Qual o tipo de reembolso?'}
      />
      <View style={styles.containerRadioButton}>
        <RadioButtonSelect
          disabled
          style={styles.marginTop}
          label={'Assistência farmacêutica'}
        />

        <RadioButtonSelect
          disabled
          style={styles.marginTop}
          label={'Demais solicitações'}
        />
      </View>

      <FooterButton
        showHideButtonOn
        label={'CONTINUAR'}
        onPressButton={goToScreen80}
      />
    </View>
  );
};

export default Screen68;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)'},
  containerRadioButton: {marginHorizontal: 17, flex: 1},
  marginTop: {marginTop: 25},
  containerContrastLabel: {marginTop: 10},
});
