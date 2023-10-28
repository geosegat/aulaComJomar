import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import SvgEdit from './svgs/icon-editar.svg';
import SvgClose from './svgs/icon-close.svg';

const App = () => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.listContainer}>
        <View style={styles.listHeaderContainer}>
          <Text style={styles.headerText}>Rascunhos</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeaderContainer}>
            <Text style={styles.headerText}>482394829</Text>
            <View style={styles.iconsContainer}>
              <TouchableOpacity style={styles.svgEditContainer}>
                <SvgEdit />
              </TouchableOpacity>
              <TouchableOpacity>
                <SvgClose />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentRow}>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Situação</Text>
              <Text style={styles.valueText}>Rascunho</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Data solicitação</Text>
              <Text style={styles.valueText}>20/10/2020</Text>
            </View>
          </View>
          <View style={[styles.contentRow, styles.removeMarginBottom]}>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Valor solicitado</Text>
              <Text style={styles.valueText}>R$ 450,00</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Valor liberado</Text>
              <Text style={styles.valueText}>-</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.listHeaderContainer}>
          <Text style={styles.headerText}>Rembolsos solicitados</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeaderContainer}>
            <Text style={styles.headerText}>482394829</Text>
            <View style={styles.iconsContainer}>
              <TouchableOpacity style={styles.svgEditContainer}>
                <SvgEdit />
              </TouchableOpacity>
              <TouchableOpacity>
                <SvgClose />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentRow}>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Situação</Text>
              <Text style={styles.valueText}>Rascunho</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Data solicitação</Text>
              <Text style={styles.valueText}>20/10/2020</Text>
            </View>
          </View>
          <View style={[styles.contentRow, styles.removeMarginBottom]}>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Valor solicitado</Text>
              <Text style={styles.valueText}>R$ 450,00</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Valor liberado</Text>
              <Text style={styles.valueText}>-</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeaderContainer}>
            <Text style={styles.headerText}>482394829</Text>
            <View style={styles.iconsContainer}>
              <TouchableOpacity style={styles.svgEditContainer}>
                <SvgEdit />
              </TouchableOpacity>
              <TouchableOpacity>
                <SvgClose />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentRow}>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Situação</Text>
              <Text style={styles.valueText}>Rascunho</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Data solicitação</Text>
              <Text style={styles.valueText}>20/10/2020</Text>
            </View>
          </View>
          <View style={[styles.contentRow, styles.removeMarginBottom]}>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Valor solicitado</Text>
              <Text style={styles.valueText}>R$ 450,00</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Valor liberado</Text>
              <Text style={styles.valueText}>-</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeaderContainer}>
            <Text style={styles.headerText}>482394829</Text>
            <View style={styles.iconsContainer}>
              <TouchableOpacity style={styles.svgEditContainer}>
                <SvgEdit />
              </TouchableOpacity>
              <TouchableOpacity>
                <SvgClose />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentRow}>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Situação</Text>
              <Text style={styles.valueText}>Rascunho</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Data solicitação</Text>
              <Text style={styles.valueText}>20/10/2020</Text>
            </View>
          </View>
          <View style={[styles.contentRow, styles.removeMarginBottom]}>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Valor solicitado</Text>
              <Text style={styles.valueText}>R$ 450,00</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Valor liberado</Text>
              <Text style={styles.valueText}>-</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeaderContainer}>
            <Text style={styles.headerText}>482394829</Text>
            <View style={styles.iconsContainer}>
              <TouchableOpacity style={styles.svgEditContainer}>
                <SvgEdit />
              </TouchableOpacity>
              <TouchableOpacity>
                <SvgClose />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentRow}>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Situação</Text>
              <Text style={styles.valueText}>Rascunho</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Data solicitação</Text>
              <Text style={styles.valueText}>20/10/2020</Text>
            </View>
          </View>
          <View style={[styles.contentRow, styles.removeMarginBottom]}>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Valor solicitado</Text>
              <Text style={styles.valueText}>R$ 450,00</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Valor liberado</Text>
              <Text style={styles.valueText}>-</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeaderContainer}>
            <Text style={styles.headerText}>482394829</Text>
            <View style={styles.iconsContainer}>
              <TouchableOpacity style={styles.svgEditContainer}>
                <SvgEdit />
              </TouchableOpacity>
              <TouchableOpacity>
                <SvgClose />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentRow}>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Situação</Text>
              <Text style={styles.valueText}>Rascunho</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Data solicitação</Text>
              <Text style={styles.valueText}>20/10/2020</Text>
            </View>
          </View>
          <View style={[styles.contentRow, styles.removeMarginBottom]}>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Valor solicitado</Text>
              <Text style={styles.valueText}>R$ 450,00</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Valor liberado</Text>
              <Text style={styles.valueText}>-</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeaderContainer}>
            <Text style={styles.headerText}>482394829</Text>
            <View style={styles.iconsContainer}>
              <TouchableOpacity style={styles.svgEditContainer}>
                <SvgEdit />
              </TouchableOpacity>
              <TouchableOpacity>
                <SvgClose />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentRow}>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Situação</Text>
              <Text style={styles.valueText}>Rascunho</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Data solicitação</Text>
              <Text style={styles.valueText}>20/10/2020</Text>
            </View>
          </View>
          <View style={[styles.contentRow, styles.removeMarginBottom]}>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Valor solicitado</Text>
              <Text style={styles.valueText}>R$ 450,00</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.labelText}>Valor liberado</Text>
              <Text style={styles.valueText}>-</Text>
            </View>
          </View>
        </View>
        <View style={{height: 15}} />
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {padding: 15, paddingBottom: 50},
  listHeaderContainer: {marginBottom: 15},
  listContainer: {marginBottom: 10},
  cardContainer: {
    padding: 15,
    elevation: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    borderColor: '#888888',
    borderLeftWidth: 6,
    marginBottom: 10,
  },
  cardHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  svgEditContainer: {marginRight: 12},
  headerText: {fontSize: 16, color: '#333', fontWeight: '500'},
  labelText: {fontSize: 11, color: '#555'},
  valueText: {color: '#333'},
  boldValueText: {fontSize: 14, color: '#888', fontWeight: '500'},
  contentRow: {flexDirection: 'row', marginBottom: 10},
  contentContainer: {flex: 1},
  removeMarginBottom: {marginBottom: 0},
});
