import React, { useState,useContext} from 'react';
import { View,KeyboardAvoidingView,Image
,TouchableOpacity,Text,Animated } from 'react-native';
import  styles from './styles'
import { ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Api  from '../Apis/Adoption/Api';
//import Api  from '../Apis/SignUpPets/Api';
import Header from '../../components/Header';
import { Input, SocialIcon  } from 'react-native-elements';
import  {AsyncStorage}  from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
//import { UserContext } from '../../context/UserContext';
import {useNetInfo} from "@react-native-community/netinfo";
import {UserContext} from '../../context/UserContext';

function PetsView({navigation,route}){
		const { dados }= route.params; 
		const remove =  async() =>{
			if( dados !== null){
				alert("Não é possível remover se estiver na lista de adoção");
				let json= await Api.remove(dados.id_animals);
				
				if( json.status ){
						
					alert(json.msg);
	
					//navigation.navigate("DonationView");
	
				}else{
						
					alert("Erro "+json.error);
						
				}
				
			}else{
	
				alert("Sem dados!");
			}
		}
		const removea =  async() =>{
			if( dados !== null){
				
				let json= await Api.removea(dados.id_animals);
				
				if( json.status ){
						
					alert(json.msg);
	
					//navigation.navigate("DonationView");
	
				}else{
						
					alert("Erro "+json.error);
						
				}
				
			}else{
	
				alert("Sem dados!");
			}
		}
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
            <Header navigation={navigation} title=" Dados do Pet" />           
        	<View  style={ styles.container} >
				
            	<Image style={ styles.image } source={ require("../../assets/login/cat.png") } />

				<View style={{ backgroundColor: "violet", flex: 0.9, width: '90%',marginBottom:10}} > 
				<Text style={{fontWeight: 'bold',size:20}}>                                          {dados.name}</Text>
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
				<View style={{flexDirection: "row"}} > 
				<Icon
						name='question'
						size={20}
						color='#B33BF6'
						rigth={80}
					/>
                <Text>    Espécie:{dados.species}</Text>
				</View>
            </View>
			
			<View style={{ backgroundColor: "plum", flex: 0.9, width: '90%' ,marginBottom:20  }} > 
				
				<Text>Sobre:{dados.information}</Text>
			</View>
			<TouchableOpacity style={styles.btnSubmit} onPress={remove}>
					<Text style={styles.submitText}>Excluir</Text>
					</TouchableOpacity>
				<TouchableOpacity style={styles.btnRegister} onPress={signupadoption}>
					<>
						<Text style={styles.txt2}>Adicionar para adoção </Text>
					</>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btnRegister} onPress={removea}>
					<>
						<Text style={styles.txt2}>Remover da adoção </Text>
					</>
				</TouchableOpacity>
            </View>

    	</ScrollView>
                
            
        );
}
export default PetsView;
