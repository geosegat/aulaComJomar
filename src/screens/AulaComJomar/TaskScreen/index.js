import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import SvgFicheiro from '../../../../svgs/adicionar-ficheiro.svg';
import TodoCard from '../TodoCard';

const TaskScreen = () => {
  let text = 'Adicione uma nova tarefa';
  const [listaDeTextos, setListaDeTextos] = useState([]);
  const [textRecebido, setTextRecebido] = useState('');
  const onChangeText = e => {
    setTextRecebido(e);
  };
  const onPress = () => {
    if (textRecebido.trim() !== '') {
      setListaDeTextos(prev => [
        ...prev,
        {text: textRecebido, id: Math.random(), isSelect: false},
      ]);
      setTextRecebido('');
    }
  };

  const deleteTask = obj => {
    setListaDeTextos(prev => prev.filter(o => o.id !== obj.id));
  };

  const updateIsSelect = obj => {
    setListaDeTextos(prev =>
      prev.map(item =>
        item.id === obj.id ? {...item, isSelect: !item.isSelect} : item,
      ),
    );
  };

  const onPressDelete = () => {
    console.log('oi');
  };

  return (
    <View style={styles.container}>
      <View style={styles.caixaHeight} />
      <View style={styles.containerTextInputButton}>
        <TextInput
          value={textRecebido}
          onChangeText={onChangeText}
          placeholder={text}
          placeholderTextColor={'#E6E6E46f'}
          style={styles.containerTextInput}></TextInput>
        <TouchableOpacity onPress={onPress}>
          <SvgFicheiro width={45} height={45} color={'#547789'} />
        </TouchableOpacity>
      </View>
      <View style={styles.caixaHeight} />
      {listaDeTextos.map(e => (
        <TodoCard
          key={e.id}
          style={styles.todoCard}
          label={e.text}
          onPressDelete={() => deleteTask(e)}
          showHideSelect={e.isSelect}
          onPress={() => {
            updateIsSelect(e);
          }}
          textColor={e.isSelect ? '#E6E6E46f' : '#fff'}
        />
      ))}
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2A2A2B',
    paddingHorizontal: 15,
  },
  containerTextInput: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#547789',
    marginRight: 15,
    padding: 15,
    fontSize: 18,
    color: '#fff',
  },
  containerTextInputButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  caixaHeight: {height: 50},
  todoCard: {marginBottom: 10},
});
