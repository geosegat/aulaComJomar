import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navbar from '../../../components/Navbar';
import {useNavigation} from '@react-navigation/native';
import ContrastLabel from '../../../refundComponents/ContrastLabel';
import RadioButtonSelect from '../../../refundComponents/RadioButtonSelect';
import FooterButton from '../../../refundComponents/FooterButton';

const Screen67 = () => {
  const navigation = useNavigation();

  const goToScreen61 = () => {
    navigation.navigate('Screen61');
  };
  const goToScreen68 = () => {
    navigation.navigate('Screen68');
  };

  return (
    <View style={styles.container}>
      <Navbar onPressBotaoBack={goToScreen61} label={'Adicionar despesa'} />
      <ContrastLabel
        style={styles.containerContrastLabel}
        label={'De quem é a despesa?'}
      />
      <View style={styles.containerRadioButton}>
        <RadioButtonSelect
          disabled
          style={styles.marginTop}
          label={'Victor Hugo Prando da Silva'}
        />
        <RadioButtonSelect
          disabled
          style={styles.marginTop}
          label={'Paulo Estofel'}
        />
        <RadioButtonSelect
          disabled
          style={styles.marginTop}
          label={'Rafael Antonio Pereira'}
        />
      </View>

      <FooterButton
        showHideButtonOn={true}
        showHideButtonOff={false}
        label={'CONTINUAR'}
        onPressButton={goToScreen68}
      />
    </View>
  );
};

export default Screen67;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)'},
  containerRadioButton: {marginHorizontal: 17, flex: 1},
  marginTop: {marginTop: 25},
  containerContrastLabel: {marginTop: 10},
});
