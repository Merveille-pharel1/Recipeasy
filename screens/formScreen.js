import { View,TouchableHighlight, Text, StyleSheet } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import InputField from '../components/inputField';
import MyButton from '../components/myButton';
import TimeList from '../components/timeList';
import globalStyles from '../styles/globalStyle';
import { useEffect, useState } from 'react';
import ToastManager, {Toast} from 'toastify-react-native';
import Recipe, {EMPTY_RECIPE, CheckErrors} from '../models/Recipe';
import { v4 as uuidv4 } from 'uuid';

export default function FormScreen({navigation, route}){
  const optionLabels = ['Breakfast', 'Lunch', 'Diner']; 
  const options = optionLabels.map((label, index) => ({id: index, label: label, value: index, color: "white"}));

  const [recipe, setRecipe] = useState(new Recipe({}));
  const selectedRecipe = route.params?.selectedRecipe
  let mode = !selectedRecipe ? "ADD" : "DELETE"

  useEffect(() => {
    if(route.params?.selectedRecipe){
      setRecipe(new Recipe(route.params.selectedRecipe));
    }
  }, [route.params])

  return (
    <View style={globalStyles.container}>
      <View style={{flex: 1, alignItems: "center", paddingTop: 5}}>
        <RadioGroup 
          radioButtons={ options }
          selectedId={recipe.category} 
          layout="row" 
          containerStyle={styles.radio} 
          labelStyle={{color: "white"}}
          onPress={(category) => setRecipe(new Recipe({...recipe, category}))}
        />
        
        <InputField label="Name" value={recipe.name} onChangeText={(name) => setRecipe(new Recipe({...recipe.toJSON(), name})) }/>
        
        <View style={[globalStyles.rowDefinition, styles.durationContainer]}>
          <View style={[globalStyles.rowDefinition, {gap: 10, flex: 1, alignItems: "center"}]}>
            <Text style={{color: 'white'}}>Duration</Text>
            <TimeList max="12" unity="h" selectedValue={recipe.durationHours} onValueChange={(durationHours, hoursIndex) => setRecipe(new Recipe({...recipe.toJSON(), durationHours}))}/>
          </View>
          <View style={[globalStyles.rowDefinition, {gap: 10, flex: 1,alignItems: "center"}]}>
            <Text style={{color: 'white'}}>:</Text>
            <TimeList max="60" unity="mins" selectedValue={recipe.durationMinutes} onValueChange={(durationMinutes, minutesIndex) => setRecipe(new Recipe({...recipe.toJSON(), durationMinutes}))}/>
          </View>
        </View>

        <InputField label="Description" value={recipe.description} onChangeText={(description) => setRecipe(new Recipe({...recipe.toJSON(), description}))} style={{height: 480, maxHeight: 480, marginBottom: 25, verticalAlign:'top'}}/>
        
        <View style={[globalStyles.rowDefinition, {gap: 20}]}>
          { mode == "DELETE" && <TouchableHighlight
            onPress = {() => {
              navigation.popTo("Recipes");
            }}
          >
            <MyButton width="60" label="Delete" style={{backgroundColor: "red"}}/>
          </TouchableHighlight>}

          <TouchableHighlight
            onPress = {() => {
              const errors = recipe.checkErrors();
              if(errors != "")
                Toast.info(errors);
              else{
                let newRecipe = recipe

                if(mode == "ADD"){
                  newRecipe = new Recipe({...recipe, id: uuidv4()});
                }
                navigation.popTo("Recipes", {recipe: newRecipe});
              }
            }}
          >
            <MyButton width="60" label="Save"/>
          </TouchableHighlight>

        </View>

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