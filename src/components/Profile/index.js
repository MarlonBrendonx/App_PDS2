import React from "react";
import { View, Image } from "react-native";
import ImageModal from 'react-native-image-modal';
import styles from "./styles";

const Profile = () => {
  return (
    
    <ImageModal
    resizeMode="cover"
    style={{
      width: 60,
      height: 60,
      borderRadius: 50,
    }}
    source={
      require(".././../assets/avatar.jpg")
    }
  />
  
  );
};

export default Profile;
