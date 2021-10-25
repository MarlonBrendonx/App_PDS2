import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const AtributesEvents = (props) => {


  return (
    <View style={styles.componentAtribute}>
        <Text >{props.title}</Text>
        <Text style={styles.attData}>{props.field}</Text>
    </View>
  );
};

export default AtributesEvents;
