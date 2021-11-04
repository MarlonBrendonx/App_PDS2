import React, { useState,useContext,useEffect} from 'react';
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

function AdoptionView({navigation,route}){
	const { dados }= route.params; 
	const [listpets,setListPets] = useState([]);
	const [listuser,setListUser] = useState([]);
	const [loading,setLoading] = useState(false);
	const [state,setState] = useState(false);
	
	useEffect( ()=>{
		
		getAdoptiona();
	
	}, []);
	
	const getAdoptiona = async ()=>{
		
		setLoading(true);
		setListPets([]);
	
		let res= await Api.getAdoptiona(dados.id_adoption);
	   
		if( res.status ){
			
			setListPets(res.msg.data);
			//const { id }=(res.msg.data);
			console.log(res.msg.data);
			//console.log(id.user_id);
		}else{
	
			alert("Erro ao buscar os eventos.");
		}
		
		setLoading(false);
		setState(true);
		getAdoptionu();
	}
	/////////////////////////////////////////////
	
	const getAdoptionu = async ()=>{
		
		setLoading(true);
		setListUser([]);
	    //teste = listpets.map(item => item.user_id);
		//console.log(teste)
		let res= await Api.getAdoptionu(listpets.map(item => item.user_id));
	   
		if( res.status ){
			
			
			setListUser(res.msg.data);
			console.log(res.msg.data);
		}else{
	
			alert("Erro ao buscar os eventos.");
		}
		
		setLoading(false);
		setState(true);
	}

		const handleLoginButtonClick = () =>{
 
			navigation.navigate('SignIn');   

		};
		
        return (

        <ScrollView style={{ backgroundColor:'white' }}>
            <Header navigation={navigation} title=" Dados da adoção" />           
        	<View  style={ styles.container} >
				
            	<Image style={ styles.image } source={ require("../../assets/login/cat.png") } />

				<View style={{ backgroundColor: "violet", flex: 0.9, width: '90%',marginBottom:30}} > 
				<Text style={{fontWeight: 'bold'}}>                                             {dados.name}</Text>
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
				<Text style={{right:80,fontWeight: 'bold', marginTop:42}} >Responsável:{listuser.map(item => item.user_id)}</Text>
			</View>
			<View style={{ backgroundColor: "white", flex: 0.9, width: '90%' ,marginBottom:20  }} > 
				
				<Text>Sobre:{dados.information}</Text>
			</View>

            </View>

    	</ScrollView>
                
            
        );
}
export default AdoptionView;
