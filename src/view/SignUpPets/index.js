import React, { useState,useEffect} from 'react';
import { View,KeyboardAvoidingView,Image
,TouchableOpacity,Text,ScrollView} from 'react-native';
import  styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, SocialIcon  } from 'react-native-elements';
import Api  from '../Apis/SignUpPets/Api';
import { useNavigation } from 'react-native';
//import { StatusBar, Modal } from 'react-native'; // Adicionado o Modal
//import { RNCamera } from 'react-native-camera';
import { Picker, StyleSheet } from "react-native";
//import { launchImageLibrary } from 'react-native-image-picker';
//renderCameraModal = () => (
function SignUpPets({navigation}){
        
        const [hidePass, setHidePass] = useState(true);
		const [nameField, setNameField] = useState('');
		const [sobreField, setSobreField] = useState('');
		const [idadeField, setIdadeField] = useState('');
		const [sexoField, setSexoField] = useState('');
		const [racaField, setRacaField] = useState('');
		const [selectedValue, setSelectedValue] = useState("dog");
		const [file, setFile] = useState();
		count = 1;
        const handleRegisterButtonClick = async() =>{

		
			if( nameField != '' && sobreField != '' && idadeField != '' && selectedValue !='' && sexoField !='' && racaField !='' ){
				let res = await Api.SignUpPets(nameField,sexoField,sobreField,count,idadeField,selectedValue,racaField);
					if( res.status ){
						
						alert(res.msg);
						

					}else{
						
						alert("Erro "+res.error);
						
					}
			}else{

				alert("Preencha os campos!");
			}
                
        };
		const handleChoosePhoto = () => {
			const options = {
			  noData: true,
			  title: 'Foto de avaliação',
			  takePhotoButtonTitle: 'Escolha uma foto',
			  chooseFromLibraryButtonTitle: 'Selecione da galeria uma foto',
			  selectionLimit: 1, // Se deixar 1, será permitido apenas uma foto e 0 várias 
			};
		
			launchImageLibrary(options, async (response) => {
			  if (response.didCancel) {
				console.log('Usuário cancelou a seleção');
			  } else if (response.error) {
				console.log('Ocorreu um erro.');
			  } else {
				const photoFile = {
				  uri: asset.uri,
				  name: asset.fileName,
				  type: 'image/jpeg',
				};
		
				setFile(photoFile);
			  }
			});
		  };
		const handleLoginButtonClick = () =>{

			navigation.navigate('SignUpPets');   

		};
		
        return (

		//const [selectedValue, setSelectedValue] = useState("java");
        <ScrollView style={{ backgroundColor:'white' }}>
                        
        	<View  style={ styles.container} >

            	<Image style={ styles.image } source={ require("../../assets/login/login.png") } />
                <Text style={ styles.textTitle }> Vamos Começar !</Text>
                <Text>Cadastre um Pet</Text>

            <View style={styles.containerInputs}>  
				<Input
					style={styles.input}
					placeholder='Nome'
					leftIcon={
						<Icon
							name='edit'
							size={20}
							color='#B33BF6'
						/>
					}
					onChangeText={t=>setNameField(t)}
				/>

			<Input
				style={styles.input}
				placeholder='Sobre'
				leftIcon={
					<Icon
						name='info'
						size={20}
						color='#B33BF6'
					/>
				}
				onChangeText={t=>setSobreField(t)}
				
			/>
			<Input
				style={styles.input}
				placeholder='Sexo'
				leftIcon={
					<Icon
						name='intersex'
						size={20}
						color='#B33BF6'
					/>
				}
				onChangeText={t=>setSexoField(t)}
				
			/>
			<Input
				style={styles.input}
				placeholder='Raça'
				leftIcon={
					<Icon
						name='github'
						size={20}
						color='#B33BF6'
					/>
				}
				onChangeText={t=>setRacaField(t)}
				
			/>
			<Input

				style={styles.input}
				placeholder='Idade'
				leftIcon={
					<Icon
						name='question'
						size={20}
						color='#B33BF6'
					/>
				}
				onChangeText={t=>setIdadeField(t)}
			/>
	  <Text>ESPÉCIE</Text>
	  <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Cachorro" value="dog" />
        <Picker.Item label="Gato" value="gato" />
		<Picker.Item label="Ave" value="ave" />
		<Picker.Item label="Outros" value="outros" />
      </Picker>
    </View>
	
			
            </View>
			<TouchableOpacity style={styles.btnSubmit1} onPress={handleChoosePhoto}>
				<Text style={styles.submitText}>Adicionar imagem</Text>
	
			</TouchableOpacity>
			<TouchableOpacity style={styles.btnSubmit} onPress={handleRegisterButtonClick}>
				<Text style={styles.submitText}>Cadastrar</Text>
					<Image style={ styles.iconButtonsubmit } source={require("../../assets/login/paw.png")} />
			</TouchableOpacity>
				                
            </View>

    	</ScrollView>
                
            
        );
}
export default SignUpPets;
