import React, { useState, useEffect,useRef } from 'react';
import { Image,View,ScrollView,TouchableOpacity, TextInput ,SafeAreaView} from 'react-native';
import { Picker } from '@react-native-community/picker';
import styles from "./styles";
import Header from '../../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Api from "../../Apis/Map/Api";
import SwipeList_LostPet from "../../../components/SwipeListEvents/LostPet/swipe_value_based_ui";
import SwipeList_CommunityHouse from "../../../components/SwipeListEvents/CommunityHouse/swipe_value_based_ui";
import SwipeList_Complaint from "../../../components/SwipeListEvents/Complaint/swipe_value_based_ui";
import Loading from '../../../components/LoadingEvents';
import Filters from "../../../components/FilterMyEvents";


function MyEvents({route,navigation}) {

    const [listevents,setListEvents] = useState([]);
    const [loading,setLoading] = useState(false);
    const [state,setState] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [stateOptions,setstateOptions] = useState(false);
    const [option,setOptions]=useState("");
    const [search,setSearch]=useState("");
    
    
    const refresh=route.params;

    const toggleRefresh= () => {
        setRefresh(!refresh);
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const setStateOptions = (option) =>{
        setstateOptions(true);
        setOptions(option);
    }


    const getEvents = async ()=>{
        
        setLoading(true);
        setListEvents([]);

        let res= await Api.getEventsById();
       
        if( res.status ){
            
            setListEvents(res.msg.data);
            
        }else{

            alert("Erro ao buscar os eventos.");
        }

        setLoading(false);
        setState(true);
    }

    const getEventsOptions = async ()=>{
        
        setLoading(true);
        setListEvents([]);

        const typeOption="User";

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
        
            if( res.status ){
                
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

 
    useEffect( ()=>{
        
        getEvents();

    },[,refresh]);
    
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
   

    
    

    return(
        
        <View style={ styles.container }>
            <Header navigation={navigation} title="Meus eventos" />    
            <View style={ styles.containerBody }>
            <View style={styles.form}>
            <View style={styles.searchSection}>    
                <TouchableOpacity style={styles.btnSettings} onPress={searchEvents} >
                    <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Buscar"
                    underlineColorAndroid="transparent"
                    onChangeText={t=>setSearch(t)}
                />
                <TouchableOpacity style={styles.btnSettings}  onPress={toggleModal}  >
                    <Icon style={styles.searchIcon2} name="sliders" size={20} color="#000"/>
                </TouchableOpacity>
            </View>
            </View>
            {loading && <Loading/> }
            <View style={ styles.list }>
               <ScrollView  vertical={true} >
                { listevents.map((item, k)=>{
                    
                    if( item.type === 0 ){
                        return ( 
                            <SwipeList_LostPet 
                                key={k} 
                                data={item} 
                                color="#faab64" 
                                navigation={navigation}  
                        /> );
                    }else if( item.type === 1 ){
                        return ( 
                            <SwipeList_CommunityHouse 
                                key={k}
                                data={item}
                                color="#5cc5c0"
                                navigation={navigation} 
                        /> );
                    }else if( item.type === 2){ 
                        return ( 
                            <SwipeList_Complaint
                                key={k}
                                data={item}
                                color="#ff545a"
                                navigation={navigation}
                                
                            /> 
                        );
                    }
            

                })} 
               </ScrollView>
            </View>    
            </View>

            <Filters StateOptions={setStateOptions} isVisible={isModalVisible} onClose={()=> toggleModal()}/>
        </View>
              
    );
}
export default MyEvents;