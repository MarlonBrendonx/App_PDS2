import React, { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: " Nome:",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "  Nome:",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: " Nome:",
  },
];
const handleViewButtonClick = () =>{
  
}
const handleLoginButtonClick = () =>{

  navigation.navigate('Donation');   

};
//<Image style={ styles.image2 } source={ require("../../assets/walp1.jpg") } />
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image style={ styles.image2 } source={ require("../../../assets/walp1.jpg") } />
    <View>
    <Text style={[styles.title, textColor,]}>{item.title}</Text>
    
    <TouchableOpacity style={styles.btnSubmit} onPress={handleViewButtonClick}>
	  <Text style={styles.submitText}>Contribuir</Text>
	</TouchableOpacity>

    </View>
  </TouchableOpacity>
);

const DonationView = (navigation) => {
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
        <Text  style={styles.textTitle} >Doações</Text>

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
      <TouchableOpacity style={styles.btnSubmit} onPress={handleLoginButtonClick}>
				<Text style={styles.submitText}>Cadastrar Doação</Text>
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
    width:'100%',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:26,
    right:80,
  },
  submitText:{
      
    color:'#FFF',
    fontSize:18,
  },

});

export default DonationView;