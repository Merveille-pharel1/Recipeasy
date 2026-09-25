import { View, TouchableHighlight, Text } from "react-native";
import InputField from "../components/inputField";
import MyButton from "../components/myButton";
import styles from '../styles/globalStyle';

export default function LoginScreen({navigation}){
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <InputField label="Username"/>
        <InputField label="Password" secureTextEntry={true}/>

        <TouchableHighlight
          onPress={() => navigation.push("Recipes")}
        >
          <MyButton width="80" label="Login"/>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => navigation.push("Register")}
        >
          <Text style={styles.link}>Sign up!</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}