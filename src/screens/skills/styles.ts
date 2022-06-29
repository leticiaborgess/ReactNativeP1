import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 30
    },
    title: {
        color: '#909',
        fontWeight : 'bold',
        fontSize: 35,
        paddingLeft: 40
    },
    image: {
        width: 50,
        height: 50,
        borderRadius:200
    },
    buttonSkill: {
        backgroundColor: '#1f7e93',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical : 5,
        flexDirection : 'row'
    },
    textSkill: {
        marginLeft: 5,
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold'
    }
})