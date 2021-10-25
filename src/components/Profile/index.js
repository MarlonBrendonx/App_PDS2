import React,{useState,useContext} from "react";
import { View, Image,TouchableOpacity, Touchable } from "react-native";
import styles from "./styles";
import ProfilePhoto from "../ProfilePhoto";
import {UserContext} from "../../context/UserContext";

const Profile = (props) => {

  const [isModalVisible, setModalVisible] = useState(false);
  const { state:person }=useContext(UserContext);
 
  
  const toggleModal = () => {
      setModalVisible(!isModalVisible);
  };

  
  return (
    
    <>
      <TouchableOpacity onPress={()=> toggleModal()}>
        <Image
        
          style={{

            height:70,
            width:70,
            borderRadius:100
            
          }}
          source={

              person.avatar ?  {  uri: `data:image/jpg;base64,${person.avatar}` } 
              : require("../../assets/avatar.jpg")

            
          }
        />

      </TouchableOpacity>
      <ProfilePhoto isVisible={isModalVisible} onClose={()=> toggleModal()} />
    </>
  );

};

export default Profile;
