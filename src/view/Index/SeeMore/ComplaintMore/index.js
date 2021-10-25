import React, { useState, useEffect,useRef,useContext } from 'react';
import { Image,View,Alert,Text,TouchableOpacity, Dimensions } from 'react-native';
import styles from "./styles";
import { ScrollView } from 'react-native';
import Carousel from 'react-native-banner-carousel';
import Api from '../../../Apis/Map/Api';
import { UserContext } from '../../../../context/UserContext';
import HeaderDetailsEvent from '../../../../components/HeaderDetailsEvent';

function Complaint_More({route,navigation}) {

    const { StateInsertList,id_event,user_id_event,status,type,information,images,state} = route.params;
    const {state:person} =useContext(UserContext);

    const BannerWidth = Dimensions.get('window').width;
    const BannerHeight = 260;

    const renderImage = (images,index) =>{
    
        return (
            <View key={index}>
                <Image source={ images ?  { uri: `data:image/jpg;base64,${images}` } 
                : require("../../../../assets/avatar.jpg") } style={styles.img}  />
            </View>
        );
        
    }

    const handleclickevent = async () =>{

        if( status === "Em andamento" ){

         Alert.alert(
            "Opps!",
            "O evento já foi solicitado para solução por outro usuário, ainda deseja prosseguir ?",
            [
              {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => handleresolveEvent() }
              
            ]
         );

        }else{ handleresolveEvent(); }
        
    }
    const handleresolveEvent = async () =>{    

        Alert.alert(
            "Deseja resolver a denúncia ?",
            "",
            [
              {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => ResolveEvent() }
            ]
        );

    }

    const ResolveEvent = async () => {

            let res= await Api.registerEventResolved(person.id,user_id_event,id_event,status,type);
        
            if( res.status ){
                
                Alert.alert(
                    "O evento foi selecionado para resolução",
                    "O dono do evento será notificado em breve..Aguarde ",
                    [
                    { text: "OK", onPress: () => navigation.goBack() }
                    ]
                );

                StateInsertList();
                
            }else{

                alert("Não foi possível solicitar a solução do evento.");
            }

    }

             
    return(
      
            <View style={ styles.container }>
                  <HeaderDetailsEvent navigation={navigation} />
                  <View style={styles.containerImage}>
                    <Carousel
                        useNativeDriver={true}
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
                        <TouchableOpacity style={styles.btnResolve} disabled={state} onPress={handleclickevent}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>Resolver</Text>
                        </TouchableOpacity>
                     </View>   
                  </View>

              </View>
                   
    );
}
export default Complaint_More;