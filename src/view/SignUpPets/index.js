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
import Header from '../../components/Header';
import * as ImagePicker from 'expo-image-picker';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { Ionicons } from "@expo/vector-icons";
import {UserContext} from "../../context/UserContext";
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
		const [selectedImage, setSelectedImage] = useState([]);
		const [file, setFile] = useState();
		count = 2;

		let openImagePickerAsync = async () => {

			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				aspect: [4, 3],
				quality: 1,
			  });
			  
			  const count="localUri"+selectedImage.length;
	  
			  if ( ! result.cancelled ) {
	  
	  
				const data = new FormData();
	  
				setSelectedImage((selectedImage)=>[...selectedImage,{ count: result.uri }]);
	  
			  
			  }
		  
		
		}

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
		
		const handleLoginButtonClick = (props) =>{

			//getPets();  
			alert("Teste: "+props.data.name);

		};
		
        return (

		//const [selectedValue, setSelectedValue] = useState("java");
        <ScrollView style={{ backgroundColor:'white' }}>
            <Header navigation={navigation} title=" Pets" />            
        	<View  style={ styles.container} >
				
            	<Image style={ styles.image } source={ require("../../assets/login/login.png") } />
                <Text style={ styles.textTitle }> Cadastre um pet!</Text>
                

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
                            <View >
                                <TouchableOpacity style={ styles.btnAddPhoto } onPress={openImagePickerAsync} >
                                   <Image 

                                        style={{ height:24,width:24}}
                                        source={ require("../../assets/Events/camera.png") }
                                   
                                   />
                                </TouchableOpacity>
                                <View style={styles.containerImage}>
                                    <ScrollView horizontal={true}>
                                        
                                            {

                                            selectedImage.map( localUri =>   
                                            <Image
                                                style={ styles.imgsContainer }
                                                key={ localUri.count }
                                                source={{ uri:localUri.count }}
                                                />
                                            )}
                                        
                                    </ScrollView>  
                                </View>
                             
			
            </View>
			
			<TouchableOpacity style={styles.btnSubmit} onPress={handleRegisterButtonClick}>
				<Text style={styles.submitText}>Cadastrar</Text>
					<Image style={ styles.iconButtonsubmit } source={require("../../assets/login/paw.png")} />
			</TouchableOpacity>
				                
            </View>

    	</ScrollView>
                
            
        );
}
export default SignUpPets;
