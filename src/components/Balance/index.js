import { StyleSheet, Text, View } from 'react-native'

export default function Balance({ saldo, gastos }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.balance}>{saldo}</Text>
          <Text style={styles.currentSymbol}>Kz</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.expences}>{gastos}</Text>
          <Text style={styles.currentSymbol}>Kz</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    paddingBottom: 22,
    paddingTop: 22,
    marginTop: -24,
    marginStart: 15,
    marginEnd: 15,
    borderRadius: 4,
    backgroundColor: '#FAFAFA',
    zIndex: 99
  },
  item: {

  },
  itemTitle: {
    fontSize: 20,
    color: '#999'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  currentSymbol: {
    color: '#DADADA',
    marginRight: 6
  },
  balance: {
    fontSize: 22,
    color: '#2ecc71',
  },
  expences: {
    fontSize: 22,
    color: '#e74'
  }

})
