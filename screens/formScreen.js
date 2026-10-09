import { View,TouchableHighlight, Text, StyleSheet } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import InputField from '../components/inputField';
import MyButton from '../components/myButton';
import TimeList from '../components/timeList';
import globalStyles from '../styles/globalStyle';
import { useEffect, useState } from 'react';
import ToastManager, {Toast} from 'toastify-react-native';
import {EMPTY_RECIPE} from '../models/Recipe';

function checkErrors(recipe){
  const MAX_DURATION = 12 * 60 + 59;
  const durationRecipe = recipe.durationHours * 60 + recipe.durationMinutes;

  let errors = ""

  if(recipe.category === null)
    errors += "Catégorie requise!\n";

  if(recipe.name.trim() == "")
    errors += "Nom requis (non vide)!\n";

  if(durationRecipe <= 0 || durationRecipe > MAX_DURATION)
    errors += "La durée doit être valide (Durée > 0)";

  return errors
}

export default function FormScreen({navigation, route}){
  const optionLabels = ['Breakfast', 'Lunch', 'Diner']; 
  const options = optionLabels.map((label, index) => ({id: index, label: label, value: index, color: "white"}));

  const [recipe, setRecipe] = useState(EMPTY_RECIPE);
  const selectedRecipe = route.params?.selectedRecipe
  let mode = !selectedRecipe ? "ADD" : "DELETE"

  useEffect(() => {
    if(selectedRecipe){
      setRecipe(selectedRecipe);
    }
  }, [route.params])

  return (
    <View style={globalStyles.container}>
      <View style={{flex: 1, alignItems: "center"}}>
        <RadioGroup 
          radioButtons={ options }
          selectedId={recipe.category} 
          layout="row" 
          containerStyle={styles.radio} 
          labelStyle={{color: "white"}}
          onPress={(category) => setRecipe({...recipe, category})}
        />
        
        <InputField label="Name" value={recipe.name} onChangeText={(name) => setRecipe({...recipe, name}) }/>
        
        <View style={[globalStyles.rowDefinition, styles.durationContainer]}>
          <View style={[globalStyles.rowDefinition, {gap: 10, flex: 1, alignItems: "center"}]}>
            <Text style={{color: 'white'}}>Duration</Text>
            <TimeList max="12" unity="h" selectedValue={recipe.durationHours} onValueChange={(durationHours, hoursIndex) => setRecipe({...recipe, durationHours})}/>
          </View>
          <View style={[globalStyles.rowDefinition, {gap: 10, flex: 1,alignItems: "center"}]}>
            <Text style={{color: 'white'}}>:</Text>
            <TimeList max="60" unity="mins" selectedValue={recipe.durationMinutes} onValueChange={(durationMinutes, minutesIndex) => setRecipe({...recipe, durationMinutes})}/>
          </View>
        </View>

        <InputField label="Description" value={recipe.description} onChangeText={(description) => setRecipe({...recipe, description})} style={{height: 480, maxHeight: 480, marginBottom: 25, verticalAlign:'top'}}/>
        
        { mode == "ADD" && <TouchableHighlight
          onPress = {() => {
            const errors = checkErrors(recipe);
            if(errors != "")
              Toast.info(errors);
            else
              navigation.popTo("Recipes", {recipe});
          }}
        >
          <MyButton width="60" label="Save"/>
        </TouchableHighlight>}

        { mode == "DELETE" && <TouchableHighlight
          onPress = {() => {
            navigation.popTo("Recipes");
          }}
        >
          <MyButton width="60" label="Delete"/>
        </TouchableHighlight>}

        <ToastManager/>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  radio: {
    marginBottom: 20,
    gap: 15,
  },

  durationContainer: {
    width: 350,
    paddingVertical: 10, 
    marginVertical: 20,
    gap: 10,
    alignItems: "center",
  },
});