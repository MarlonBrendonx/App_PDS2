import React, { useState,useContext} from 'react';
import { View,KeyboardAvoidingView,Image
,TouchableOpacity,Text,Animated } from 'react-native';
import  styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, SocialIcon  } from 'react-native-elements';
import Api  from '../Apis/SignIn-SignUp/Api';
import  {AsyncStorage}  from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
//import { UserContext } from '../../context/UserContext';
import {useNetInfo} from "@react-native-community/netinfo";
import {UserContext} from '../../context/UserContext';


function SignIn({navigation}){

		//const{ dispatch: userDispatch } = useContext(UserContext);
		const netInfo = useNetInfo();

        if( netInfo.isConnected == false ){
            navigation.navigate("NoInternet");
        }

		
		const {dispatch:userDispatch} =useContext(UserContext);

		const [hidePass,  setHidePass]     		= useState(true);
		const [emailField, setEmailField]  		= useState('');
		const [passwordField, setPasswordField] = useState('');
		const [items, setItems] = useState([]);
  		const [isLoading, setLoading] = useState(false);
		

		const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Index' })],
        });


		const handleRegisterButtonClick = () =>{

			navigation.navigate('SignUp');   
			
		};
		const handleLoginButtonClick = async() =>{

			  if( emailField != '' && passwordField != '' ){

				
					let json= await Api.signIn(emailField,passwordField);
					
					if( json.status ){
						
						await AsyncStorage.setItem('token',json.msg.remember_token);

						userDispatch({

							type:'setName',
							payload:{
								name:json.msg.name
							},
														
						});
						userDispatch({

							type:'setEmail',
							payload:{
								email:json.msg.email
							},
							
							
						});

						userDispatch({

							type:'setPhone',
							payload:{
								phone:json.msg.phone
							},
							
							
						});

						userDispatch({

							type:'setID',
							payload:{
								id:json.msg.id
							},
							
							
						});

						
			  			navigation.navigate('Index');
						//navigation.dispatch(resetAction);
					 
						
					}else{

						alert(json.msg);
						navigation.navigate('SignIn'); 

					}

			  }else{

					alert("Preencha os campos!");
			  }
				
		};
	
        return (
            
            <View style={ styles.container}  >
                <View style={styles.containerLogo}>
					<Image style={ styles.logo } source={require('../../assets/login/logo.png')}   />
				</View>
                <View style={styles.containerInputs}>  
                	<Input
                	 	 style={styles.input}
                         placeholder='Email'
                         leftIcon={
                        	<Icon
   	                	    	name='envelope'
                                size={20}
                              	color='#B33BF6'
                            />
                         }
						 onChangeText={t=>setEmailField(t)}
                        />

 					<Input
                        style={styles.input}
                        placeholder='Senha'
                        autoCorrect={false}
                        secureTextEntry={hidePass ? true : false}
                        leftIcon={
                            <Icon
                            	name='lock'
		                		size={25}
                            	color='#B33BF6'
                            />
                        }
                        rightIcon={
                        	<Icon
                		        name={hidePass ? 'eye-slash' : 'eye'}
                	            size={20}
            	                color="grey"
        	                    onPress={() => setHidePass(!hidePass)}
                            />
                        }
						onChangeText={t=>setPasswordField(t)}
                        />                       
				    </View>
                    <View style={styles.containerInputs_2}>  
							<TouchableOpacity style={styles.btnForget} >
									<Text style={styles.linkEsqueceusenha}>Esqueceu a senha ?</Text>
							</TouchableOpacity> 
											
							<TouchableOpacity style={styles.btnSubmit} onPress={handleLoginButtonClick}>
									<Text style={styles.submitText}>Entrar</Text>
							</TouchableOpacity>
									
							<Text style={styles.txtLoginsocial}>Ou logue-se por uma rede social</Text>
                    </View>

					<View style={styles.btnssociaisContainer}>
						<TouchableOpacity style={styles.btnSociais}>
            	        	<SocialIcon
        	        	        light
    	                        type='google'
                	        />            
                        </TouchableOpacity>
						<TouchableOpacity style={styles.btnSociais}>
            	        	<SocialIcon
        	        	        light
    	                        type='facebook'
                	        />            
                        </TouchableOpacity>
						<TouchableOpacity style={styles.btnSociais}>
            	        	<SocialIcon
        	        	        light
    	                        type='twitter'
                	        />            
                        </TouchableOpacity>
					</View>
					<TouchableOpacity style={styles.btnRegister} onPress={handleRegisterButtonClick}>
                    	<Text style={styles.txt2}>Não tem uma conta ? </Text>
	                    <Text style={styles.txtRegisternow}>Registre-se agora</Text>
                    </TouchableOpacity>
            </View>
		
        );
}
export default SignIn;
