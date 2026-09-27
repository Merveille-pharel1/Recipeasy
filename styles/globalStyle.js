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

    rowDefinition: {
        display: "flex",
        flexDirection: "row"
    },

    listContainer: {
        width: 320,
        maxWidth: 400,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        padding: 16
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
        letterSpacing: 1.5,
        textAlign: "center"   
    },

    actionButtons: {
        gap: 40
    }

});

export default styles;
