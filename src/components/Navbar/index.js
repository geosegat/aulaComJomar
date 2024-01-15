import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import SvgVoltar from './../../../svgs/seta-esquerda.svg';
import SvgAdd from './../../../svgs/botao-adicionar.svg';
const Navbar = ({
  label,
  etapaInicio,
  etapaFim,
  showHideAdd = false,
  showHideBack = true,
  style,
  onPressBotaoAdd,
  onPressBotaoBack,
}) => {
  return (
    <View style={[styles.containerStatusBar, style]}>
      <StatusBar backgroundColor={'#09498F'} />
      <View style={{position: 'absolute', left: 5}}>
        {showHideBack && (
          <TouchableOpacity
            onPress={onPressBotaoBack}
            style={styles.botaoVoltar}>
            <SvgVoltar width={20} height={20} color={'#fff'} />
            <Text style={styles.fontVoltar}>Voltar</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.fontHeaderBar}> {label ?? 'Nada ainda'}</Text>
        {etapaInicio && etapaFim && (
          <Text style={styles.fontSubHeaderBar}>
            {`Etapa ${etapaInicio} de ${etapaFim}`}
          </Text>
        )}
      </View>

      <View style={{position: 'absolute', right: 10}}>
        {showHideAdd && (
          <TouchableOpacity onPress={onPressBotaoAdd} style={styles.BotaoAdd}>
            <SvgAdd width={28} height={28} color={'#fff'} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  containerStatusBar: {
    backgroundColor: '#09498F',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BotaoAdd: {
    alignItems: 'center',
  },
  fontHeaderBar: {fontSize: 17, fontWeight: '500', color: '#fff'},
  fontSubHeaderBar: {fontSize: 12, color: '#fff'},

  fontVoltar: {fontSize: 17, color: '#fff', marginLeft: 3},
});
