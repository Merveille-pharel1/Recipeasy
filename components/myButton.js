import { View, Text, StyleSheet } from "react-native"

export default function MyButton({label}){
  return (
    <View style = {styles.button}>
      <Text style={styles.text}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
})