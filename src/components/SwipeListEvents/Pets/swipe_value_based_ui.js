import React, { useState,useContext } from 'react';
import {
    Animated,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    TextInput,
    Alert 
} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';
import styles from "./styles";
import {UserContext} from "../../../context/UserContext";
import { Entypo } from "@expo/vector-icons";

const rowSwipeAnimatedValues = {};
Array(1)
    .fill('')
    .forEach((_, i) => {
        rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
    });

export default function SwipeValueBasedUi(props) {

    const { state:person }=useContext(UserContext);
    
    const [listData, setListData] = useState(
        Array(1)
            .fill('')
            .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
    );

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;
        rowSwipeAnimatedValues[key].setValue(Math.abs(value));
    };

    const setAnimalId = (id,name) =>{

        Alert.alert(
            "Deseja selecionar seu pet "+name+" para o evento ? ",
            "",
            [
              {
                text: "Cancelar",
                style: "cancel",
              },
              {
                text: "Selecionar",
                onPress: () => { props.AnimalId(id,name),props.onClose() },
                style: "cancel",
                
              },
            ],
            
        );
    }
  
    const renderItem = data => (
        <TouchableHighlight
            onPress={()=>setAnimalId(props.data.id_animals,props.data.name)}
            style={ styles(props).rowFront }
            underlayColor={'#AAA'}
        >   
            <View style={ styles(props).containerEvent }>
                <View style={ styles(props).data }>
                    <TextInput
                        style={ styles(props).txt }
                        underlineColorAndroid="transparent"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                        defaultValue={props.data.name}
                        editable={false} 
                        selectTextOnFocus={true}
                        />
                </View>
            </View>
        </TouchableHighlight>
    );

    

    return (
       
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
                onSwipeValueChange={onSwipeValueChange}
               
            />
        
    );
}
