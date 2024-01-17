import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import QuestButton from '../../../components/QuestButton';
import AppText from '../../../components/AppText';

const questions = require('../../../json/Questions/quiz.json');

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [validarResposta, setValidarResposta] = useState('');
  const [colorResposta, setColorResposta] = useState('white');
  const [buttonNext, setButtonNext] = useState(true);
  const [buttonLabel, setButtonlabel] = useState('Selecione uma resposta');
  const [answerIndex, setAnswerIndex] = useState(null);
  const [disabledButton, setDisabledButton] = useState(false);
  const [score, setScore] = useState({certo: 0, errado: 0});

  const handleAnswer = selectedOptionIndex => {
    setAnswerIndex(selectedOptionIndex);
    setButtonNext(false);
    setValidarResposta(`Resposta ${selectedOptionIndex + 1} selecionada.`);
    setDisabledButton(true);
    setButtonlabel('Confirmar resposta');
  };

  const handleNextQuestion = () => {
    if (buttonLabel.includes('Confirmar')) {
      if (answerIndex === questions.questions[currentQuestion].correctIndex) {
        setValidarResposta('Resposta correta');
        setButtonlabel('Proxima pergunta');
        setScore({certo: score.certo + 1, errado: score.errado});
        setColorResposta('green');
      } else {
        setValidarResposta('Resposta incorreta');
        setButtonlabel('Proxima pergunta');
        setScore({certo: score.certo, errado: score.errado + 1});
        setColorResposta('red');
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setValidarResposta('');
      setButtonlabel('Selecione uma resposta');
      setButtonNext(true);
      setDisabledButton(false);
      setColorResposta('white');
    }
  };

  const onPressReset = () => {
    setScore({certo: 0, errado: 0});
    setCurrentQuestion(0);
  };

  console.log(currentQuestion);

  if (questions.questions.length === currentQuestion) {
    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}>
          <AppText style={styles.respostasContainer} size="huge" color="white">
            Sua pontuação final foi:
          </AppText>
          <AppText size="huge" color="green">
            {score.certo} Respostas corretas
          </AppText>
          <AppText style={styles.respostasContainer} size="huge" color="red">
            {score.errado} Respostas incorretas
          </AppText>
          <QuestButton onPress={onPressReset} label={'Refaça o quiz'} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerCenterText}>
        <AppText style={styles.respostasContainer} size="huge" color="white">
          Pergunta n° {numberQuestion + 1}
        </AppText>
        <AppText size="huge" color="white">
          {questions.questions[currentQuestion]?.question}
        </AppText>
      </View>

      <View>
        {questions.questions[currentQuestion]?.options.map((option, index) => (
          <QuestButton
            isDisabled={disabledButton}
            key={index}
            label={option}
            onPress={() => handleAnswer(index)}
            style={styles.respostasContainer}
          />
        ))}
      </View>

      <View style={styles.containerCenterText}>
        <AppText size="huge" color={colorResposta}>
          {validarResposta}
        </AppText>
      </View>

      <QuestButton
        isDisabled={buttonNext}
        label={buttonLabel}
        onPress={handleNextQuestion}
      />
      <View style={{alignItems: 'center', marginTop: 25}}></View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2B',
    padding: 25,
  },
  containerCenterText: {alignItems: 'center', marginBottom: 20},
  respostasContainer: {marginBottom: 20},
});
