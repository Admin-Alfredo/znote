import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Moviments({ data }) {
  const [showValue, setShowValue] = useState(false)
  return (
    <TouchableOpacity style={styles.container} onPress={() => {
      setShowValue(!showValue)
    }}>
      <Text style={styles.date}>{data.data}</Text>
      <View style={styles.content}>
        <Text style={styles.label}> {data.label}</Text>
        {showValue ?
          (data.tipo == 1 ?
            <Text style={styles.valor}>{data.valor} Kz</Text> :
            <Text style={styles.esponses}>- {data.valor} Kz</Text>
          ) :
          <View style={styles.skeleton} ></View>
        }
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginBottom: 24,
    fontSize: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8
  },
  date: {
    color: '#999',
    fontWeight: 'bold'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16
  },
  valor: {
    color: '#2ecc71',
    fontSize: 16,
    fontWeight: 'bold'
  },
  esponses: {
    color: '#e74c3c',
    fontSize: 16,
    fontWeight: 'bold'
  },
  skeleton: {
    width: 80,
    height: 10,
    backgroundColor: '#DADADA',
    borderRadius: 6
  }
})