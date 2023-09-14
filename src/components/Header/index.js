import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 15 : 30;
export default function Header({ name, navigation }) {


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.userName}>{name}</Text>

        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name='user' size={27} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#8000ff',
    paddingTop: statusBarHeight,
    paddingStart: 15,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userName: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  buttonUser: {
    height: 44,
    width: 44,
    backgroundColor: '#FFFFFF88',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44
  }
}) 