import { View, Text, TouchableHighlight, StyleSheet } from "react-native"
import {AntDesign, FontAwesome6 } from '@expo/vector-icons'
import globalStyles from "../styles/globalStyle" 
import MyButton from "../components/myButton";
import { useEffect, useState } from "react";
import EMPTY_RECIPE from "../models/Recipe";
import ToastManager, {Toast} from 'toastify-react-native';


export default function ListScreen({navigation, route}){
    const eyesIcon = <AntDesign name="eye" size={20} color="white" />;
    const addIcon = <FontAwesome6 name="add" size={20} color="white" />;

    const [recipes, setRecipes] = useState([]);

    function randomize(){
        return Math.floor(Math.random() * recipes.length)
    }

    useEffect(() =>{
        if(route.params?.recipe != undefined){
            setRecipes([...recipes, route.params.recipe]);
            Toast.info("Recette ajouté avec success");
        }
    }, [route.params?.recipe]);


    return(
        <View style={globalStyles.container}>
            
            <View style={styles.listContainer}>
                <Text style={styles.listHeader}>Liste de Recettes</Text>
                <Text style={styles.textList}>{JSON.stringify([...recipes].sort((r1, r2) => r1.name.localeCompare(r2.name)))}</Text>

                <View style = {[globalStyles.rowDefinition, styles.actionButtons]}>
                    <TouchableHighlight
                        accessibilityLabel="Détail de la recette"
                        underlayColor="#CE9032"
                        onPress={() => {
                            if(recipes.length === 0){
                                Toast.info("La liste est vide!!");
                                return;
                            }
                            const recipe = recipes[randomize()]
                            navigation.push("Recipe", {selectedRecipe: recipe});
                        }}
                    >
                        <MyButton icon={eyesIcon} style={{paddingVertical: 8}}/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        accessibilityLabel="Créer une nouvelle recette"
                        underlayColor="#CE9032"
                        onPress={() => navigation.push("Recipe")}
                    >
                        <MyButton icon={addIcon} style={{paddingVertical: 8}}/>
                    </TouchableHighlight>
                </View>
            </View>
            
            <ToastManager />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        maxWidth: 350,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        padding: 16,
    },

    listHeader: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
    },

    textList: {
        color: "white",
        fontSize: 18,
        textAlign: "center"   
    },

    actionButtons: {
        gap: 40
    }
});