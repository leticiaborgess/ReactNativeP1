import React, { useState } from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../Home/styles";
import Twitter from "../../assets/images/download.png"
import Perfil from "../../assets/images/perfil.jpg"
import Coment from "../../assets/images/coment.png"
import Rt from "../../assets/images/rt.png"
import Like from "../../assets/images/like.png"
import Share from "../../assets/images/share.png"
import Timeline from "../../assets/images/timeline.png"
import Newtweet from "../../assets/images/newtweet.png"
import Main from "../../assets/images/main.png"
import Search from "../../assets/images/search.png"
import Notif from "../../assets/images/notif.png"
import Message from "../../assets/images/message.png"
import { CardTweet } from "../../Components/CardTweet";

export const Home = () => {

    const [tweet, setTweet] = useState<string>('');

    return (
        <View style={styles.container}>
            
            <View style= {styles.header}>
            
            <TouchableOpacity><Image source={Perfil} style={styles.image}/></TouchableOpacity> 
            
            <Image source={Twitter} style={styles.icone}/>

            <TouchableOpacity><Image source={Timeline} style={styles.icon}/></TouchableOpacity>
            </View>
        
          <ScrollView>
                <CardTweet/>
                <CardTweet/>
                <CardTweet/>
                <CardTweet/>
                <CardTweet/>
                <CardTweet/>
                  
        </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity>
                <Image source={Newtweet} style={styles.tweet}/>     
                </TouchableOpacity>
            </View>
      
      
            <View>
               
                        <View style= {styles.navbar}>
                        <TouchableOpacity><Image source={Main} style={styles.nav}/></TouchableOpacity>
                        <TouchableOpacity><Image source={Search} style={styles.nav}/></TouchableOpacity>
                        <TouchableOpacity><Image source={Notif} style={styles.nav}/></TouchableOpacity>
                        <TouchableOpacity><Image source={Message} style={styles.nav}/></TouchableOpacity>
                    </View>
                
            </View> 
     </View>      
 )
}