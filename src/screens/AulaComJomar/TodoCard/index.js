import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconSelect from '../../../refundComponents/IconSelect';
import AppText from '../../../components/AppText';

const TodoCard = ({label, style}) => {
  return (
    <View style={[styles.containerCard, style]}>
      <View style={styles.containerIconText}>
        <IconSelect border={styles.containerborder} />
        <AppText size="xxlarge" color="#F2F2F2" style={styles.textContainer}>
          {label}
        </AppText>
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
  containerborder: {
    borderColor: '#045DF9',
    width: 25,
    height: 25,
  },
  textContainer: {marginLeft: 10},
});
