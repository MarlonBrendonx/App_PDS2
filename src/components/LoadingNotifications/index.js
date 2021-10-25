import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

const Loading = () => {
  return (
        <View style={{paddingTop:20}}>
          <Image style={ styles.img } source={require("../../assets/loading.gif")} />
        </View>
  );
};

export default Loading;
