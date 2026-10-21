import { View, TouchableHighlight } from "react-native";
import { useState } from "react";
import InputField from "../components/inputField";
import MyButton from "../components/myButton";
import globalStyles from '../styles/globalStyle';
import ToastManager, {Toast} from 'toastify-react-native';
import UserCredentials from "../models/UserCredentials";


export default function InscriptionScreen({navigation}){

  const [userCredentials, setUserCredentials] = useState(new UserCredentials({username: "", password: ""}))
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  function checkErrors(){

    let errors = ""

    if(userCredentials.username == ""){
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

  function handleCreate(){

    const errors = checkErrors() 
    
    if(errors != ""){
      Toast.error(errors)
    }
    else{
      setUserCredentials(new UserCredentials({...userCredentials, password}))
      navigation.push("Recipes")
    }
  }

  return(
    <View style={globalStyles.container}>
      <View style={globalStyles.form}>
        <InputField label="Username" value={userCredentials.username} onChangeText={(username) => setUserCredentials(new UserCredentials({...userCredentials, username}))}/>
        <InputField label="Password" value={password} onChangeText={(password) => setPassword(password)}/>
        <InputField label="Password confirmation" value={confirmPassword} onChangeText={(value) => setConfirmPassword(value)}/>


        <TouchableHighlight
          onPress={handleCreate}
        >
          <MyButton label="Create my account"/>
        </TouchableHighlight>
      </View>

      <ToastManager/>
    </View>
  );
}