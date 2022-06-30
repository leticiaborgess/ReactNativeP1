import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    card: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        marginTop: 15,
        flex: 0.5,
        flexDirection: 'row',
    },
    header:{
        // flex: 1,
        flexDirection: 'column',
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 200,
        marginLeft: 15,

    },
    nome:{
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    },
    username:{
        fontSize: 15,
        marginLeft: 4,
        color: 'gray'
    },
    texto: {
        fontSize: 15,
        marginLeft: 10,
        paddingBottom: 10,
        paddingTop: 5,
        // paddingRight: 80,
        width: 270  
    },
    ponto: {
        width:15, 
        height: 15, 
        marginTop: 5, 
        tintColor: 'gray', 
        position: 'absolute', 
        marginLeft:260},
    nav:{
        width: 20,
        height: 20,
        
    },
    navbar: {
        flex: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 30,
        marginBottom: 13,
        

    },

})