import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import { styles } from "../Login/styles";
import Twitter from "../../assets/images/download.png"
import Sair from "../../assets/images/sair.png"

export const Senha = ({navigation}) => {
    return (
        <View style={styles.container}>
            
            <View style= {styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Image source={Sair} style={styles.image}/>
            </TouchableOpacity>
                <Image source={Twitter} style={styles.icon}/>

            </View>
        
            <Text style={styles.title}>Digite sua senha</Text>
        
             <TextInput style={styles.input}
             value='letxlet'
             placeholder="Celular, e-mail ou nome de usuário"/>
           
           <TextInput style={styles.input}
             placeholder="Senha"/>

            <View style={styles.footer}>
            
                <TouchableOpacity>
                    <Text style={styles.senha}>Esqueceu sua senha?</Text> 
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.avancar}>Entrar</Text>             
                </TouchableOpacity>
            </View>
      </View>         
 )
}