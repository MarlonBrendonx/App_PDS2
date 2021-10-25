import React, { useState, useEffect,useContext } from 'react';
import { Image,View,Button,Text,TextInput,TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import styles from "./styles";
import Modal from 'react-native-modal';
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from 'react-native';
import SwipeList  from "../../../components/SwipeList/swipe_value_based_ui";
import Api  from '../../Apis/Notification/Api';
import {UserContext} from '../../../context/UserContext';
import LoadingNotifications from '../../../components/LoadingNotifications';

function Notifications({ isVisible, onClose,navigation,listevents }) {
   
    const [listnotf,setListNotf] = useState([]);
    const [state,setState]=useState(false);
    const [stateRemoveNotf,setRemoveNotf]=useState(false);
    const [loadingnotf,setLoadingnotf]=useState(false);
    const {state:person} =useContext(UserContext);
    

    const setStateRemove = () =>{
        setRemoveNotf(true);
    }

    const componentDidMount = () => {
        setInterval(() => {
            getNotifications();
        }, 30000);
    }

    const getNotifications = async ()=>{
            
        setLoadingnotf(true);
        setListNotf([]);

        let res= await Api.getNotifications(person.id);
    
        if( res.status ){
            
            setState(res.msg.count);
            setListNotf(res.msg.data);
        
        }else{

            alert("Erro ao buscar as notificações.");

        }
     
        setLoadingnotf(false);
      
    }

    useEffect( ()=>{

        getNotifications();
        componentDidMount();
        

    }, []);

    useEffect( ()=>{

        if( stateRemoveNotf ){

            getNotifications();
            setRemoveNotf(false);

        }
        
    }, [stateRemoveNotf]);



    return(
      <>
      <Modal animationIn="slideInUp" isVisible={isVisible}>
            <View style={ styles.Container }>

                <View style={ styles.header }>
                    <TouchableOpacity onPress={onClose} style={ styles.btnclose }>
                        <Entypo name="cross" size={35} color="#B33BF6" />
                    </TouchableOpacity>
                </View>
              
                <ScrollView style={ styles.notificationItems }>
                {loadingnotf && <LoadingNotifications/> }
                { state >= 1 ? 
                     
                     listnotf.map((item, k)=>{
                        
                        if( item.type === 0 )
                            return ( 
                            <SwipeList 
                                color="#faab64"
                                key={k}
                                data={item}
                                navigation={navigation} 
                                listevents={listevents}
                                onClose={onClose}
                                StateRemoveNotf={setStateRemove}
                                
                            /> );
                        else if ( item.type === 2 ) 
                            return ( 
                            <SwipeList 
                                color="#ED1C34"
                                key={k}
                                data={item}
                                navigation={navigation}
                                listevents={listevents}
                                onClose={onClose}
                                StateRemoveNotf={setStateRemove}
                                
                            /> );
                                            
                     })
                    
                    : <>
                        <Entypo style={{ alignSelf:'center'}}  name="warning" size={35} color="#B33BF6" />
                        <Text style={{ alignSelf:'center',paddingTop:10}}> Não há notificações</Text>
                     </>

                } 
                
                </ScrollView>
            </View>
            
      </Modal>
     </>
    );
}
export default Notifications;