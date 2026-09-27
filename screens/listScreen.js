import { View, Text, TouchableHighlight } from "react-native"
import {AntDesign, FontAwesome6 } from '@expo/vector-icons'
import styles from "../styles/globalStyle" 
import MyButton from "../components/myButton";

export default function ListScreen({navigation}){
    const eyesIcon = <AntDesign name="eye" size={20} color="white" />;
    const addIcon = <FontAwesome6 name="add" size={20} color="white" />;

    return(
        <View style={styles.container}>
            
            <View style={styles.listContainer}>
                <Text style={styles.listHeader}>Liste de Recettes</Text>
                <Text style={styles.textList}>liste: hjs, jhsjhjkw,jsjhjkashsajkhjdkhjsjhjskhjkdjhkgajkhjshgjdhjhsjhsjudhjkbhajnbhsnbnbnmxbnchghajkwh jkqhjkwhyu y haiu</Text>

                <View style = {[styles.rowDefinition, styles.actionButtons]}>
                    <TouchableHighlight
                        accessibilityLabel="Détail de la recette"
                        underlayColor="#CE9032"
                        onPress={() => navigation.push("Recipe")}
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
            
            
        </View>
    )
}