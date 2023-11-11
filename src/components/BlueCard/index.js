import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgSeta from './../../../svgs/seta-esquerda.svg';
import IconCheck from './../../../svgs/check-sucess.svg';

const BlueCard = ({children, style, showCheckIcon, showRightArrow = true}) => {
  return (
    <TouchableOpacity style={[styles.containerCardBlue, style]}>
      <View style={styles.flex}>{children}</View>
      <View style={styles.iconsContainer}>
        {!!showCheckIcon && (
          <View style={styles.containerIconCheck}>
            <IconCheck width={18} height={18} color={'#0BBA2D'} />
          </View>
        )}

        {!!showRightArrow && (
          <View style={styles.containerSetaIr}>
            <SvgSeta width={12} height={12} color={'#09498F'} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default BlueCard;

const styles = StyleSheet.create({
  containerCardBlue: {
    padding: 15,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#edf0f6',
  },
  flex: {flex: 1},
  containerSetaIr: {
    transform: [{rotateZ: '180deg'}],
  },
  containerIconCheck: {marginRight: 5},
  iconsContainer: {flexDirection: 'row', alignItems: 'center'},
});
