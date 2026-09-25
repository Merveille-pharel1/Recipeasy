import { View, Text } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import InputField from '../components/inputField';
import MyButton from '../components/myButton';
import TimeList from '../components/timeList';
import styles from '../styles/globalStyle';

export default function FormScreen({navigation}){
  const options = [
    {
        id: '1',
        label: 'Breakfast',
        value: '1',
        color: "white"
    },
    {
        id: '2',
        label: 'Lunch',
        value: '2',
        color: "white"
    },
    {
        id: '3',
        label: 'Diner',
        value: '3',
        color: "white"
    }
  ];

  return (
    <View style={styles.container}>
      <RadioGroup radioButtons={ options } layout="row" containerStyle={styles.radio} labelStyle={{color: "white"}}/>
      
      <InputField label="Name"/>

      <View style={[styles.row_direction, styles.durationContainer]}>
        <View style={[styles.row_direction, {gap: 10, flex: 1, alignItems: "center"}]}>
          <Text style={{color: 'white'}}>Duration</Text>
          <TimeList max="24" unity="h"/>
        </View>
        <View style={[styles.row_direction, {gap: 10, flex: 1,alignItems: "center"}]}>
          <Text style={{color: 'white'}}>:</Text>
          <TimeList max="60" unity="mins"/>
        </View>
      </View>

      <InputField label="Description" style={{height: 480, maxHeight: 480, marginBottom: 25, verticalAlign:'top'}}/>
      <TouchableHighlight
        onPress = {() => navigation.goBack()}
      >
        <MyButton width="60" label="Save"/>
      </TouchableHighlight>
    </View>
  );
}