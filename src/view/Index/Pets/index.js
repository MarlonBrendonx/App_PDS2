import React, { useState, useEffect,useContext} from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import Api  from '../../Apis/SignUpPets/Api';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,Image } from "react-native";
import Header from '../../../components/Header';
import {UserContext} from '../../../context/UserContext';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import SignUpPets from "../../SignUpPets";



//<Image style={ styles.image2 } source={ require("../../../assets/login/login.png") } />


function Pets ({navigation}) {

  const [listpets,setListPets] = useState([]);
	const [loading,setLoading] = useState(false);
	const [state,setState] = useState(false);
	
  const {state:person} =useContext(UserContext);
	useEffect( ()=>{
		
		getPets();
	
	}, []);
	
	const getPets = async ()=>{
		
		setLoading(true);
		setListPets([]);
	
		let res= await Api.getPets(person.id);
	   
		if( res.status ){
			
			setListPets(res.msg.data);
			console.log(res.msg.data);
		}else{
	
			alert("Erro ao buscar os eventos.");
		}
		
		setLoading(false);
		setState(true);
	}

  const [selectedId, setSelectedId] = useState(null);

  const handleLoginButtonClick = () =>{

    navigation.navigate('SignUpPets');   
  
  };
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Image style={ styles.image2 } source={ require("../../../assets/login/login.png") } />
      <View>
      <Text style={[styles.title, textColor,]}>{"NOME: "+item.name}</Text>
      <Text></Text>
      <Text style={[styles.title, textColor,]}>{"SEXO: "+item.sex}</Text>
      <Text></Text>
      <Text style={[styles.title, textColor,]}>{"IDADE: "+item.age}</Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => {
    const backgroundColor = item.id_animals === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id_animals=== selectedId ? 'white' : 'black';
    //setSelectedId(item.id),
    return (
      <Item
        item={item}
        onPress={() =>  navigation.navigate('PetsView',
        {dados : item})}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
//<Text  style={styles.textTitle} >Meus Pets</Text>
  return (
    <ScrollView>
     
      <View>
      <Header navigation={navigation} title="Pets" /> 
        

      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={listpets}
          renderItem={renderItem}
          keyExtractor={(item) => item.id_animals}
          extraData={selectedId}
        />
      </SafeAreaView>
      <View>
      <TouchableOpacity style={styles.btnSubmit} onPress={handleLoginButtonClick}>
				<Text style={styles.submitText}>Cadastrar Pets</Text>
			</TouchableOpacity>
      </View> 
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: "row",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    right:90,
  },
  image2:{

    resizeMode: "contain",
    height:100,
    width: 200,
    right:50,
    },
  textTitle:{
    marginTop:30,
    fontSize:20,
    marginVertical:5,
    left:130,
  },
  btnSubmit:{

    backgroundColor:'#B33BF6',
    width:'70%',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:26,
    left:60,
  },
  submitText:{
      
    color:'#FFF',
    fontSize:18,
  },

});

export default Pets;