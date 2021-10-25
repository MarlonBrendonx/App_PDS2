import React, { useState,useContext} from 'react';
import { View,KeyboardAvoidingView,Image
,TouchableOpacity,Text,Animated } from 'react-native';
import  styles from './styles'
import { ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, SocialIcon  } from 'react-native-elements';
import Api  from '../Apis/SignIn-SignUp/Api';
import  {AsyncStorage}  from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
//import { UserContext } from '../../context/UserContext';
import {useNetInfo} from "@react-native-community/netinfo";
import {UserContext} from '../../context/UserContext';

function PetsView({navigation}){
        
		const handleLoginButtonClick = () =>{

			navigation.navigate('SignIn');   

		};

        return (

        <ScrollView style={{ backgroundColor:'white' }}>
                        
        	<View  style={ styles.container} >

            	<Image style={ styles.image } source={ require("../../assets/login/cat.png") } />

				<View style={{ backgroundColor: "white", flex: 0.9, width: '90%',marginBottom:30}} > 
				<Text style={{fontWeight: 'bold'}}>     BRUTOS</Text>
				<View style={{flexDirection: "row"}} > 
				<Icon
						name='github'
						size={20}
						color='#B33BF6'
						rigth={80}
					/>
                <Text>  Raça:</Text>
				</View>
				<View style={{flexDirection: "row"}} > 
				<Icon
						name='intersex'
						size={20}
						color='#B33BF6'
						rigth={80}
					/>
                <Text>  Sexo:</Text>
				</View>
				<View style={{flexDirection: "row"}} > 
				<Icon
						name='question'
						size={20}
						color='#B33BF6'
						rigth={80}
					/>
                <Text>    Idade:</Text>
				</View>
            </View>
			<View style={{ backgroundColor: "yellow", flex: 0.9, width: '90%' ,flexDirection: "row",marginBottom:10 }} > 
				<Image style={ styles.image2 } source={ require("../../assets/login/login.png") } />
				<Text style={{right:80,fontWeight: 'bold', marginTop:42}} >Eduardo Borges</Text>
			</View>
			<View style={{ backgroundColor: "white", flex: 0.9, width: '90%' ,marginBottom:20  }} > 
				
				<Text>Sobre:</Text>
			</View>

				<TouchableOpacity style={styles.btnSubmit} onPress={handleLoginButtonClick}>
					<Text style={styles.submitText}>Editar</Text>
					</TouchableOpacity>
				<TouchableOpacity style={styles.btnRegister} onPress={handleLoginButtonClick}>
					<>
						<Text style={styles.txt2}>Adicionar para adoção </Text>
					</>
				</TouchableOpacity>                
            </View>

    	</ScrollView>
                
            
        );
}
export default PetsView;
