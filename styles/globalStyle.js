import {StyleSheet} from 'react-native'

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#387E7F',
    },

    form: {
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },

    rowDefinition: {
        display: "flex",
        flexDirection: "row"
    },

});

export default globalStyles;
