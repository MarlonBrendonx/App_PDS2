import React from "react";
import { View,Text, Image } from "react-native";
import ImageModal from 'react-native-image-modal';
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const MyEventsContainer = (props) => {


  return (
        <View style={ styles(props).containerEvent }>            
          <Image style={ styles(props).img } source={ require("../../assets/Events/cat.png") } />
          <View style={ styles(props).data }>
              <Text style={ styles(props).txt }>Nome: {props.data.name}</Text>
              <Text style={ styles(props).txt }>Raça: Vira-Lata</Text>
              <Text style={ styles(props).txt }>Status: {props.data.status}</Text>
          </View>
          <View>
              <Image style={ styles(props).imgicon } source={ require("../../assets/main/event_1.png") } />
          </View>
        </View>
  );
};

export default MyEventsContainer;
