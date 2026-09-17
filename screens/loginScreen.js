import { View, TouchableHighlight, Text } from "react-native";
import InputField from "../components/inputField";
import MyButton from "../components/myButton";
import styles from '../styles/globalStyle';

export default function LoginScreen(){
  return (
    <>
      <View style={styles.form}>
        <InputField label="Username"/>
        <InputField label="Password" secureTextEntry={true}/>

        <TouchableHighlight>
          <MyButton width="80" label="Login"/>
        </TouchableHighlight>

        <Text style={styles.link}>Sign up!</Text>
      </View>
    </>
  );
}