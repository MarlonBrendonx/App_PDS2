import React, { useState,useEffect,useContext} from 'react';
import { View,Button,Image,TouchableOpacity} from 'react-native';
import styles from './styles';
import { Input,Text  } from 'react-native-elements';
import { AntDesign,Ionicons } from "@expo/vector-icons";
import  Header  from "../../../components/Header";
import {UserContext} from '../../../context/UserContext';


function Profile({navigation}){

        const[name,setName] = useState(null);
        const { state:person }=useContext(UserContext);
  
        return (
            <View style={ styles.container }>
            
            <Header navigation={navigation} title="Perfil"  />
            
            <View style={ styles.btnsContainer}>

               <TouchableOpacity style={styles.btnOptions} 

                     onPress={ () => navigation.navigate("ProfileFields",{
                        title:'Alterar Nome',
                        type:'setName',
                        field:'name',
                        plcholder:person.name

                     }) }>

                    <Image source={require('../../../assets/profile/person.png')} style={styles.icon} />
                    <Text style={styles.btnText}>Nome</Text>
                    
               </TouchableOpacity>
               <TouchableOpacity style={styles.btnArrow}>
                        <Image source={require('../../../assets/profile/arrow.png')} style={styles.iconArrow} />
               </TouchableOpacity>
            </View>

            <View style={ styles.btnsContainer}>
               <TouchableOpacity style={styles.btnOptions}

                     onPress={ () => navigation.navigate("ProfileFields",{
                        title:'Alterar E-mail',
                        type:'setEmail',
                        field:'email',
                        plcholder:person.email

                     }) }>

                    <Image source={require('../../../assets/profile/email.png')} style={styles.icon} />
                    <Text style={styles.btnText}>E-mail</Text>
                    
               </TouchableOpacity>
               <TouchableOpacity style={styles.btnArrow}>
                        <Image source={require('../../../assets/profile/arrow.png')} style={styles.iconArrow} />
               </TouchableOpacity>
            </View>

            <View style={ styles.btnsContainer}>
               <TouchableOpacity style={styles.btnOptions}

                     onPress={ () => navigation.navigate("ProfileFields",{
                        title:'Alterar Telefone',
                        type:'setPhone',
                        field:'phone',
                        plcholder:person.phone
                        

                     }) }>
                        
                    <Image source={require('../../../assets/profile/phone.png')} style={styles.icon} />
                    <Text style={styles.btnText}>Telefone</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.btnArrow}>
                        <Image source={require('../../../assets/profile/arrow.png')} style={styles.iconArrow} />
               </TouchableOpacity>
            </View>
            
            <View style={ styles.btnsContainer}>
               <TouchableOpacity style={styles.btnOptions}
                     onPress={ () => navigation.navigate("ProfileRemove",{
                        title:'Remover conta',
                     }) }>
                    <Image source={require('../../../assets/profile/removeuser.png')} style={styles.icon} />
                    <Text style={styles.btnText}>Remover conta</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.btnArrow}>
                        <Image source={require('../../../assets/profile/arrow.png')} style={styles.iconArrow} />
               </TouchableOpacity>
            </View>
            </View>
        );


}

export default Profile;