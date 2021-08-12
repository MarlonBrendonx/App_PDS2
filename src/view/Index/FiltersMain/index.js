import React, { useState, useEffect,useRef } from 'react';
import { Image,View,Button,Text,TextInput,TouchableOpacity, Touchable } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import styles from "./styles";
import { FontAwesome } from '@expo/vector-icons'; 
import TextTicker from 'react-native-text-ticker'
import { RadioButton } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import Modal from 'react-native-modal';

function Filters({ isVisible, onClose }) {
    const [checked, setChecked] = React.useState('first');

    const [rangekm, setRange] = React.useState('100');

    return(
      <>
      <Modal isVisible={isVisible}>
        <View style={{flex: 1,backgroundColor:'white',borderRadius:30}}> 

            <View style={ styles.header } >
                <TouchableOpacity onPress={onClose}>
                    <Text style={{ color:'red', fontWeight:'bold' }}>Cancelar</Text>
                </TouchableOpacity>

                <Text style={ styles.headerTitle }>Filtros</Text>

                <TouchableOpacity>
                    <Text style={{ color:'#B33BF6',fontWeight:'bold' }}>Salvar</Text>
                </TouchableOpacity>
            </View>

            <View style={ styles.bodyModal }>
                <Text style={ styles.txtLocation }>Localização</Text>
                <TouchableOpacity style={ styles.btnLocation }>
                    <FontAwesome name="location-arrow" size={20} color="black" style={{ paddingLeft:10 }}/>
                    <Text style={{ fontWeight:'bold',paddingLeft:10 }}>Localização atual:</Text>
                    <TextTicker
                    style={{ width:100,paddingLeft:5}}
                    duration={3000}
                    loop
                    bounce
                    repeatSpacer={50}
                    marqueeDelay={1000}
                    >
                    Monte Carmelo (MG)
                    </TextTicker>
                </TouchableOpacity>
                
                <View style={ styles.bodyOptions }>
                    <Text> Mostre-me </Text>
                    <View style={ styles.bodyInternaloptions }>
                        <View style={ styles.RadioButtons }>
                            <RadioButton
                                value="first"
                                status={ checked === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('first')}
                                color="#B33BF6"
                                
                            />
                            <Text>Casinha Comunitária</Text>
                        </View>
                        <View style={ styles.RadioButtons }>
                            <RadioButton
                                value="first"
                                status={ checked === 'second' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('second')}
                                color="#B33BF6"
                            />
                            <Text>Animal Perdido </Text>
                        </View>
                        <View style={ styles.RadioButtons }>
                            <RadioButton
                                value="first"
                                status={ checked === 'third' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('third')}
                                color="#B33BF6"
                            />
                            <Text>Denúncias</Text>
                        </View>
                        <View style={ styles.RadioButtons }>
                            <RadioButton
                                value="first"
                                status={ checked === 'fouth' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('fouth')}
                                color="#B33BF6"
                            />
                            <Text>Todos</Text>
                        </View>
                    </View>
                </View>
                <View style={ styles.bodySlider }>
                    <View style={ styles.txtSlider }>
                        <Text style={{ left:5 }}>Faixa em km</Text>
                        <Text style={{ right:5 }}> 0-{rangekm}km</Text>
                    </View>
                    <View style={ styles.sliderKm }>
                        <Slider
                            style={ styles.sliderRange }
                            onValueChange={val => setRange(parseFloat(val).toFixed(2))}
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor="#B33BF6"
                            maximumTrackTintColor="#000000"
                            thumbTintColor="#B33BF6"
                        />
                    </View>
                    
                </View>
            </View>
            </View>
        </Modal>
     </>
    );
}
export default Filters;