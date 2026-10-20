import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/loginScreen';
import InscriptionScreen from './screens/inscriptionScreen';
import FormScreen from './screens/formScreen';
import ListScreen from './screens/listScreen';
import {SignOutButton, BackButton} from './components/headerButton';
import styles from './styles/globalStyle';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Login'
          screenOptions={{
            headerStyle: {
              backgroundColor: '#2A0080',
              
            },
            headerTintColor: 'white',
            headerBackVisible: false
          }}
          >
          <Stack.Screen 
            name = "Login"
            component={LoginScreen}
            options={{title: 'Sign In'}}
          />

          <Stack.Screen 
            name = "Register"
            component={InscriptionScreen}
            options={{
              title: 'Sign Up',
              headerLeft: () => (<BackButton/>),
            }}

          />

          <Stack.Screen 
            name = "Recipe"
            component={FormScreen}
            options={{
              title: 'Recipe',
              headerLeft: () => (<BackButton/>),
            }}
          />

          <Stack.Screen 
            name = "Recipes"
            component = {ListScreen}
            options={{
              title: 'Recipes',
              headerRight: () => (<SignOutButton/>),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
