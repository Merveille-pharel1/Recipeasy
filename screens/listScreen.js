import { View, Text, TouchableHighlight, StyleSheet, FlatList } from "react-native"
import {FontAwesome6 } from '@expo/vector-icons'
import globalStyles from "../styles/globalStyle" 
import MyButton from "../components/myButton";
import RecipeItem from "../components/RecipeItem";
import { useCallback, useEffect, useState } from "react";
import recipeService from "../services/RecipeService";
import { useFocusEffect } from "@react-navigation/native";

export default function ListScreen({navigation, route}){
    const addIcon = <FontAwesome6 name="add" size={20} color="white" />;

    const [recipes, setRecipes] = useState([]);

    function sortRecipes(recipesArray){
        return recipesArray.sort((r1, r2) => r1.name.localeCompare(r2.name))
    }

    function ListEmpty(){
        return(
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                <Text style={[styles.text, {fontSize: 20,}]}>No recipes yet...</Text>
            </View>
        )
    }

    const loadRecipes = useCallback(() =>{
        let cancelled = false;

        async function load() {
            const success = await recipeService.loadRecipes()
            if(cancelled) return

            if(success){
                setRecipes(sortRecipes(recipeService.recipes))
            }
            else{
                console.log("Impossible de charger une Liste de recette")
                navigation.popToTop()
            }
        }

        load()
        
        return () => { cancelled = true; }
    }, [navigation])

    useFocusEffect(loadRecipes)

    return(
        <View style={globalStyles.container}>
            
            <View style={styles.listContainer}>

                <FlatList
                    data={ recipes }
                    renderItem={ (listItem) => <RecipeItem recipe={listItem.item} /> }
                    ItemSeparatorComponent={ () => <View style={{ height: 1, backgroundColor: 'lightgray' }}/> }
                    ListEmptyComponent={<ListEmpty/>}
                    contentContainerStyle={recipes.length === 0 && { flexGrow: 1 }}
                />

            </View>

            <TouchableHighlight
                accessibilityLabel="Créer une nouvelle recette"
                underlayColor="#CE9032"
                onPress={() => navigation.push("Recipe")}
                style={{ position: "absolute", bottom: 50, right: 30}}
            >
                <MyButton icon={addIcon} style={{padding: 20, borderRadius: 30,}}/>
            </TouchableHighlight>
            
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 50
    },

});