import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CardWithBorder from '../CardWithBorder';
import SvgEdit from './../../../svgs/icon-editar.svg';
import SvgClose from './../../../svgs/icon-close.svg';
import AppText from '../AppText';
const CardEditClose = ({
  style,
  protocolo,
  showEditIcon = false,
  showCloseIcon = false,
  situacao,
  valorsolicitado,
  dataSolicitacao,
  valorLiberado,
  children,
}) => {
  return (
    <CardWithBorder disabled style={style}>
      <View style={{flexDirection: 'row'}}>
        <View style={{backgroundColor: 'pink', flex: 1}}>
          <View style={styles.contFlex}>
            <AppText size="large" variant="semiBold" color="#333">
              {protocolo ?? '123456789'}
            </AppText>
          </View>
        </View>

        <TouchableOpacity style={styles.containerRow}>
          {!showEditIcon && <SvgEdit />}
        </TouchableOpacity>
        <TouchableOpacity>
          {!showCloseIcon && (
            <View style={{marginLeft: 12}}>
              <SvgClose />
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View>{children}</View>
    </CardWithBorder>
  );
};

export default CardEditClose;

const styles = StyleSheet.create({
  containerRow: {flexDirection: 'row'},
  contFlex: {flex: 1},
});
