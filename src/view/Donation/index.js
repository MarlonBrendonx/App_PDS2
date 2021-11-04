import React, { useState,useEffect,useContext} from 'react';
//import React, { useState,useEffect,} from 'react';
import { View,KeyboardAvoidingView,Image
,TouchableOpacity,Text,ScrollView} from 'react-native';
import  styles from './styles';
import Api  from '../Apis/Donation/Api';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, SocialIcon  } from 'react-native-elements';
import { useNavigation } from 'react-native';
import {UserContext} from '../../context/UserContext';
import * as ImagePicker from 'expo-image-picker';
import Header from "../../components/Header";
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
		const {state:person} =useContext(UserContext);
		const [selectedImage, setSelectedImage] = useState([]);
		//count = 1;
        const handleRegisterButtonClick = async() =>{

		
			if( titleField != '' && sobreField != '' && linkField != '' ){
				let res = await Api.Donation(titleField,sobreField,person.id,linkField);
				if( res.status ){
						
					alert(res.msg);
					

				}else{
					alert("Erro "+res.error);
				}
			}else{

				alert("Preencha os campos!");
			}
                
        };
		let openImagePickerAsync = async () => {

			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				aspect: [4, 3],
				quality: 1,
			  });
			  
			  const count="localUri"+selectedImage.length;
	  
			  if ( ! result.cancelled ) {
	  
				setSelectedImage((selectedImage)=>[...selectedImage,{ count: result.uri }]);
			  
			  }
			  
			  console.log(selectedImage);
		
		}
		
		const handleLoginButtonClick = () =>{

			navigation.navigate('SignUpPets');   

		};
		
        return (

		//const [selectedValue, setSelectedValue] = useState("java");
        <ScrollView style={{ backgroundColor:'white' }}>
             <Header navigation={navigation} title="Cadastro de doação" />              
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
			</TouchableOpacity>
				                
            </View>

    	</ScrollView>
                
            
        );
}
export default Donation;
