import React, { useState, useEffect,useRef } from 'react';
import  MapView,{ Marker,Callout }  from 'react-native-maps';
import { Image,View,RefreshControl,Text,TextInput,TouchableOpacity, Touchable } from 'react-native';
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
import {useNetInfo} from "@react-native-community/netinfo";


function MapScreen({ navigation,route }) {

    const [currentRegion,setCurrentRegion] = useState(null); 
    const [coords,setCoords] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalNotificationVisible, setModalNotificationVisible] = useState(false);
    const [isModalEventsVisible,setModalEventsVisible] = useState(false);
    const [coordsMarker,setCoordsMarker] = useState([]);
    const [listevents,setListEvents] = useState([]);
    const [loading,setLoading] = useState(false);
    const [state,setState] = useState(false);
    const [stateInsertList,setStateInsertList] = useState(false);
    const [stateOptions,setstateOptions] = useState(false);
    const [option,setOptions]=useState("");
    const [qtdMessage,setqtdMessage]=useState(0);
    const [grantedPos, setGranted]=useState(false);
    const [search,setSearch]=useState(null);

    const refresh= route.params;

    const netInfo = useNetInfo();

    if( netInfo.isConnected == false ){
            navigation.navigate("NoInternet");
    }

    const setStateInsert = () =>{
        setStateInsertList(true);
      
    }

    const setStateOptions = (option) =>{
        setstateOptions(true);
        setOptions(option);
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleModalNotification = () => {
        setModalNotificationVisible(!isModalNotificationVisible);
        setLoading(false);
    };

    const toggleModalEvents = (event) => {
        
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
                    
                    const { latitude, longitude  } = coords;
                    setCurrentRegion({

                        latitude,
                        longitude,
                        latitudeDelta:0.04,
                        longitudeDelta:0.04,

                    })


                }

  
    }

    async function loadInitialPosition(){

        try{
            const { granted } = await requestForegroundPermissionsAsync();

            if( granted ){

                setGranted(true);

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
                
            }else{
                
                navigation.navigate("SignIn");

            }
        }catch( ex ){

            navigation.navigate("NoLocation");
           
        }
    }
    useEffect( ()=>{

        loadInitialPosition();
        getEvents();
        

    }, [,refresh]);

    useEffect( ()=>{

        if( stateOptions ){

            if( option == 3 ){

                getEvents();

            }else{

                getEventsOptions();
                setstateOptions(false);

            }
        }

    }, [stateOptions]);
    
    useEffect( ()=>{
        
        if( stateInsertList ){
            getEvents();
            setStateInsertList(false);
        }


    }, [stateInsertList]);
   

    const getEvents = async ()=>{
        

        setLoading(true);
        setListEvents([]);

        let res= await Api.getEvents();
       
        if( res.status ){
            
            setListEvents(res.msg.data);
            setqtdMessage(res.msg.qtd);
            
        }else{

            alert("Erro ao buscar os eventos.");
        }

        setLoading(false);
        setState(true);
    }

    const getEventsOptions = async ()=>{
        
        setLoading(true);
        setListEvents([]);

        const typeOption="Map";

        let res= await Api.getEventsOptions(option,typeOption);
       
        if( res.status ){
            
            setListEvents(res.msg);
            
        }else{

            alert("Erro ao buscar os eventos.");
        }

        setLoading(false);
        setState(true);
     
    }
    const searchEvents = async ()=>{
        

        if( search != null && search != " " ){

            setLoading(true);
            

            let res= await Api.searchEvent(search);
            
            if( res.status && res.msg.count >=1 ){
                
                setListEvents([]);
                setListEvents(res.msg.data);
                
            }else if( res.status && res.msg.count == 0 ){

                alert("[*] Nenhum evento foi econtrado");
                
            }else{

                alert("Erro ao buscar os eventos.");
            }

            setLoading(false);
            setState(true);
        }
     
    }


    return (
        <>
        
        <ModalEvents StateInsertList={setStateInsert} isVisible={isModalEventsVisible}  onClose={()=> toggleModalEvents()} navigation={navigation}  coordinate={coordsMarker === null ? null: coordsMarker} />
        <Notification isVisible={isModalNotificationVisible} onClose={()=> toggleModalNotification()} listevents={listevents}  navigation={navigation} />       
        <MapView initialRegion={currentRegion} style={ styles.map } 
            onPress={toggleModalEvents} 
            showsMyLocationButton={false} 
            showsUserLocation={true}

        >
        {state && listevents.map((item, k)=>{
            
           if( item.type === 0 )
                return ( <CalloutMap  StateInsertList={setStateInsert}   key={k}  data={item}  color="#FAAB64" navigation={navigation}  /> );
            else if( item.type === 1 )
                return ( <CalloutMap_2  StateInsertList={setStateInsert} key={k}  data={item}  color="#5cc5c0" navigation={navigation} /> );
            else if( item.type === 2 )
                return ( <CalloutMap_3  StateInsertList={setStateInsert} key={k}  data={item} color="red" navigation={navigation}      /> );
        })}   
        
        </MapView>
        {loading && <LoadIcon/> }
        
        <View style={styles.topSection}>
          <TouchableOpacity style={styles.btnBell} onPress={toggleModalNotification}>
            <Fontisto name="bell-alt" size={30} color="#B33BF6" />
          </TouchableOpacity>
          <Badge
            status="error"
            value={qtdMessage}
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
        	<TouchableOpacity style={styles.btnSettings} onPress={searchEvents}>
          	    <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
        	</TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Buscar"
                underlineColorAndroid="transparent"
                onChangeText={t=>setSearch(t)}
            />
            <TouchableOpacity style={styles.btnSettings} onPress={toggleModal} >
                <Icon style={styles.searchIcon2} name="sliders" size={20} color="#000"/>
            </TouchableOpacity>
        </View>
     
        <Filters StateOptions={setStateOptions} isVisible={isModalVisible} onClose={()=> toggleModal()}/>
       
        </View>
    </>
    );
  }

export default MapScreen;