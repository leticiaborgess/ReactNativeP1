import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles"
import SkillCicrcle from "../../assets/images/bubbline.jpg"

export const Skills = () =>  {
  return (
  <View style={styles.container}>
    <Text style={styles.textSkill}>
        Olá mundo!
    </Text>

    <TouchableOpacity style={styles.buttonSkill}>
       
       <Image source={SkillCicrcle} style={styles.image}/>
       
             <Text style={styles.textSkill}>
                Bubbline 💕
            </Text>
       
    </TouchableOpacity>
  </View>
)}
export default Skills