import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: '#fffae3',
        padding: 10,
        paddingBottom: 30,
        flex: 1
    },

    inputStyle: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#f9c7ee',
        padding: 10,
    },


    switchStyle: {
        flexDirection: 'row'
    },

    basicTextStyle: {
        paddingTop: 5,
        paddingRight: 10,
        color: '#696cbc',
        fontSize: 16,

    },

    errorStyle: {
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 2,
        padding: 10,
    },

    errorTextStyle: {
        color: 'red',
        fontSize: 14,
    },

    boldText: {
        fontWeight: 'bold'
    }
});
