import { View, Text, TouchableHighlight, StyleSheet, FlatList } from "react-native"
import {AntDesign, FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import globalStyles from "../styles/globalStyle" 
import MyButton from "../components/myButton";
import { useEffect, useState } from "react";
import ToastManager, {Toast} from 'toastify-react-native';
import { SEED_RECIPE } from "../models/Recipe";


export default function ListScreen({navigation, route}){
    const addIcon = <FontAwesome6 name="add" size={20} color="white" />;

    const [recipes, setRecipes] = useState(sortRecipes(SEED_RECIPE));

    const formatDuration = (hours, minutes) => `${hours}h${String(minutes).padStart(2, "0")}`;

    function randomize(){
        return Math.floor(Math.random() * recipes.length)
    }

    function sortRecipes(recipesArray){
        return recipesArray.sort((r1, r2) => r1.name.localeCompare(r2.name))
    }

    function RecipeItem({recipe}){

        const categories = [
            {name: "free-breakfast", color: "#d8a14eff"},
            {name: "lunch-dining", color: "limegreen"},
            {name: "dinner-dining", color: "blue"}
        ]   
        
        return(
            <TouchableHighlight 
                underlayColor="#CE9032"
                onPress={() => navigation.push("Recipe", {selectedRecipe: recipe})} 
            >
                <View style={[globalStyles.rowDefinition, {marginVertical: 15, gap: 4}]}>
                    <View style={{width: 50}}>
                        <MaterialIcons name={categories[recipe.category].name} size={24} color={categories[recipe.category].color} />
                        <Text style={styles.text}>{formatDuration(recipe.durationHours, recipe.durationMinutes)}</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: "flex-start"}}>
                        <Text numberOfLines={1} style={styles.textName}>{recipe.name}</Text>
                        <Text numberOfLines={1} style={styles.text}>{recipe.description}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    useEffect(() =>{
        let addingRecipe = route.params?.recipe
        if(addingRecipe != undefined){

            if(recipes.length != 0){
                addingRecipe.id = Math.max(...recipes.map((recipe) => recipe.id)) + 1
            }
            
            const newRecipesList = sortRecipes([...recipes, addingRecipe])

            Toast.info("Recette ajouté avec success");

            setRecipes(newRecipesList);
        }
    }, [route.params?.recipe]);

    return(
        <View style={globalStyles.container}>
            
            <View style={styles.listContainer}>

                {recipes.length == [] ?
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                        <Text style={[styles.text, {fontSize: 20,}]}>No recipes yet...</Text>
                    </View>
                    :
                    <FlatList
                        data={ recipes }
                        renderItem={ (listItem) => <RecipeItem recipe={listItem.item} /> }
                        ItemSeparatorComponent={ () => <View style={{ height: 1, backgroundColor: 'lightgray' }}/> }
                    />
                }

            </View>

            <TouchableHighlight
                accessibilityLabel="Créer une nouvelle recette"
                underlayColor="#CE9032"
                onPress={() => navigation.push("Recipe")}
                style={{ position: "absolute", bottom: 50, right: 30}}
            >
                <MyButton icon={addIcon} style={{padding: 20, borderRadius: 30,}}/>
            </TouchableHighlight>
            
            <ToastManager />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 50
    },

    listHeader: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
        borderWidth: 1
    },

    textList: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        borderWidth: 1
    },

    textName: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"

    },

    text: {
        color: "lightgray",
        fontSize: 16
    }

});