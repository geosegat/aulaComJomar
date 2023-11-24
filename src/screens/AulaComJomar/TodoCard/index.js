import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import IconSelect from '../../../refundComponents/IconSelect';
import AppText from '../../../components/AppText';
import SvgDelete from '../../../../svgs/lixeira-de-reciclagem.svg';

const TodoCard = ({
  label,
  style,
  onPressDelete,
  showHideSelect,
  onPress,
  textStyle,
  textColor,
}) => {
  return (
    <View style={[styles.containerCard, style]}>
      <View style={styles.containerIconText}>
        <IconSelect onPress={onPress} showHideSelect={showHideSelect} />
        <AppText
          size="xxlarge"
          color={textColor}
          style={[styles.textContainer, textStyle]}>
          {label}
        </AppText>
        <TouchableOpacity onPress={onPressDelete}>
          <SvgDelete color={'#547789'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    backgroundColor: '#272726',
    borderRadius: 6,
    padding: 15,
  },
  containerIconText: {flex: 1, flexDirection: 'row', alignItems: 'center'},

  textContainer: {marginLeft: 10, flex: 1},
});
