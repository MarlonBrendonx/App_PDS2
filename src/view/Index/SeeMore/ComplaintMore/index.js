import React, { useState, useEffect,useRef,useContext } from 'react';
import { Image,View,Alert,Text,TouchableOpacity, Dimensions } from 'react-native';
import styles from "./styles";
import { ScrollView } from 'react-native';
import Carousel from 'react-native-banner-carousel';
import Api from '../../../Apis/Map/Api';
import { UserContext } from '../../../../context/UserContext';

function Complaint_More({route,navigation}) {

    const { id_event,status,information,images } = route.params;
    const {state:person} =useContext(UserContext);

    const BannerWidth = Dimensions.get('window').width;
    const BannerHeight = 260;

    const renderImage = (images,index) =>{
    
        return (
            <View key={index}>
                <Image source={{ uri: `data:image/jpg;base64,${images}` }} style={styles.img}  />
            </View>
        );
        
    }

    const handleresolveevent = async () =>{

        let res= await Api.registerEventResolved(person.id,id_event);
       
        if( res.status ){
            
            Alert.alert(
                "O evento foi selecionado para resolução",
                "O dono do evento será notificado em breve..Aguarde ",
                [
                  { text: "OK", onPress: () => console.log("Ok Pressed") }
                ]
            );
            
        }else{

            alert("Error");
        }

    }


    const handleclickevent = () => {
        
        Alert.alert(
            "Deseja resolver a denúncia ?",
            "",
            [
              {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => handleresolveevent() }
            ]
        );

    };



    return(
      
            <View style={ styles.container }>
                  <View style={styles.containerImage}>
                    <Carousel
                        autoplay
                        autoplayTimeout={5000}
                        loop
                        index={0}
                        pageSize={BannerWidth}
                        showsPageIndicator={true}
                        pageIndicatorStyle={styles.indicator}
                        activePageIndicatorStyle={styles.activeIndicator}
                        >
                        {images.map((image, index) => renderImage(image, index))}
                    </Carousel>

                  </View>
                  <View style={styles.body}>

                    <View style={styles.containerInfo}>
                        <Text>Informações</Text> 
                        <ScrollView vertical={true} style={ styles.info } >
                            
                            <Text style={{color:'grey', height:170,width:'100%'}}>
                                {information}
                            </Text>

                        </ScrollView>
                        <View style={{ flexDirection:'row' }}>
                            <Text>Status: </Text>
                            <Text style={{ fontWeight:'bold' }}>{status}</Text>
                        </View>
                     </View>
                     <View style={styles.containerBtn}>
                        <TouchableOpacity style={styles.btnResolve} onPress={handleclickevent}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>Resolver</Text>
                        </TouchableOpacity>
                     </View>   
                  </View>

              </View>
                   
    );
}
export default Complaint_More;