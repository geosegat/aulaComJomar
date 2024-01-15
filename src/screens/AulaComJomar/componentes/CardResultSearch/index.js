import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../../../../components/AppText';
import SvgFicheiro from './../../../../../svgs/lixeira-de-reciclagem';

const CardResultSearch = ({
  cepHeader,
  logradouro,
  bairro,
  cidade,
  uf,
  style,
  onPressDelete,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.containerHeaderCep}>
        <View style={{flex: 1}}>
          <AppText color="#fff" size="xxlarge" variant="bold">
            Cep
          </AppText>
        </View>
        <View>
          <AppText color="#fff" size="xxlarge" variant="bold">
            {cepHeader}
          </AppText>
        </View>
      </View>

      <View style={styles.containerPadding}>
        <View style={styles.containerKeyValue}>
          <AppText
            color="#547789"
            variant="bold"
            size="large"
            style={styles.styleContKey}>
            Logradouro
          </AppText>
          <AppText>{logradouro}</AppText>
        </View>
        <View style={styles.containerKeyValue}>
          <AppText
            color="#547789"
            variant="bold"
            size="large"
            style={styles.styleContKey}>
            Bairro
          </AppText>
          <AppText>{bairro} </AppText>
        </View>
        <View style={styles.containerKeyValue}>
          <AppText
            color="#547789"
            variant="bold"
            size="large"
            style={styles.styleContKey}>
            Cidade
          </AppText>
          <AppText>{cidade} </AppText>
        </View>
        <View style={styles.containerKeyValue}>
          <AppText
            color="#547789"
            variant="bold"
            size="large"
            style={styles.styleContKey}>
            UF
          </AppText>
          <AppText>{uf}</AppText>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.flex1} />
          <TouchableOpacity onPress={onPressDelete}>
            <SvgFicheiro color={'#547789'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardResultSearch;

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', borderRadius: 12},
  containerHeaderCep: {
    flexDirection: 'row',
    backgroundColor: '#547789',
    padding: 10,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  flex1: {flex: 1},
  containerPadding: {padding: 10},
  containerKeyValue: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#636A6DA9',
    marginBottom: 5,
  },
  styleContKey: {flex: 1, marginBottom: 10},
});
