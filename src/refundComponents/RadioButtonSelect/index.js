import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import IconSelect from '../IconSelect';
import AppText from '../../components/AppText';

const RadioButtonSelect = ({
  label,
  style,
  onPress,
  onPressText,
  disabled,
  showHideIconSelect,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(showHideIconSelect);
  }, [showHideIconSelect]);

  const handlePress = () => {
    setIsSelected(!isSelected);
    onPress();
  };

  return (
    <View style={[styles.containerRadioSelect, style]}>
      <View style={styles.containerRadioSelect}>
        <IconSelect
          onPressIconNoSelect={handlePress}
          onPressIconSelect={handlePress}
          isSelected={isSelected}
        />
        <TouchableOpacity
          disabled={disabled}
          onPress={onPressText}
          style={styles.containerText}>
          <AppText size="large">{label ?? 'Texto'}</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RadioButtonSelect;

const styles = StyleSheet.create({
  containerRadioSelect: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerText: {marginLeft: 17},
});
