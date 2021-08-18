import React, { useState,useEffect} from 'react';
import { View,Button,Image,TouchableOpacity} from 'react-native';
import styles from './styles';
import { Input,Text  } from 'react-native-elements';
import { AntDesign,Ionicons } from "@expo/vector-icons";
import  Header  from "../../../components/Header";

function Profile({navigation}){

        return (
            <View style={ styles.container }>
            
            <Header navigation={navigation} title="Perfil"  />
            
            <View style={ styles.btnsContainer}>

               <TouchableOpacity style={styles.btnOptions} 

                     onPress={ () => navigation.navigate("ProfileFields",{
                        title:'Alterar Nome',
                        type:'Name',

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
                        type:'E-mail',

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
                        type:'Phone',

                     }) }>
                    <Image source={require('../../../assets/profile/phone.png')} style={styles.icon} />
                    <Text style={styles.btnText}>Telefone</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.btnArrow}>
                        <Image source={require('../../../assets/profile/arrow.png')} style={styles.iconArrow} />
               </TouchableOpacity>
            </View>

            <View style={ styles.btnsContainer}>
               <TouchableOpacity style={styles.btnOptions}>
                    <Image source={require('../../../assets/profile/key.png')} style={styles.icon} />
                    <Text style={styles.btnText}>Senha</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.btnArrow}>
                        <Image source={require('../../../assets/profile/arrow.png')} style={styles.iconArrow} />
               </TouchableOpacity>
            </View>
            
            </View>
        );


}

export default Profile;