import React from "react";
import { View,Text, Image } from "react-native";
import ImageModal from 'react-native-image-modal';
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const MyEventsComplaint = (props) => {


  return (
        <View style={ styles(props).containerEvent }>
                        
        <Image style={ styles(props).img } source={ require("../../../assets/Events/ICON_denuncia.png") } />
        <View style={ styles(props).data }>
            <Text style={ styles(props).txt }>Comentários...</Text>
            <Text style={ styles(props).txt }>Status: Não Solucionado</Text>
        </View>
        
        </View>
  );
};

export default MyEventsComplaint;
