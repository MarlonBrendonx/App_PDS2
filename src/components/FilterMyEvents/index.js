import React,{useState} from "react";
import { View,Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import Modal from 'react-native-modal';


const FilterMyEvents = (props) => {

  const [checked, setChecked] = React.useState(3);
  

  const saveOptions = () =>{
    alert("Configurações salvas !");
    props.StateOptions(checked);
   
  } 


  return (
    <Modal isVisible={props.isVisible}>
        <View style={{width:'95%',height:'50%',backgroundColor:'white',borderRadius:30}}>
          
          <View style={styles.header}>
            <View>
              <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:15}}>Filtrar por: </Text>
            </View>
            <View style={styles.btnClose}>
              <TouchableOpacity onPress={props.onClose} style={{ alignSelf:'flex-end' }}>
                  <Icon  name="times" size={25} color="red"/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bodyRadioButton}>

            <View style={styles.RadioButton}>
                <RadioButton
                  value="first"
                  status={ checked == 1 ? 'checked' : 'unchecked' }
                  onPress={() => setChecked(1)}
                  color="#B33BF6"
                                  
                />
                <Text>Casinha Comunitária</Text>
            </View>
            <View style={styles.RadioButton}>
                <RadioButton
                  value="first"
                  status={ checked == 0 ? 'checked' : 'unchecked' }
                  onPress={() => setChecked(0)}
                  color="#B33BF6"
                                  
                />
                <Text>Animal Perdido</Text>
            </View>
            <View style={styles.RadioButton}>
                <RadioButton
                  value="first"
                  status={ checked == 2 ? 'checked' : 'unchecked' }
                  onPress={() => setChecked(2)}
                  color="#B33BF6"
                                  
                />
                <Text>Denúncias</Text>
            </View>
            <View style={styles.RadioButton}>
                <RadioButton
                  value="first"
                  status={ checked == 3 ? 'checked' : 'unchecked' }
                  onPress={() => setChecked(3)}
                  color="#B33BF6"
                                  
                />
                <Text>Todos</Text>
            </View>
          </View>
          <View style={ styles.containerbtnSave }>
              <TouchableOpacity onPress={saveOptions} style={ styles.btnsave }>
                  <Text style={{ color:'#B33BF6' }}>Salvar</Text>
              </TouchableOpacity>
          </View>
        </View>
    </Modal>
  );
};

export default FilterMyEvents;
