import React from "react";
import { View, Image } from "react-native";
import ImageModal from 'react-native-image-modal';
import styles from "./styles";

const Loading = () => {
  return (
        <View style={{paddingTop:20}}>
        <Image style={ styles.img } source={require("../../assets/Events/loading.gif")} />
        </View>
  );
};

export default Loading;
