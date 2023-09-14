import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
export default function Actions({ navigation }) {
  return (
    <View style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name='addfolder' size={26} color='#000' />
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name='tagso' size={26} color='#000' />
        </View>
        <Text style={styles.labelButton}>Compras</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('Meta')}
      >
        <View style={styles.areaButton}>
          <AntDesign name='tagso' size={26} color='#000' />
        </View>
        <Text style={styles.labelButton}>Metas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name='creditcard' size={26} color='#000' />
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name='setting' size={26} color='#000' />
        </View>
        <Text style={styles.labelButton}>Conta</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginTop: 18,
    marginBottom: 30,
    paddingEnd: 15,
    paddingStart: 15,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 15
  },
  areaButton: {
    backgroundColor: '#ecf0f1',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  labelButton: {
    marginTop: 5,
    textAlign: 'center'
  }
})