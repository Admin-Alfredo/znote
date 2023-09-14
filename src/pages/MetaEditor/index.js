import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import * as globalStyles from '../../globalStyles'
import { AntDesign } from '@expo/vector-icons'
import DateTimePickerModal from "react-native-modal-datetime-picker";

// import DatePicker from '@react-native-community/datetimepicker';




export default function MetaEditor() {
  const [number, setNumber] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const handleTextChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setNumber(numericValue);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    // Você pode fazer algo com a data selecionada aqui
    console.log('Data selecionada:', selectedDate);
  };

  return (
    <View style={styles.container}>
      <Header name='Admiro Alfredo' />
      <Text style={globalStyles.title}>Adiciona nova meta </Text>
      <View style={styles.controlGroup}>
        <TextInput
          style={styles.controlInput}
          placeholder='Qual é sua meta?'
        />
      </View>
      <View style={styles.controlGroup}>
        <TextInput
          keyboardType="numeric"
          style={styles.controlInput}
          placeholder='Qual o valor a tingir?'
          value={number}
          onChangeText={handleTextChange} />
      </View>
      <View style={styles.controlGroup}>
        <TouchableOpacity onPress={showDatePicker}>
          <Text>Final da meta</Text>
        </TouchableOpacity>
        
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {

  },
  controlGroup: {
    marginStart: 15,
    marginEnd: 15
  },
  controlField: {

  },
  controlInput: {
    backgroundColor: '#FFF',
    height: 45,
    padding: 5,
    fontSize: 20,
    borderRadius: 5,
    marginBottom: 15,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  }
})