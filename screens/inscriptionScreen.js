import { View, TouchableHighlight } from "react-native";
import InputField from "../components/inputField";
import MyButton from "../components/myButton";
import styles from '../styles/globalStyle';

export default function InscriptionScreen({navigation}){
  return(
    <View style={styles.container}>
      <View style={styles.form}>
        <InputField label="Username"/>
        <InputField label="Password"/>
        <InputField label="Password confirmation"/>


        <TouchableHighlight
          onPress={() => navigation.push("Recipes")}
        >
          <MyButton label="Create my account"/>
        </TouchableHighlight>
      </View>
    </View>
  );
}