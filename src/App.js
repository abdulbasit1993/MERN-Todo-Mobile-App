import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import TodoDetail from './screens/TodoDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="TodoDetailScreen" component={TodoDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;