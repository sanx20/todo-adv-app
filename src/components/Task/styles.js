import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: '#f9c7ee',
        margin: 10,
        padding: 10,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#696cbc'
    },
    headingText: {
        paddingTop: 2,
        fontSize: 18,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },

    modalBox: {
        backgroundColor: '#fffae3',
        padding: 30,
        borderRadius: 10,
        borderWidth: 1,
        width: '80%',
        borderColor: '#696cbc',
        elevation: 5,
        shadowOpacity: 0.5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        position: 'relative', // For absolute positioning of the close button
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        backgroundColor: 'red',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});