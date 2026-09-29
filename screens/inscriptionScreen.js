import { View, TouchableHighlight } from "react-native";
import InputField from "../components/inputField";
import MyButton from "../components/myButton";
import globalStyles from '../styles/globalStyle';

export default function InscriptionScreen({navigation}){
  return(
    <View style={globalStyles.container}>
      <View style={globalStyles.form}>
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