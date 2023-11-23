import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SvgFicheiro from '../../../../svgs/adicionar-ficheiro.svg';

const TaskScreen = () => {
  let text = 'Adicione uma nova tarefa';
  return (
    <View style={styles.container}>
      <View style={styles.caixaHeight} />
      <View style={styles.containerTextInputButton}>
        <TextInput
          placeholder={text}
          placeholderTextColor={'#E6E6E46f'}
          style={styles.containerTextInput}></TextInput>
        <TouchableOpacity>
          <SvgFicheiro width={45} height={45} color={'#547789'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2A2A2B',
  },
  containerTextInput: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#547789',
    marginRight: 15,
    padding: 15,
    width: 250,
    fontSize: 18,
    color: '#fff',
  },
  containerTextInputButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  caixaHeight: {height: 50},
});
