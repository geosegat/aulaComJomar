import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SvgConstruindo from './../../../../svgs/trabalhando.svg';
import AppText from '../../../components/AppText';
import {useNavigation} from '@react-navigation/native';

const TelaInicio = () => {
  const navigation = useNavigation();

  const goContador = () => {
    navigation.navigate('Contador');
  };
  const goTaskScreen = () => {
    navigation.navigate('TaskScreen');
  };
  const goToMnyConv = () => {
    navigation.navigate('CurrencyConverter');
  };
  const goAuthenticationField = () => {
    navigation.navigate('AuthenticationField');
  };
  const goCepResultsScreen = () => {
    navigation.navigate('CepResultsScreen');
  };

  const goVirtualCardGenerator = () => {
    navigation.navigate('VirtualCardGenerator');
  };
  const goDDDetect = () => {
    navigation.navigate('DDDetect');
  };
  const goQuiz = () => {
    navigation.navigate('Quiz');
  };

  return (
    <View style={styles.container}>
      <View style={styles.caixaHeight} />
      <View style={styles.containerHeader}>
        <AppText size="huge" variant="bold" color="#fff">
          App under construction...
        </AppText>
        <View style={styles.containerImg}>
          <SvgConstruindo width={30} height={30} color={'#2491C9'} />
        </View>
      </View>
      <View style={styles.caixaHeight} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.buttonContador} onPress={goContador}>
          <AppText size="xxlarge" variant="bold" color="#fff">
            Counter
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContador} onPress={goTaskScreen}>
          <AppText size="xxlarge" variant="bold" color="#fff">
            Task List
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContador} onPress={goToMnyConv}>
          <AppText size="xxlarge" variant="bold" color="#fff">
            MnyConv
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContador}
          onPress={goAuthenticationField}>
          <AppText size="xxlarge" variant="bold" color="#fff">
            Credential Field
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContador}
          onPress={goCepResultsScreen}>
          <AppText size="xxlarge" variant="bold" color="#fff">
            CepResult
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContador}
          onPress={goVirtualCardGenerator}>
          <AppText size="xxlarge" variant="bold" color="#fff">
            Virtual Card Generator
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContador} onPress={goDDDetect}>
          <AppText size="xxlarge" variant="bold" color="#fff">
            DDDetect
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContador} onPress={goQuiz}>
          <AppText size="xxlarge" variant="bold" color="#fff">
            Quiz
          </AppText>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TelaInicio;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#2A2A2B', alignItems: 'center'},
  caixaHeight: {height: 50},
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerImg: {transform: [{scaleX: -1}], marginLeft: 15},
  buttonContador: {
    backgroundColor: '#4A4A50',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 20,
    width: 125,
  },
});
