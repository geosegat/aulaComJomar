import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navbar from '../../../components/Navbar';
import AppText from '../../../components/AppText';
import FooterButton from '../../../refundComponents/FooterButton';
import {useNavigation} from '@react-navigation/native';

const Screen60 = () => {
  const navigation = useNavigation();

  const goToScreen56 = () => {
    navigation.navigate('Screen56', {protocol: '482394829'});
  };
  const goToScreen61 = () => {
    navigation.navigate('Screen61');
  };
  return (
    <View style={styles.container}>
      <Navbar label={'Nova reembolso'} onPressBotaoBack={goToScreen56} />
      <View style={styles.containerAppText}>
        <AppText size="xlarge" variant="semiBold">
          Nova Solicitação de reembolso
        </AppText>
        <AppText style={styles.containerMarginTop}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam.
        </AppText>
      </View>
      <FooterButton
        label={'INICIAR'}
        onPressButton={goToScreen61}
        showHideButtonOn
      />
    </View>
  );
};

export default Screen60;

const styles = StyleSheet.create({
  container: {flex: 1},
  containerAppText: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
  containerMarginTop: {marginTop: 20},
});
