import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
        container: {
            paddingTop: 40,
            flex: 1
          
        },
        title: {
            fontSize: 25,
            padding: 5,
            paddingTop: 25,
            paddingLeft: 15,
            fontWeight: 'bold'
        },
        image: {
            width : 25,
            height: 25,
            marginLeft: 15
        },

        icon: {
            alignItems: 'center',
            width : 25,
            height: 25,
            marginLeft: '37%'
        },
        
        header: {
            display: 'flex',
            alignItems: 'center',
            flexDirection : 'row'
        
        },
        input: {
            margin: 15,
            borderStyle: 'solid',
            borderWidth: 1.5,
            borderRadius : 5,
            borderColor: 'lightgray',
            height: 58,
            fontSize: 18,
            paddingLeft: 15,           
        },
        footer: {
            marginTop:200,
            // borderTopWidth: 1,
            // borderTopColor: 'lightgray',
            flex: 1,
            justifyContent: 'space-between',
            marginBottom: 30,
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection : 'row'
        },
        senha: {
            // flex: 0.6,
            marginRight: 90,
            marginTop: 90,
            marginLeft: 10,
            borderWidth: 1,
            borderRadius:50,
            borderColor: 'lightgray',
            padding: 10,
            fontWeight: 'bold',
            justifyContent: 'flex-end',
            display: 'flex',
            alignItems: 'flex-end',
            textAlign:'center',
    
        },
        avancar: {
            // flex: 0.6,
            marginRight: 10,
            marginTop: 90,
            borderWidth: 1,
            borderRadius:50,
            borderColor: 'lightgray',
            padding: 10,
            fontWeight: 'bold',
            justifyContent: 'flex-end',
            display: 'flex',
            // alignItems: 'flex-end',
            textAlign:'center',
            backgroundColor: 'black',
            color: 'white',
        }

    
})