import React from "react";
import { View, Image } from "react-native";
import ImageModal from 'react-native-image-modal';
import styles from "./styles";

const Profile = () => {
  return (
    <View>
      <ImageModal
        resizeMode="cover"
        style={styles.user_profile}
        source={require("../../assets/avatar.jpg")}
      />
    </View>
  );
};

export default Profile;
