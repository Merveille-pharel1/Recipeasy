import { View, TouchableHighlight, Text, StyleSheet } from "react-native";
import InputField from "../components/inputField";
import MyButton from "../components/myButton";
import globalStyles from '../styles/globalStyle';
import { useState } from "react";
import UserCredentials from "../models/UserCredentials";
import ToastManager, {Toast} from 'toastify-react-native';

export default function LoginScreen({navigation}){

  const [userCredentials, setUserCredentials] = useState(new UserCredentials({username: "", password: ""}))

  // function checkErrors(){
  //   const errors = userCredentials.checkErrors()

  //   return errors
  // }

  function handleLogin(){

    const errors = userCredentials.checkErrors()

    
    if(errors != ""){
      Toast.error(errors)
    }
    else{
      navigation.push("Recipes")
    }
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.form}>
        <InputField label="Username" value={userCredentials.username} onChangeText={(username) => setUserCredentials(new UserCredentials({...userCredentials, username}))}/>
        <InputField label="Password" value={userCredentials.password} onChangeText={(password) => setUserCredentials(new UserCredentials({...userCredentials, password}))} secureTextEntry={true}/>

        <TouchableHighlight
          onPress={handleLogin}
        >
          <MyButton width="80" label="Login"/>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => navigation.push("Register")}
        >
          <Text style={styles.link}>Sign up!</Text>
        </TouchableHighlight>
      </View>

      <ToastManager/>
    </View>
  );
}

const styles = StyleSheet.create({

  link:{
    textAlign: "center",
    color: "blue",
  },

});