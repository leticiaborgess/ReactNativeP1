import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
        container: {
            paddingTop: 40,
            flex: 1
          
        },
        image: {
            width : 25,
            height: 25,
            borderRadius: 200,
            marginLeft: 10     
            
        },
        
        icon: {
            alignItems: 'center',
            width : 25,
            height: 25,
            marginLeft: '55%',
            
        },
        icone:{
            tintColor: '#00baf3',
            alignItems: 'center',
            width : 25,
            height: 25,
            marginLeft: '38%',
        },
        
        title: {
            fontSize: 25,
            padding: 5,
            paddingTop: 25,
            paddingLeft: 15,
            fontWeight: 'bold'
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            flexDirection : 'row',
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
            paddingBottom: 15
            
            
        
        },
        input: {
            margin: 15,
            height: 58,
            fontSize: 18,
            paddingLeft: 15,           
            borderStyle: 'solid',
            borderWidth: 1.5,
            borderRadius : 5,
            borderColor: 'lightgray',
        },
        footer: {
            marginTop: 1,
            // borderTopWidth: 1,
            // borderTopColor: 'lightgray',
            flex: 1,
            justifyContent: 'space-between',
            marginBottom: 15,
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection : 'row',
            marginLeft: '77%'
        },
        
        tweet: {
            width: 65,
            height: 65,
            marginBottom: 15,
           
            
        },
        navbar: {
            // flex: 3,
            display: 'flex',
            flexDirection: 'row',
            // alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginLeft: 30,
            marginRight: 30,
            marginBottom: 13
           
        },
        nav:{
            width: 25,
            height: 25,
        }

})