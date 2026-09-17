import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#387E7F',
    },

    form: {
        width: '90%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8%"
    },

    link:{
        textAlign: "center",
        color: "blue",
    },

    radio: {
        marginBottom: 20,
        gap: 15,
    },

    durationContainer: {
        alignItems: "center",
        marginVertical: 20,
        gap: 10,
        width: "88%",
        height: "5%",
    
    },

    row_direction: {
        display: "flex",
        flexDirection: "row"
    },

});

export default styles;
