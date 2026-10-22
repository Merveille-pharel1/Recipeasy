import { View, TouchableHighlight } from "react-native";
import { useState } from "react";
import InputField from "../components/inputField";
import MyButton from "../components/myButton";
import globalStyles from '../styles/globalStyle';
import {Toast} from 'toastify-react-native';
import UserCredentials from "../models/UserCredentials";
import auth from "../services/AuthService";

export default function InscriptionScreen({navigation}){

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  function checkErrors(){

    let errors = ""

    if(username == ""){
      errors += "Username requis!\n"
    }

    if(password == ""){
      errors += "Password requis!\n"
    }
    else if (password !== confirmPassword ){
      errors += "les passwords doivent être identiques"
    }

    return errors
  }

  async function handleSignUp(){

    const errors = checkErrors() 
    
    if(errors != ""){
      Toast.error(errors)
      return
    }
    else{
      const credentials = new UserCredentials({username, password})
    
      const success = await auth.singUp(credentials)
      
      if(success){
        setUsername("")
        setPassword("")
        setConfirmPassword("")

        navigation.replace("Recipes")
      }
      else{
        Toast.error("Username déjà utilisé")
      }  
    }
  }

  return(
    <View style={globalStyles.container}>
      <View style={globalStyles.form}>
        <InputField label="Username" value={username} onChangeText={(username) => setUsername(username)}/>
        <InputField label="Password" value={password} onChangeText={(password) => setPassword(password)}/>
        <InputField label="Password confirmation" value={confirmPassword} onChangeText={(value) => setConfirmPassword(value)}/>


        <TouchableHighlight
          onPress={handleSignUp}
        >
          <MyButton label="Create my account"/>
        </TouchableHighlight>
      </View>

    </View>
  );
}