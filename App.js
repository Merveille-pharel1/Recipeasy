import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import RadioGroup from 'react-native-radio-buttons-group';
import { StatusBar } from 'react-native-web';

export default function App() {
  const SCREEN = 3;
  switch(SCREEN){
    case 1:
      return <ConnexionScreen/>;
    case 2:
      return <InscriptionScreen/>;
    case 3:
      return <FormScreen/>;
  }
}

function MyButton({label}){
  return (
    <View style = {styles.button}>
      <Text style={styles.text}>{label}</Text>
    </View>
  )
}

function InputField({label, style, ...otherProps}){
  return(
    <TextInput placeholder={label} placeholderTextColor={'lightgray'} style={[styles.field, style]} {...otherProps} />
  )
}

function TimeList({max, unity}){
  const array = Array.from({length: parseInt(max)}, (_, i) => i);

  return(
    <Picker style={styles.pickerContainer} dropdownIconColor={"white"}>
      {
        array.map((i) =>  <Picker.Item label={i + " " + unity} value={i} key={i} color='black'/>)
      }
    </Picker>
  )
}


function ConnexionScreen(){
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>

          <View style={styles.form}>
            <InputField label="Username"/>
            <InputField label="Password" secureTextEntry={true}/>

            <TouchableHighlight>
              <MyButton width="80" label="Login"/>
            </TouchableHighlight>

            <Text style={styles.link}>Sign up!</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

function InscriptionScreen(){
  return(
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>

          <View style={styles.form}>
            <InputField label="Username"/>
            <InputField label="Password"/>
            <InputField label="Password confirmation"/>


            <TouchableHighlight>
              <MyButton label="Create my account"/>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

function FormScreen(){
  const options = [
        {
            id: '1',
            label: 'Breakfast',
            value: '1',
            color: "white"
        },
        {
            id: '2',
            label: 'Lunch',
            value: '2',
            color: "white"
        },
        {
            id: '3',
            label: 'Diner',
            value: '3',
            color: "white"
        }
  ];

  return (

    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>

            <RadioGroup radioButtons={ options } layout="row" containerStyle={styles.radio} labelStyle={{color: "white"}}/>
            
            <InputField label="Name"/>

            <View style={[styles.row_direction, styles.durationContainer]}>
              <View style={[styles.row_direction, {gap: 10, flex: 1, alignItems: "center"}]}>
                <Text style={{color: 'white'}}>Duration</Text>
                <TimeList max="24" unity="h"/>
              </View>
              <View style={[styles.row_direction, {gap: 10, flex: 1,alignItems: "center"}]}>
                <Text style={{color: 'white'}}>:</Text>
                <TimeList max="60" unity="mins"/>
              </View>
            </View>

            <InputField label="Description" style={{height: 480, maxHeight: 480, marginBottom: 25, verticalAlign:'top'}}/>
            <MyButton width="60" label="Save"/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

   );
    

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#387E7F',
  },

  form: {
    width: '90%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8%"
  },

  field:{
    borderWidth: 1,
    borderColor: 'lightgray',
    width: "88%",
    paddingHorizontal: "5%",
    paddingVertical: "4%",
    fontSize: 18,
    color: 'white',
  },

  link:{
    textAlign: "center",
    color: "blue",
  },

  button: {
    backgroundColor: "#F2A93B",
    paddingVertical: 15,
    borderRadius: 5,
    paddingHorizontal: 15
  },

  text:{
    color: "white",
    textAlign: "center"
  },

  radio: {
    marginBottom: 20,
    gap: 15,
  },

  durationContainer: {
    alignItems: "center",
    marginVertical: 20,
    gap: 10,
    width: "88%",
    height: "5%",
  
  },

  row_direction: {
    display: "flex",
    flexDirection: "row"
  },

  pickerContainer: {
    flex: 1,
    backgroundColor: "inherit",
    borderColor: "#387E7F",
    color: "white",
  },

});
