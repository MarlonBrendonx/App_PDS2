import React, { useState, useEffect,useRef } from 'react';
import { Image,View,Dimensions,Text,TouchableOpacity, TextInput } from 'react-native';
import styles from "./styles";
import { ScrollView } from 'react-native';
import HeaderDetailsEvent from "../../../../components/HeaderDetailsEvent"; 
import AtributesEvents from '../../../../components/AtributesEvents';
import Carousel from 'react-native-banner-carousel';


function LostPetMore({route,navigation}) {

   const { dataEvent,images } = route.params;

   const BannerWidth = Dimensions.get('window').width;
   const BannerHeight = 260;


   const renderImage = (images,index) =>{
   
       return (
           <View key={index}>
               <Image source={{ uri: `data:image/jpg;base64,${images}` }} style={styles.img}  />
           </View>
       );
       
   }
   
    
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
                                 <Text style={{color:'grey'}}>{dataEvent.phone}</Text>
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
                              <TouchableOpacity style={styles.btnResolve}>
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