import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Navbar from '../../../components/Navbar';
import ContrastLabel from '../../../refundComponents/ContrastLabel';
import RadioButtonSelect from '../../../refundComponents/RadioButtonSelect';
import FooterButton from '../../../refundComponents/FooterButton';
import {useNavigation} from '@react-navigation/native';

const Screen81 = () => {
  const navigation = useNavigation();

  const [isSelected, setIsSelected] = useState(false);

  const onPress = () => {
    setIsSelected(prev => !prev);
    setIsSelected2(false);
  };

  const [isSelected2, setIsSelected2] = useState(false);

  const onPress2 = () => {
    setIsSelected2(prev => !prev);
  };

  const goToScreen80 = () => {
    navigation.navigate('Screen80');
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Navbar onPressBotaoBack={goToScreen80} label={'Adicionar despesa'} />
        <ContrastLabel
          style={styles.containerContrastLabel}
          label={'Itens autorizados com saldo disponível'}
        />
        <View style={styles.containerItems}>
          <RadioButtonSelect
            style={styles.radioButton}
            label={'Atorvastatina Cálcica'}
            onPressText={onPress}
            isSelected={isSelected}
          />
          <RadioButtonSelect
            style={styles.radioButton}
            label={'Clortalidona'}
          />
          <RadioButtonSelect label={'Janumet'} />
        </View>

        {isSelected && (
          <View>
            <ContrastLabel label={'Apresentação'} />
            <View style={styles.containerItems}>
              <RadioButtonSelect
                onPressText={onPress2}
                isSelected={isSelected2}
                style={styles.radioButton}
                label={'Atorvastatina Cálcica'}
              />
              <RadioButtonSelect
                style={styles.radioButton}
                label={'Clortalidona'}
              />
              <RadioButtonSelect label={'Janumet'} />
            </View>
          </View>
        )}

        {isSelected2 && (
          <View>
            <ContrastLabel label={'Apresentação'} />
            <View style={styles.containerItems}>
              <RadioButtonSelect
                style={styles.radioButton}
                label={'Atorvastatina Cálcica'}
              />
              <RadioButtonSelect
                style={styles.radioButton}
                label={'Clortalidona'}
              />
              <RadioButtonSelect label={'Janumet'} />
            </View>
          </View>
        )}
      </View>
      <FooterButton label={'CONTINUAR'} showHideButtonOff />
    </View>
  );
};

export default Screen81;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)'},
  containerItems: {padding: 15},
  containerRadioButton: {marginHorizontal: 17},
  containerContrastLabel: {marginTop: 10},
  radioButton: {marginBottom: 10},
});
