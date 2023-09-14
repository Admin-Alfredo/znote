import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home'
import Meta from './src/pages/Meta';
import MetaEditor from './src/pages/MetaEditor';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Tela de Boas-vindas' }}
        />
        <Stack.Screen
          name="Meta"
          component={Meta}
          options={{ title: 'Metas' }}
        />
        <Stack.Screen
          name="MetaEditor"
          component={MetaEditor}
          options={{ title: 'Adicionar Metas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

