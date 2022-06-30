import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Twitter from "../../assets/images/download.png"
import Sair from "../../assets/images/sair.png"

export const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>

                
                    <Image source={Sair} style={styles.image} />
               

                <Image source={Twitter} style={styles.icon} />

            </View>

            <Text style={styles.title}>Para começar, informe telefone, email ou @nomedeusuario </Text>

            <TextInput style={styles.input}
                placeholder="Celular, e-mail ou nome de usuário" />

            <View style={styles.footer}>

                <TouchableOpacity>
                    <Text style={styles.senha}>Esqueceu sua senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Senha')}>
                    <Text style={styles.avancar}>Avançar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}