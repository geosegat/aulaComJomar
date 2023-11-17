import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const AppTextInput = ({
  placeHolder,
  onSubmitEditing,
  onFocus,
  onBlur,
  onChangeText,
}) => {
  return (
    <TextInput
      placeholder={placeHolder}
      placeholderTextColor={'rgba(9, 73, 143, 0.4)'}
      onSubmitEditing={onSubmitEditing}
      onFocus={onFocus}
      onBlur={onBlur}
      onChangeText={onChangeText}
      style={{
        backgroundColor: 'rgba(9, 73, 143, 0.08)',
        padding: 15,
        fontSize: 16,
        borderRadius: 4,
        color: 'black',
      }}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});
