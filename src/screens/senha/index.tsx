import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import { styles } from "../clonetwt/styles";
import Twitter from "../../assets/images/download.png"
import Sair from "../../assets/images/sair.png"

export const Senha = () => {
    return (
        <View style={styles.container}>
            
            <View style= {styles.header}>
            
                <Image source={Sair} style={styles.image}/>
            
                <Image source={Twitter} style={styles.icon}/>

            </View>
        
            <Text style={styles.title}>Digite sua senha</Text>
        
             <TextInput style={styles.input}
             placeholder="Celular, e-mail ou nome de usuário"/>
           
           <TextInput style={styles.input}
             placeholder="Senha"/>

            <View style={styles.footer}>
            
                <TouchableOpacity>
                    <Text style={styles.senha}>Esqueceu sua senha?</Text> 
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text style={styles.avancar}>Entrar</Text>             
                </TouchableOpacity>
            </View>
      </View>         
 )
}