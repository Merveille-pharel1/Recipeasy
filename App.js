import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native-web';
import LoginScreen from './screens/loginScreen';
import InscriptionScreen from './screens/inscriptionScreen';
import FormScreen from './screens/formScreen';
import styles from './styles/globalStyle';

export default function App() {
  const SCREEN = 1;
  return(
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          { SCREEN === 1 && <LoginScreen/> }

          { SCREEN === 2 && <InscriptionScreen/> }

          { SCREEN === 3 && <FormScreen/> }
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
