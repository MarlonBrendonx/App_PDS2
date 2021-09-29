import React, { useState,useEffect} from 'react';
import { View,KeyboardAvoidingView,Image
,TouchableOpacity,Text,ScrollView} from 'react-native';
import  styles from './styles';
import Api  from '../Apis/Donation/Api';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, SocialIcon  } from 'react-native-elements';
import { useNavigation } from 'react-native';

//import { StatusBar, Modal } from 'react-native'; // Adicionado o Modal
//import { RNCamera } from 'react-native-camera';
import { Picker, StyleSheet } from "react-native";
//import { launchImageLibrary } from 'react-native-image-picker';
//renderCameraModal = () => (
function Donation({navigation}){
        
        const [hidePass, setHidePass] = useState(true);
		const [titleField, setTitleField] = useState('');
		const [sobreField, setSobreField] = useState('');
		const [linkField, setLinkField] = useState('');
			const [file, setFile] = useState();
		count = 1;
        const handleRegisterButtonClick = async() =>{

		
			if( titleField != '' && sobreField != '' && linkField != '' ){
				let res = await Api.Donation(titleField,sobreField,count,linkField);
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
                <Text style={ styles.textTitle} > Cadastre uma doação</Text>

            <View style={styles.containerInputs}>  
				<Input
					style={styles.input}
					placeholder='Titulo'
					leftIcon={
						<Icon
							name='edit'
							size={20}
							color='#B33BF6'
						/>
					}
					onChangeText={t=>setTitleField(t)}
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
				placeholder='Link'
				leftIcon={
					<Icon
						name='link'
						size={20}
						color='#B33BF6'
					/>
				}
				onChangeText={t=>setLinkField(t)}
				
			/>
	
			
            </View>
			<TouchableOpacity style={styles.btnSubmit1} onPress={handleChoosePhoto}>
				<Text style={styles.submitText}>Adicionar imagem</Text>
	
			</TouchableOpacity>
			<TouchableOpacity style={styles.btnSubmit} onPress={handleRegisterButtonClick}>
				<Text style={styles.submitText}>Cadastrar</Text>
			</TouchableOpacity>
				                
            </View>

    	</ScrollView>
                
            
        );
}
export default Donation;
