import React, { useState,useContext} from 'react';
import { View,KeyboardAvoidingView,Image
,TouchableOpacity,Text,Animated } from 'react-native';
import  styles from './styles'
import { ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Api  from '../Apis/Adoption/Api';
import Header from '../../components/Header';
import { Input, SocialIcon  } from 'react-native-elements';
import  {AsyncStorage}  from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
//import { UserContext } from '../../context/UserContext';
import {useNetInfo} from "@react-native-community/netinfo";
import {UserContext} from '../../context/UserContext';

function PetsView({navigation,route}){
		const { dados }= route.params; 
		const handleLoginButtonClick = () =>{

			navigation.navigate('SignIn');   

		};
		const signupadoption =  async() =>{
			if( dados !== null){
				let res = await Api.Adoption(dados.name,dados.sex,dados.id_animals,dados.age,dados.species,dados.breed);
					if( res.status ){
						
						alert(res.msg);
						

					}else{
						
						alert("Erro "+res.error);
						
					}
			}else{

				alert("Preencha os campos!");
			}
		}

        return (

        <ScrollView style={{ backgroundColor:'white' }}>
            <Header navigation={navigation} title=" Dados da adoção" />           
        	<View  style={ styles.container} >
				
            	<Image style={ styles.image } source={ require("../../assets/login/cat.png") } />

				<View style={{ backgroundColor: "white", flex: 0.9, width: '90%',marginBottom:30}} > 
				<Text style={{fontWeight: 'bold'}}>     {dados.name}</Text>
				<View style={{flexDirection: "row"}} > 
				<Icon
						name='github'
						size={20}
						color='#B33BF6'
						rigth={80}
					/>
                <Text>  Raça:{dados.breed}</Text>
				</View>
				<View style={{flexDirection: "row"}} > 
				<Icon
						name='intersex'
						size={20}
						color='#B33BF6'
						rigth={80}
					/>
                <Text>  Sexo:{dados.sex}</Text>
				</View>
				<View style={{flexDirection: "row"}} > 
				<Icon
						name='question'
						size={20}
						color='#B33BF6'
						rigth={80}
					/>
                <Text>    Idade:{dados.age}</Text>
				</View>
            </View>
			<View style={{ backgroundColor: "pink", flex: 0.9, width: '90%' ,flexDirection: "row",marginBottom:10 }} > 
				<Image style={ styles.image2 } source={ require("../../assets/login/login.png") } />
				<Text style={{right:80,fontWeight: 'bold', marginTop:42}} >Eduardo Borges</Text>
			</View>
			<View style={{ backgroundColor: "white", flex: 0.9, width: '90%' ,marginBottom:20  }} > 
				
				<Text>Sobre:{dados.information}</Text>
			</View>

            </View>

    	</ScrollView>
                
            
        );
}
export default PetsView;
