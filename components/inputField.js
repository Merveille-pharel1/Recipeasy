import { TextInput, StyleSheet } from "react-native"

export default function InputField({label, style, ...otherProps}){
  return(
    <TextInput placeholder={label} placeholderTextColor={'lightgray'} style={[styles.field, style]} {...otherProps} />
  )
}

const styles = StyleSheet.create({
    field:{
    borderWidth: 1,
    borderColor: 'white',
    width: "88%",
    paddingHorizontal: "5%",
    paddingVertical: "4%",
    fontSize: 18,
    color: 'white',
  },
})