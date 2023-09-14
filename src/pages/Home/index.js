import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';
import * as globalStyles from '../../globalStyles'
const lista = [
  {
    "id": 5,
    "label": "Educação",
    "valor": "9,000",
    "data": "2023-09-25",
    "tipo": 0
  },
  {
    "id": 6,
    "label": "Salário",
    "valor": "350,000",
    "data": "2023-09-27",
    "tipo": 1
  },
  {
    "id": 7,
    "label": "Lazer",
    "valor": "6,000",
    "data": "2023-09-30",
    "tipo": 0
  },
  {
    "id": 8,
    "label": "Transporte",
    "valor": "4,000",
    "data": "2023-10-05",
    "tipo": 0
  },
  {
    "id": 9,
    "label": "Alimentação",
    "valor": "8,500",
    "data": "2023-10-10",
    "tipo": 0
  },
  {
    "id": 10,
    "label": "Bônus",
    "valor": "20,000",
    "data": "2023-10-15",
    "tipo": 1
  },
  {
    "id": 11,
    "label": "Eletrônicos",
    "valor": "18,000",
    "data": "2023-10-20",
    "tipo": 0
  },
  {
    "id": 12,
    "label": "Educação",
    "valor": "7,500",
    "data": "2023-10-25",
    "tipo": 0
  },
  {
    "id": 13,
    "label": "Salário",
    "valor": "350,000",
    "data": "2023-10-30",
    "tipo": 1
  },
  {
    "id": 14,
    "label": "Aluguel",
    "valor": "55,000",
    "data": "2023-11-01",
    "tipo": 0
  }
]




export default function Home({ navigation  }) {
  return (
    <View style={styles.container}>
      <Header name={'Admiro Alfredo'} />
      <Balance saldo="2,800.00" gastos="350.000" />
      <Actions navigation={navigation}/>
      <Text style={globalStyles.title}>Últimas movimentações</Text>
    
      <FlatList
        style={styles.list}
        data={lista}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (<Moviments  data={item} />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 20,
  },
 
  container: {flex: 1},
  list: {
    marginStart: 15,
    marginEnd: 15,
    marginBottom: 20 
  }
});
