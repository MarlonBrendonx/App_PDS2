import React, { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,Image } from "react-native";
import { NavigationActions, StackActions } from 'react-navigation';
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: " Nome:",
    title2: " Raça:",
    title3: " Sexo:",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "  Nome:",
    title2: "  Raça:",
    title3: "  Sexo:",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: " Nome:",
    title2: " Raça:",
    title3: " Sexo:",
  },
];
//const { navigate } = useNavigation();
const handleLoginButtonClick = (navigation) =>{

  navigation.navigate('SignUpPets');   

};
//<Image style={ styles.image2 } source={ require("../../assets/login/login.png") } />
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    
    <View>
    <Text style={[styles.title, textColor,]}>{item.title}</Text>
    <Text></Text>
    <Text style={[styles.title, textColor,]}>{item.title2}</Text>
    <Text></Text>
    <Text style={[styles.title, textColor,]}>{item.title3}</Text>
    </View>
  </TouchableOpacity>
);

const Pets = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <ScrollView>
      <View>
        <Text  style={styles.textTitle} >Meus Pets</Text>

      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
      <View>
      <TouchableOpacity style={styles.btnSubmit} onPress={handleLoginButtonClick(navigation)}>
				<Text style={styles.submitText}>Cadastrar Pet</Text>
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