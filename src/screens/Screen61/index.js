import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navbar from '../../components/Navbar';
import DashedButton from '../../refundComponents/DashedButton';
import AppText from '../../components/AppText';
import FooterButton from '../../refundComponents/FooterButton';
import {useNavigation} from '@react-navigation/native';

const Screen61 = () => {
  const navigation = useNavigation();

  const goToScreen60 = () => {
    navigation.navigate('Screen60');
  };
  const goToScreen67 = () => {
    navigation.navigate('Screen67');
  };
  return (
    <View style={styles.container}>
      <Navbar
        label={'Minhas despesas'}
        etapaInicio={'1'}
        etapaFim={'3'}
        onPressBotaoBack={goToScreen60}
      />
      <View style={styles.containerDashedText}>
        <DashedButton onPressButton={goToScreen67} />
        <AppText style={styles.containerAppText} color="#555">
          Você pode adicionar quantas despesas quiser num mesmo pedido.
        </AppText>
        <View style={styles.containerAppText2}>
          <AppText size="xlarge" variant="semiBold">
            Nenhuma despesa incluída{' '}
          </AppText>
          <AppText style={styles.containerMarginTop}>
            Toque em ADICIONAR DESPESA para incluir quantos procedimentos
            quiser. Quando terminar de incluir toque em PRÓXIMO
          </AppText>
        </View>
      </View>
      <FooterButton label={'PRÓXIMO'} showHideButtonOff />
    </View>
  );
};

export default Screen61;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)'},
  containerDashedText: {
    marginHorizontal: 15,
    marginTop: 20,
    flex: 1,
  },
  containerAppText: {marginTop: 10},
  containerAppText2: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  containerMarginTop: {marginTop: 20},
});
