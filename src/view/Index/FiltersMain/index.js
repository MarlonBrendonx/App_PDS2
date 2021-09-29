import React, { useState, useEffect,useRef } from 'react';
import { Image,View,Button,Text,TextInput,TouchableOpacity, Touchable } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import styles from "./styles";
import { FontAwesome } from '@expo/vector-icons'; 
import TextTicker from 'react-native-text-ticker'
import { RadioButton } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import Modal from 'react-native-modal';

function Filters(props) {

    const [checked, setChecked] = React.useState(3);
    const [rangekm, setRange] = React.useState('100');
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");

    const getPosition = () =>{

        fetch('http://ip-api.com/json')
            .then((response) => response.json())
            .then((response) => {
                setCountry(response.city);
                setState(response.region);
            })
            .catch((error) => {
                console.error(error);
            })
    
    };

    const saveOptions = () =>{
        alert("Configurações salvas !");
        props.StateOptions(checked);
    }

    useEffect( ()=>{

       
        getPosition();

    }, []);

    return(
      <>
      <Modal isVisible={props.isVisible}>
        <View style={{flex: 1,backgroundColor:'white',borderRadius:30}}> 

            <View style={ styles.header } >
                <TouchableOpacity onPress={props.onClose}>
                    <Text style={{ color:'red', fontWeight:'bold' }}>Cancelar</Text>
                </TouchableOpacity>

                <Text style={ styles.headerTitle }>Filtros</Text>

                <TouchableOpacity onPress={()=>saveOptions()}>
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
                    {country} - {state}
                    </TextTicker>
                </TouchableOpacity>
                
                <View style={ styles.bodyOptions }>
                    <Text> Mostre-me </Text>
                    <View style={ styles.bodyInternaloptions }>
                        <View style={ styles.RadioButtons }>
                            <RadioButton
                                value="first"
                                status={ checked == 1 ? 'checked' : 'unchecked' }
                                onPress={() => setChecked(1)}
                                color="#B33BF6"
                                
                            />
                            <Text>Casinha Comunitária</Text>
                        </View>
                        <View style={ styles.RadioButtons }>
                            <RadioButton
                                value="first"
                                status={ checked === 0 ? 'checked' : 'unchecked' }
                                onPress={() => setChecked(0)}
                                color="#B33BF6"
                            />
                            <Text>Animal Perdido </Text>
                        </View>
                        <View style={ styles.RadioButtons }>
                            <RadioButton
                                value="first"
                                status={ checked === 2 ? 'checked' : 'unchecked' }
                                onPress={() => setChecked(2)}
                                color="#B33BF6"
                            />
                            <Text>Denúncias</Text>
                        </View>
                        <View style={ styles.RadioButtons }>
                            <RadioButton
                                value="first"
                                status={ checked === 3 ? 'checked' : 'unchecked' }
                                onPress={() => setChecked(3)}
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