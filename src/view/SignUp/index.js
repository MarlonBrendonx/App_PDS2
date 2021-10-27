import React, { useState,useEffect} from 'react';
import { View,KeyboardAvoidingView,Image
,TouchableOpacity,Text,ScrollView,Alert} from 'react-native';
import  styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, SocialIcon  } from 'react-native-elements';
import Api  from '../Apis/SignIn-SignUp/Api';
import ErrorMsg from '../../components/ErrorField';

function SignUp({navigation}){
        
        const [hidePass, setHidePass] = useState(true);
		const [hidePass2, setHidePass2] = useState(true);
		const [nameField, setNameField] = useState('');
		const [emailField, setEmailField] = useState('');
		const [phoneField, setPhoneField] = useState('');
		const [passwordField, setPasswordField] = useState('');
		const [passwordConfirmField, setPasswordConfirmField] = useState('');
		const [stateError,setStateError]=useState([]);
		
		
		const requireFields = () => {

			if( nameField == "" || ! isNaN(nameField) || nameField.length <=1 ){
				return (<ErrorMsg msg="Campo inválido (Somente letras, pelo menos 3 caracteres)"/>);
			}
			if( emailField == "" ){
				setStateError((stateError)=>[...stateError,{ emailError:"Campo inválido (Ex: usuario@gmail.com)" }]);
				
			}
			
		}


        const handleRegisterButtonClick = async() =>{

			
			if( nameField != '' && emailField != '' && phoneField != '' && passwordField !='' ){
				if( passwordField != passwordConfirmField ){

					alert("A confirmação da senha está incorreta!");

				}else{
					
					let res = await Api.signUp(nameField,emailField,phoneField,passwordField);
					
					if( res.status ){
						
						Alert.alert(
							res.msg,
							"",
							[
							{
								text: "Ok",
								onPress: () => navigation.navigate('SignIn'),
								style: "OK"
							},
							]
						);
						
					}else{
						
						Alert.alert(
							res.msg,
							"",
							[
							{
								text: "Ok",
								onPress: () =>  null,
								style: "OK"
							},
							]
						);
						
					}

				}
			}else{

				alert("Preencha os campos!");
			}
                
        };
		const handleLoginButtonClick = () =>{

			navigation.navigate('SignIn');   

		};

        return (

        <ScrollView style={{ backgroundColor:'white' }}>
                        
        	<View  style={ styles.container} >

            	<Image style={ styles.image } source={ require("../../assets/login/login.png") } />
                <Text style={ styles.textTitle }> Vamos Começar !</Text>
                <Text>Crie uma uma conta</Text>

            <View style={styles.containerInputs}>  

				<Input
					style={styles.input}
					placeholder='Nome ( Ex: Maria,José )'
					leftIcon={
						<Icon
							name='user'
							size={20}
							color='#B33BF6'
						/>
					}
					onChangeText={t=>setNameField(t)}
				/>
				<View>
				
				</View>

			<Input
				style={styles.input}
				placeholder='Email ( Ex: usuario@gmail.com )'
				leftIcon={
					<Icon
						name='envelope'
						size={20}
						color='#B33BF6'
					/>
				}
				onChangeText={t=>setEmailField(t)}
				
			/>
			<View>
				
				</View>
	
			<Input

				style={styles.input}
				placeholder='Telefone (Ex: 88313498 )'
				type="number"
				leftIcon={
					<Icon
						name='phone'
						size={20}
						color='#B33BF6'
					/>
				}
				onChangeText={t=>setPhoneField(t)}
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
			<Input
				style={styles.input}
				placeholder='Confirme sua senha'
				autoCorrect={false}
				secureTextEntry={hidePass2 ? true : false}
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
						onPress={() => setHidePass2(!hidePass2)}
					/>
				}
				onChangeText={t=>setPasswordConfirmField(t)}
			/>
            </View>

				<TouchableOpacity style={styles.btnSubmit} onPress={handleRegisterButtonClick}>
					<Text style={styles.submitText}>Criar Conta</Text>
						<Image style={ styles.iconButtonsubmit } source={require("../../assets/login/paw.png")} />
					</TouchableOpacity>
				<TouchableOpacity style={styles.btnRegister} onPress={handleLoginButtonClick}>
					<>
						<Text style={styles.txt2}>Já posssui uma conta ? </Text>
						<Text style={styles.txtLogin}>Logue-se</Text>
					</>
				</TouchableOpacity>                
            </View>

    	</ScrollView>
                
            
        );
}
export default SignUp;
