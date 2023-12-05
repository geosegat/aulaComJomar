import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AppText from '../../../components/AppText';

const AuthenticationField = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationColor, setvalidationColor] = useState('gray');
  const [validationMessage, setvalidationMessage] =
    useState('Digite seu e-mail');

  const validateEmail = inputText => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(inputText);
  };

  const onPress = () => {
    if (email.trim() === '') {
      Alert.alert('Por favor, digite um E-mail!');
      setvalidationColor('gray');
      setvalidationMessage('Digite seu e-mail');
      console.log('entrei aqui');
      return;
    }
    const isEmailValid = validateEmail(email);

    if (isEmailValid) {
      setvalidationMessage('E-mail válido');
      setvalidationColor('green');
    } else {
      console.log('agora entrei aqui tbm');
      setvalidationMessage('E-mail inválido');
      setvalidationColor('red');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.styleTextInput}
          placeholder="Digite seu e-mail"
          placeholderTextColor={'#fff'}
          onChangeText={text => {
            setEmail(text);
            setvalidationColor('gray');
            setvalidationMessage('Digite seu e-mail');
          }}
        />
        <AppText color={validationColor} size="large">
          {validationMessage}
        </AppText>
      </View>

      <View>
        <TextInput
          style={styles.styleTextInput}
          placeholder="Digite sua senha"
          placeholderTextColor={'#fff'}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.containerButtonAcessar} onPress={onPress}>
        <AppText color="#fff" size="xhuge">
          Acessar
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default AuthenticationField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2B',
    padding: 20,
    alignItems: 'center',
  },
  styleTextInput: {
    color: '#fff',
    borderWidth: 1,
    borderColor: '#547789',
    marginTop: 10,
    width: 200,
    height: 40,
    paddingHorizontal: 10,
  },
  containerButtonAcessar: {
    backgroundColor: '#547789',
    padding: 10,
    borderRadius: 10,
    marginTop: 25,
  },
});
