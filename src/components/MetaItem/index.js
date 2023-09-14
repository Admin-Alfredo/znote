import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function MetaItem({ data }) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <View style={{
        position: 'absolute',
        width: `${(data.valorSalvo * 100) / data.valor}%`,
        height: '100%',
        backgroundColor: '#2ecc7155',
      }}></View>

      <Text style={styles.title}>{data.nome}</Text>
      <View style={styles.valores}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#2eff71' }}>{data.valorSalvo} Kz</Text>
        <Text>{data.valor}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginStart: 15,
    marginEnd: 15,
    marginTop: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA'
  },
  progress: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#2ecc7155',

  },
  valores: {
    alignItems: 'flex-end',
    marginEnd: 10,
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginStart: 10,

  }
})
