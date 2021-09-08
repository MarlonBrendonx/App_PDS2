import React, { useState, useEffect,useRef } from 'react';
import { Alert, Plataform } from 'react-native';
import  MapView,{ Marker,Callout }  from 'react-native-maps';
import { Image,View,Button,Text,TextInput,TouchableOpacity, Touchable } from 'react-native';
import { requestPermissionsAsync,getLastKnownPositionAsync, getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import Icon from 'react-native-vector-icons/FontAwesome';
import  styles from './styles';
import { Avatar, Badge, withBadge } from 'react-native-elements'
import { Fontisto } from '@expo/vector-icons';
import Filters from "../FiltersMain";
import Notification  from "../Notifications";
import ModalEvents   from '../ModalEvents';
import LoadIcon from "../../../components/LoadIcon";
import CalloutMap from "../../../components/Callouts/CalloutLostPet";
import CalloutMap_2 from '../../../components/Callouts/CalloutCommunityHouse';
import CalloutMap_3 from '../../../components/Callouts/CalloutComplaint';
import Api  from '../../Apis/Map/Api';

function MapScreen({ navigation }) {

    const [currentRegion,setCurrentRegion] = useState(null); 
    const [coords,setCoords] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalNotificationVisible, setModalNotificationVisible] = useState(false);
    const [isModalEventsVisible,setModalEventsVisible] = useState(false);
    const [coordsMarker,setCoordsMarker] = useState([]);
    const [listevents,setListEvents] = useState([]);
    const [loading,setLoading] = useState(false);
    const [state,setState] = useState(false);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleModalNotification = () => {
        setModalNotificationVisible(!isModalNotificationVisible);
        setLoading(false);
    };

    const toggleModalEvents = (event) => {
        //console.log(event.nativeEvent.coordinate);
        //const t=event.nativeEvent.coordinate;
        //qconsole.log(t.longitude);
        if( event != null )
            setCoordsMarker(event.nativeEvent.coordinate);

       
        setModalEventsVisible(!isModalEventsVisible);
    };

 
    const handleLocationFinder = async () =>{

        const { granted } = await requestForegroundPermissionsAsync();

                if( granted ){
                    const { coords } = await getCurrentPositionAsync({
                        enableHighAccuracy: true,
                    });
                    
                    
                    setLoading(true);
                    const { latitude, longitude  } = coords;
                    setCurrentRegion({

                        latitude,
                        longitude,
                        latitudeDelta:0.04,
                        longitudeDelta:0.04,

                    })


        }

  
    }



    useEffect( ()=>{

        async function loadInitialPosition(){

            try{
                const { granted } = await requestForegroundPermissionsAsync();

                if( granted ){

                
                    setLoading(true);

                    const { coords } = await getLastKnownPositionAsync({
                        enableHighAccuracy: true,
                    });
                        
                    const { latitude, longitude  } = coords;
                    setCurrentRegion({

                        latitude,
                        longitude,
                        latitudeDelta:0.04,
                        longitudeDelta:0.04,

                    })
                     
                }
            }catch( ex ){  
                alert("Nao foi possivel pega a localização\n Ative a localização no seu dispositivo"); 
            }
        }
        
        loadInitialPosition();
        getEvents();

    }, []);
   
   

    const getEvents = async ()=>{
        
        setLoading(true);
        setListEvents([]);

        let res= await Api.getEvents();
       
        if( res.status ){
            
            setListEvents(res.msg.data);
            
        }else{

            alert("Erro ao buscar os eventos.");
        }

        setLoading(false);
        setState(true);
    }

    return (
        <>
         
        <ModalEvents isVisible={isModalEventsVisible}  onClose={()=> toggleModalEvents()} navigation={navigation}  coordinate={coordsMarker === null ? null: coordsMarker} />
        <Notification isVisible={isModalNotificationVisible} onClose={()=> toggleModalNotification()}/>
       
        <MapView initialRegion={currentRegion} style={ styles.map } 
        onPress={toggleModalEvents} showsMyLocationButton={false} showsUserLocation={true} 
        >
          
     
        {state && listevents.map((item, k)=>{
            
           if( item.type === 0 )
                return ( <CalloutMap  key={k}  data={item} color="#FAAB64" /> );
            else if( item.type === 1 )
                return ( <CalloutMap_2  key={k}  data={item} color="#5cc5c0" /> );
            else 
                return ( <CalloutMap_3  key={k}  data={item} color="red" /> );
        })}   
        
        </MapView>
        {loading && <LoadIcon/> }
        <View style={styles.topSection}>

          <TouchableOpacity style={styles.btnBell} onPress={toggleModalNotification}>
            <Fontisto name="bell-alt" size={30} color="#858585" />
          </TouchableOpacity>
          <Badge
            status="error"
            value="1"
            containerStyle={{ position: 'absolute', top: -4, right: 0 }}
          />  
                
        </View>
        
       
        <View style={styles.locationSection}>
        	<TouchableOpacity style={styles.btnMylocation}  onPress={handleLocationFinder} >
          	<Icon  name="crosshairs" size={20} color="#B33BF6"/>
        	</TouchableOpacity>
        </View>
        
        <View style={styles.form}>

        <View style={styles.searchSection}>    
        	<TouchableOpacity style={styles.btnSettings}>
          	<Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
        	</TouchableOpacity>
            
            <TextInput
                style={styles.input}
                placeholder="Buscar"
                underlineColorAndroid="transparent"
            />
            <TouchableOpacity style={styles.btnSettings} onPress={toggleModal} >
                <Icon style={styles.searchIcon2} name="sliders" size={20} color="#000"/>
            </TouchableOpacity>


        </View>
     
        <Filters isVisible={isModalVisible} onClose={()=> toggleModal()}/>
       

        </View>
    </>
    );
  }

// <Button title="Hide modal" onPress={toggleModal} />
export default MapScreen;