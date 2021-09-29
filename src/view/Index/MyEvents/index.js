import React, { useState, useEffect,useRef } from 'react';
import { Image,View,ScrollView,TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import styles from "./styles";
import Header from '../../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Api from "../../Apis/Map/Api";
import SwipeList_LostPet from "../../../components/SwipeListEvents/LostPet/swipe_value_based_ui";
import SwipeList_CommunityHouse from "../../../components/SwipeListEvents/CommunityHouse/swipe_value_based_ui";
import SwipeList_Complaint from "../../../components/SwipeListEvents/Complaint/swipe_value_based_ui";
import Loading from '../../../components/LoadingEvents';

//{loading && <Loading/> }

function MyEvents({navigation}) {

    const [listevents,setListEvents] = useState([]);
    const [loading,setLoading] = useState(false);
    const [state,setState] = useState(false);

    useEffect( ()=>{
        
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

    

    return(
        
        <View style={ styles.container }>
            <Header navigation={navigation} title="Meus eventos" />    
            <View style={ styles.containerBody }>
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
                <TouchableOpacity style={styles.btnSettings}  >
                    <Icon style={styles.searchIcon2} name="sliders" size={20} color="#000"/>
                </TouchableOpacity>
            </View>
            </View>
            {loading && <Loading/> }
            <View style={ styles.list }>
               
               <ScrollView vertical={true} >
                { state && listevents.map((item, k)=>{
                    
                    if( item.type === 0 )
                        return ( <SwipeList_LostPet key={k} data={item} color="#faab64" /> );
                    else if( item.type === 1 )
                        return ( <SwipeList_CommunityHouse key={k} data={item} color="#5cc5c0" /> );
                    else 
                        return ( <SwipeList_Complaint key={k} data={item} color="#ff545a" /> );
                    
                        
                })} 
               </ScrollView>
            </View>    
            

            </View>
        </View>
              
    );
}
export default MyEvents;