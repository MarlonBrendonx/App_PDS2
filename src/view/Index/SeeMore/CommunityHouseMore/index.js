import React, { useState, useEffect,useRef } from 'react';
import { Image,View,ImageBackground,Text,TouchableOpacity, TextInput ,Dimensions} from 'react-native';
import styles from "./styles";
import { ScrollView } from 'react-native';
import Carousel from 'react-native-banner-carousel';


function CommunityHouse_More({route,navigation}) {

   const { information,images } = route.params;

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

                    <View style={styles.containerInfo}>
                        <Text>Informações</Text>
                        <ScrollView vertical={true} style={ styles.info } >

                            <Text style={{color:'grey'}}>
                                {information}
                            </Text>

                        </ScrollView>
                     </View>

                  </View>
              </View>

    );
}
export default CommunityHouse_More;
