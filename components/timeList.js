import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from 'react-native';

export default function TimeList({max, unity, ...otherProps}){
  const array = Array.from({length: parseInt(max)}, (_, i) => i);

  return(
    <Picker style={styles.pickerContainer} dropdownIconColor={"white"} { ...otherProps}>
      {
        array.map((i) =>  <Picker.Item label={i + " " + unity} value={i} key={i} color='black'/>)
      }
    </Picker>
  )
}

const styles = StyleSheet.create({
    pickerContainer: {
      flex: 1,
      backgroundColor: "inherit",
      borderColor: "#387E7F",
      color: "white",
    },
})