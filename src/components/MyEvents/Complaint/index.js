import React from "react";
import { View,Text, Image,TextInput } from "react-native";
import ImageModal from 'react-native-image-modal';
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const MyEventsComplaint = (props) => {


  return (
        <View style={ styles(props).containerEvent }>
                        
        <Image style={ styles(props).img } source={ require("../../../assets/Events/ICON_denuncia.png") } />
        <View style={ styles(props).data }>
            <TextInput
               style={ styles(props).txt }
               underlineColorAndroid="transparent"
               placeholderTextColor="grey"
               numberOfLines={10}
               multiline={true}
               defaultValue={props.data.information}
               editable={false} 
               selectTextOnFocus={true}
            />
            
        </View>
        
        </View>
  );
};

export default MyEventsComplaint;
