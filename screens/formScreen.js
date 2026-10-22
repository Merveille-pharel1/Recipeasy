import { View,TouchableHighlight, Text, StyleSheet, Alert } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import InputField from '../components/inputField';
import MyButton from '../components/myButton';
import TimeList from '../components/timeList';
import globalStyles from '../styles/globalStyle';
import { useEffect, useState } from 'react';
import {Toast} from 'toastify-react-native';
import Recipe from '../models/Recipe';
import recipeService from '../services/RecipeService';


export default function FormScreen({navigation, route}){
  const optionLabels = ['Breakfast', 'Lunch', 'Diner']; 
  const options = optionLabels.map((label, index) => ({id: index + 1, label: label, value: index, color: "white"}));

  const [recipe, setRecipe] = useState(new Recipe({}));
  const selectedRecipe = route.params?.selectedRecipe
  let mode = !selectedRecipe ? "ADD" : "DELETE"

  useEffect(() => {
    if(route.params?.selectedRecipe){
      setRecipe(new Recipe(route.params.selectedRecipe));
    }
  }, [route.params])

  function showRequestResponse(success, operation){
    if(success){
      Toast.info("Success de " + operation + "!")
      navigation.popTo("Recipes");
    }
    else{
      Toast.error("Echec de " + operation +  "!")
    }
  }

  async function handleSave(){
    const errors = recipe.checkErrors();

    if(errors != "")
      Toast.error(errors)

    else{
  
      if(mode == "ADD"){
        const success = await recipeService.insertRecipe(recipe)
        showRequestResponse(success, "l'ajout")
      }

      else{
        const success = await recipeService.updateRecipe(recipe)
        showRequestResponse(success, "la modification")
      }
    }
  }

  async function handleDelete(){
    const success = await recipeService.deleteRecipe(recipe)
    showRequestResponse(success, "la suppression")
  }

  function confirmDeletion() {
    Alert.alert(
      "Supprimer la recette",
      "Cette action est irréversible.",
      [
        { text: "Annuler", style: "cancel" },
        { text: "Oui", style: "destructive", onPress: handleDelete },
      ]
    )
  }

  return (
    <View style={globalStyles.container}>
      <View style={{flex: 1, alignItems: "center", paddingTop: 5}}>
        <RadioGroup 
          radioButtons={ options }
          selectedId={recipe.category} 
          layout="row" 
          containerStyle={styles.radio} 
          labelStyle={{color: "white"}}
          onPress={(category) => setRecipe(new Recipe({...recipe.toJSON(), category}))}
        />
        
        <InputField label="Name" value={recipe.name} onChangeText={(name) => setRecipe(new Recipe({...recipe.toJSON(), name})) }/>
        
        <View style={[globalStyles.rowDefinition, styles.durationContainer]}>
          <View style={[globalStyles.rowDefinition, {gap: 10, flex: 1, alignItems: "center"}]}>
            <Text style={{color: 'white'}}>Duration</Text>
            <TimeList max="12" unity="h" selectedValue={recipe.duration_hours} onValueChange={(duration_hours, hoursIndex) => setRecipe(new Recipe({...recipe.toJSON(), duration_hours}))}/>
          </View>
          <View style={[globalStyles.rowDefinition, {gap: 10, flex: 1,alignItems: "center"}]}>
            <Text style={{color: 'white'}}>:</Text>
            <TimeList max="60" unity="mins" selectedValue={recipe.duration_minutes} onValueChange={(duration_minutes, minutesIndex) => setRecipe(new Recipe({...recipe.toJSON(), duration_minutes}))}/>
          </View>
        </View>

        <InputField label="Description" value={recipe.description} onChangeText={(description) => setRecipe(new Recipe({...recipe.toJSON(), description}))} style={{height: 480, maxHeight: 480, marginBottom: 25, verticalAlign:'top'}}/>
        
        <View style={[globalStyles.rowDefinition, {gap: 20}]}>
          { mode == "DELETE" && <TouchableHighlight
            onPress = {confirmDeletion}
          >
            <MyButton width="60" label="Delete" style={{backgroundColor: "red"}}/>
          </TouchableHighlight>}

          <TouchableHighlight
            onPress = {handleSave}
          >
            <MyButton width="60" label="Save"/>
          </TouchableHighlight>

        </View>

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