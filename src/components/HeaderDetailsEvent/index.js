import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const HeaderDetailsEvent = (props) => {


  return (
        <View style={ styles.header } >

            <TouchableOpacity style={ styles.buttonBack } onPress={() => props.navigation.goBack()}>
                <Ionicons name="arrow-undo-outline" size={24} color="white" />
            </TouchableOpacity>
            
            <Text style={ styles.titleHeader }> { props.title } </Text>
            
        </View>
  );
};

export default HeaderDetailsEvent;
