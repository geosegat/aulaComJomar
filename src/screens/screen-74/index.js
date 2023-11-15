import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navbar from '../../components/Navbar';
import AppText from '../../components/AppText';
import BlueCard from '../../components/BlueCard';
import Button from '../../components/Button';
import CardSelect from '../../components/CardSelect';

const Screen74 = () => {
  const docNecessarios = [
    {label: 'Nota fiscal ou recibo - Consulta médica', isChecked: false},
    {label: 'Autorização', isChecked: true},
  ];
  return (
    <View style={styles.flex1}>
      <Navbar label={'Comprovantes'}></Navbar>
      <View style={styles.containerInterno}>
        <AppText
          style={styles.marginText}
          size="xxlarge"
          variant="semiBold"
          color="#333">
          Documentos necessários
        </AppText>
        {docNecessarios.map(dn => {
          return (
            <CardSelect
              key={Math.random()}
              label={dn.label}
              style={styles.containerBlueCard}
              isChecked={dn.isChecked}
            />
          );
        })}
      </View>
      <Button
        variant="round"
        label={'SALVAR DESPESA'}
        color={'#09498F'}></Button>
    </View>
  );
};

export default Screen74;

const styles = StyleSheet.create({
  marginText: {marginBottom: 20},
  containerBlueCard: {marginBottom: 13},
  flex1: {flex: 1},
  containerInterno: {flex: 1, padding: 15},
});
