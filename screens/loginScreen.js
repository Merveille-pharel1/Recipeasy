import { View, TouchableHighlight, Text, StyleSheet } from "react-native";
import InputField from "../components/inputField";
import MyButton from "../components/myButton";
import globalStyles from '../styles/globalStyle';
import { useState } from "react";
import UserCredentials from "../models/UserCredentials";
import ToastManager, {Toast} from 'toastify-react-native';
import auth from "../services/AuthService";


export default function LoginScreen({navigation}){

  const [userCredentials, setUserCredentials] = useState(new UserCredentials({username: "", password: ""}))

  async function handleLogin(){

    const errors = userCredentials.checkErrors()
    
    if(errors != ""){
      Toast.error(errors)
    }
    else{
      const success = await auth.login(userCredentials)
      if(success){
        setUserCredentials(new UserCredentials({username: '', password: ''}))
        navigation.push("Recipes")
      }else{
        Toast.error("Username ou Password invalide")
      }
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
          onPress={() => {
            setUserCredentials(new UserCredentials({username: '', password: ''}));
            navigation.push("Register")
          }}
        >
          <Text style={styles.link}>Sign up!</Text>
        </TouchableHighlight>
      </View>

      {/* <ToastManager/> */}
    </View>
  );
}

const styles = StyleSheet.create({

  link:{
    textAlign: "center",
    color: "blue",
  },

});