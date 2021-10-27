import React, { useState,useContext,useEffect} from 'react';
import { View,KeyboardAvoidingView,Image
,TouchableOpacity,Text,Animated} from 'react-native';
import  styles from './styles'
import { ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Api  from '../../Apis/Donation/Api';
import Header from '../../../components/Header';
import { Input, SocialIcon  } from 'react-native-elements';
import  {AsyncStorage}  from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
//import { UserContext } from '../../context/UserContext';
import {useNetInfo} from "@react-native-community/netinfo";
import {UserContext} from '../../../context/UserContext';

function ModalDonation({navigation,route}){
	const { dados }= route.params; 
    //console.log(dados);
	const [listpets,setListPets] = useState([]);
	const [loading,setLoading] = useState(false);
	const [state,setState] = useState(false);
	
	useEffect( ()=>{
		
		getUseru();
	
	}, []);
	
	const getUseru = async ()=>{
		
		setLoading(true);
		setListPets([]);
	
		let res= await Api.getUseru(dados.users_id);
	   
		if( res.status ){
			
			setListPets(res.msg.data);
			//const { id }=(res.msg.data);
			console.log(res.msg.data);
			//console.log(id.user_id);
		}else{
	
			alert("Erro ao buscar os eventos.");
		}
        //checkboxes.map(item => console.log("Checkbox atual: ", item.name));
		teste = listpets.map(item => console.log(item.name));
        console.log(teste);
		setLoading(false);
		setState(true);
		
	}
	/////////////////////////////////////////////
	
	

		const handleLoginButtonClick = () =>{

			navigation.navigate('SignIn');   

		};
		

        return (

        <ScrollView style={{ backgroundColor:'white' }}>
            <Header navigation={navigation} title=" Dados da Doação" />           
        	<View  style={ styles.container} >
				
            	<Image style={ styles.image } source={ require("../../../assets/login/cat.png") } />

				<View style={{ backgroundColor: "violet", flex: 0.9, width: '90%',marginBottom:30}} > 
				<Text style={{fontWeight: 'bold'}}>                                             {dados.name}</Text>
				<View style={{flexDirection: "row"}} > 
				<Icon
						name='github'
						size={20}
						color='#B33BF6'
						rigth={80}
					/>
                <Text>  Titulo:{dados.title}</Text>
				</View>
				<View style={{flexDirection: "row"}} > 
				<Icon
						name='link'
						size={20}
						color='#B33BF6'
						rigth={80}
					/>
                <Text>  Link:{dados.link}</Text>
				</View>
				
            </View>
			<View style={{ backgroundColor: "pink", flex: 0.9, width: '90%' ,flexDirection: "row",marginBottom:10 }} > 
				<Image style={ styles.image2 } source={ require("../../../assets/login/login.png") } />
				<Text style={{right:80,fontWeight: 'bold', marginTop:42}} >Eduardo Borges</Text>
			</View>
			<View style={{ backgroundColor: "white", flex: 0.9, width: '90%' ,marginBottom:20  }} > 
				
				<Text>Sobre:{dados.sobre}</Text>
			</View>

            </View>

    	</ScrollView>
                
            
        );
}
export default ModalDonation;
