import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import SvgFicheiro from '../../../svgs/adicionar-ficheiro.svg';
import TodoCard from './TodoCard';

const AulaComJomar = () => {
  const [tarefa, setTarefa] = useState('');
  const [listaDeTarefas, setListaDeTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      setListaDeTarefas([...listaDeTarefas, tarefa]);
      setTarefa('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewVazia} />
      <View style={styles.containerInputIcon}>
        <TextInput
          onChangeText={t => {
            setTarefa(t);
          }}
          value={tarefa}
          style={styles.containerInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={'#808080'}
        />
        <TouchableOpacity onPress={adicionarTarefa}>
          <SvgFicheiro width={40} height={40} color={'#045DF9'} />
        </TouchableOpacity>
      </View>

      {listaDeTarefas.map((tarefa, index) => (
        <TodoCard style={styles.marginBottom} key={index} label={tarefa} />
      ))}
    </ScrollView>
  );
};

export default AulaComJomar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b1b1a',
    flex: 1,
    padding: 20,
  },
  viewVazia: {height: 50},
  containerInputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  containerInput: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: '500',
    color: '#F2F2F2',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#5F437D',
    padding: 15,
    flex: 1,
    height: 50,
  },
  marginBottom: {marginBottom: 5},
});
