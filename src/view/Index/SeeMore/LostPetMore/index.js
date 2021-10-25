import React, { useState,useContext,useRef } from 'react';
import { Image,View,Dimensions,Text,TouchableOpacity, TextInput,Alert } from 'react-native';
import styles from "./styles";
import { ScrollView } from 'react-native';
import AtributesEvents from '../../../../components/AtributesEvents';
import Carousel from 'react-native-banner-carousel';
import { UserContext } from '../../../../context/UserContext';
import Api from '../../../Apis/Map/Api';
import HeaderDetailsEvent from '../../../../components/HeaderDetailsEvent';

function LostPetMore({route,navigation}) {

   const { StateInsertList,dataEvent,images,status,state } = route.params;
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
                { text: "OK", onPress: () => handleclickevent2() }
                
              ]
          );

    
     }else{  handleclickevent2(); }

    }

    const Resolveevent = async () =>{

          let res= await Api.registerEventResolved(person.id,dataEvent.user_id,dataEvent.id_event,dataEvent.status,dataEvent.type);

     
          if( res.status ){
              
              Alert.alert(
                  "O evento foi selecionado para resolução",
                  "O dono do evento será notificado em breve..Aguarde! ",
                  [
                  { text: "OK", onPress: () => navigation.goBack() }
                  ]
              );

              StateInsertList();
              
          }else{
              alert("Não foi possível solicitar a solução do evento.");
          }

   }
      


  const handleclickevent2 = () => {
      
      Alert.alert(
          "Deseja resolver o evento de animal perdido ?",
          "",
          [
            {
              text: "Cancelar",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => Resolveevent() }
          ]
      );

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
                     <ScrollView horizontal={true} style={styles.atributes}>
                           <AtributesEvents title="Nome" field={dataEvent.name} />
                           <AtributesEvents title="Sexo" field={dataEvent.sex} />
                           <AtributesEvents title="Personalidade" field={dataEvent.personality} />
                           
                     </ScrollView>
                     <ScrollView >
                        <View style={styles.info}>
                           <View style={styles.containerUser}>
                              <Image source={ require("../../../../assets/avatar.jpg") }
                              style={styles.imgUser} />
                              <View style={styles.containerUserInfo}>
                                 <Text style={{fontSize:20}}>{dataEvent.username}</Text>
                                 <Text style={{color:'grey'}}>Contato: {dataEvent.phone}</Text>
                              </View>
                             
                           </View>
                           <Text style={{ paddingBottom:10,left:10}}>Informações:</Text>
                           <TextInput
                              style={ styles.textArea }
                              underlineColorAndroid="transparent"
                              placeholder={dataEvent.information}
                              placeholderTextColor="grey"
                              numberOfLines={10}
                              editable={false}
                              multiline={true}
                           />
                           <View style={styles.status}>
                              <Text >Status:</Text>
                              <Text style={{paddingLeft:10,fontWeight:'bold'}}>{dataEvent.status}</Text>
                           </View>
                           
                           <View style={styles.containerResolve}>
                              <TouchableOpacity style={styles.btnResolve}  disabled={state} onPress={handleclickevent}>
                                 <Text style={{fontWeight:'bold',color:'#FFF'}}>Resolver</Text>
                              </TouchableOpacity>
                           </View>
                        </View>
                        
                     </ScrollView>   

                  </View>
              </View>
                   
    );
}
export default LostPetMore;