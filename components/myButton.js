import { View, Text, StyleSheet } from "react-native"

export default function MyButton({label, icon, style}){
  return (
    <View style = {[styles.button, style]}>
      {label && <Text style={styles.text}>{label}</Text>}
      {icon}
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F2A93B",
    padding: 15,
    borderRadius: 5,
  },

  text:{
    color: "white",
    textAlign: "center"
  },
})