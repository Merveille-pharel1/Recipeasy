import { TouchableHighlight, View, Text, StyleSheet } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import globalStyles from "../styles/globalStyle" 
import { useNavigation } from "@react-navigation/native";

const formatDuration = (hours, minutes) => `${hours}h${String(minutes).padStart(2, "0")}`;


export default function RecipeItem({recipe}){

    const categories = [
        {name: "free-breakfast", color: "#d8a14eff"},
        {name: "lunch-dining", color: "limegreen"},
        {name: "dinner-dining", color: "blue"}
    ]   

    const navigation = useNavigation();
    
    return(
        <TouchableHighlight 
            underlayColor="#CE9032"
            onPress={() => navigation.push("Recipe", {selectedRecipe: recipe})} 
        >
            <View style={[globalStyles.rowDefinition, {marginVertical: 15, gap: 4}]}>
                <View style={{width: 50}}>
                    <MaterialIcons name={categories[recipe.category - 1].name} size={24} color={categories[recipe.category - 1].color} />
                    <Text style={styles.text}>{formatDuration(recipe.duration_hours, recipe.duration_minutes)}</Text>
                </View>
                <View style={{flex: 1, justifyContent: "flex-start"}}>
                    <Text numberOfLines={1} style={styles.textName}>{recipe.name}</Text>
                    <Text numberOfLines={1} style={globalStyles.text}>{recipe.description}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
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

})