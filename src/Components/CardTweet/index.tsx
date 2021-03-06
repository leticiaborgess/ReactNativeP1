import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../CardTweet/styles";
import Perfil from "../../assets/images/perfil.jpg"
import Coment from "../../assets/images/coment.png"
import Rt from "../../assets/images/rt.png"
import Like from "../../assets/images/like.png"
import Share from "../../assets/images/icons/share.png"
import Ponto from "../../assets/images/ponto.png"
import Like2 from "../../assets/images/like2.png"
import moment from "moment";


export const CardTweet = () => {

    const [style, setStyle] = useState<boolean>(true);
    const [like, setLike] = useState<boolean>(true);

    function mudaCor() {
        if (style === false) {
            setStyle(true);
            setLike(true);
        } else {
            setStyle(false);
            setLike(false)
        }
    }

    return (

        <View style={styles.card}>

            <View>
                <Image style={styles.img} source={Perfil} />
            </View>

            <View style={styles.header}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.nome}>Letícia</Text>

                    <Text style={styles.username}>@letech  •  {moment.utc().startOf('hours').fromNow()}</Text>

                    <Image source={Ponto} style={styles.ponto} />

                </View>


                <Text style={styles.texto}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eius quibusdam perferendis saepe delectus ipsa rerum fugit magni doloribus, pariatur, laborum inventore reprehenderit dolore tenetur perspiciatis! Architecto illo exercitationem praesentium.</Text>

                <View style={styles.navbar}>
                    <TouchableOpacity><Image source={Coment} style={styles.nav} /></TouchableOpacity>
                    <TouchableOpacity><Image source={Rt} style={styles.nav} /></TouchableOpacity>
                    
                        <TouchableOpacity onPress={mudaCor} >
                            <Image source={style ? Like : Like2} style={styles.nav} />   
                        </TouchableOpacity>
                    
                    <TouchableOpacity><Image source={Share} style={styles.nav} /></TouchableOpacity>
                </View>
            </View>

        </View>

    )
}