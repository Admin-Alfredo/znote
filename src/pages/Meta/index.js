import React from 'react'
import { FlatList, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Actions from '../../components/Actions'
import MetaItem from '../../components/MetaItem'
import { title } from '../../globalStyles'
import { AntDesign } from '@expo/vector-icons'
export default function Meta({ navigation }) {
  const metas = [
    {
      id: 1,
      nome: 'Pare viagem',
      valor: 178000,
      valorSalvo: 150000,
      dataAlvo: new Date('01-20-2024'),
      data: new Date(),
      categoria: 'Lazer',
      descricao: 'Ir para São Paulo Brasil',
      status: false,
    },
    {
      id: 2,
      nome: 'Comprar um PC',
      valor: 235000,
      valorSalvo: 18000,
      dataAlvo: new Date('03-20-2024'),
      data: new Date(),
      categoria: 'Eletrónico',
      descricao: 'Comprar um computador HP core i7 RAM 16GB',
      status: false,
    },
    {
      id: 3,
      nome: 'Comprar um PC',
      valor: 235000,
      valorSalvo: 100000,
      dataAlvo: new Date('03-20-2024'),
      data: new Date(),
      categoria: 'Eletrónico',
      descricao: 'Comprar um computador HP core i7 RAM 16GB',
      status: false,
    },
    {
      id: 4,
      nome: 'Pare viagem',
      valor: 178000,
      valorSalvo: 150000,
      dataAlvo: new Date('01-20-2024'),
      data: new Date(),
      categoria: 'Lazer',
      descricao: 'Ir para São Paulo Brasil',
      status: false,
    },
    {
      id: 5,
      nome: 'Comprar um PC',
      valor: 235000,
      valorSalvo: 18000,
      dataAlvo: new Date('03-20-2024'),
      data: new Date(),
      categoria: 'Eletrónico',
      descricao: 'Comprar um computador HP core i7 RAM 16GB',
      status: false,
    },
    {
      id: 6,
      nome: 'Comprar um PC',
      valor: 235000,
      valorSalvo: 100000,
      dataAlvo: new Date('03-20-2024'),
      data: new Date(),
      categoria: 'Eletrónico',
      descricao: 'Comprar um computador HP core i7 RAM 16GB',
      status: false,
    },
    {
      id: 7,
      nome: 'Comprar um PC',
      valor: 235000,
      valorSalvo: 18000,
      dataAlvo: new Date('03-20-2024'),
      data: new Date(),
      categoria: 'Eletrónico',
      descricao: 'Comprar um computador HP core i7 RAM 16GB',
      status: false,
    },
    {
      id: 8,
      nome: 'Comprar um PC',
      valor: 235000,
      valorSalvo: 100000,
      dataAlvo: new Date('03-20-2024'),
      data: new Date(),
      categoria: 'Eletrónico',
      descricao: 'Comprar um computador HP core i7 RAM 16GB',
      status: false,
    },
  ]


  return (
    <View style={styles.container}>
      <Header name={'Admiro Alfredo'} />
      <Balance saldo="2,800.00" gastos="350.000" />

      <View style={{ marginStart: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MetaEditor')}
          style={styles.metaAddButton}>
          <AntDesign name='plus' size={30} color='#8000ff' />
        </TouchableOpacity>
      </View>

      <Text style={{ ...title }}>Metas a cumprir</Text>
      <FlatList
        style={{ marginBottom: 20 }}
        scrollEnabled={true}
        data={metas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <MetaItem key={index} data={item} />
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1
  },
  metaAddButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'transparent',
  }
})