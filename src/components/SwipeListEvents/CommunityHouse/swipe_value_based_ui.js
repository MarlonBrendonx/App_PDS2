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
import Api from "../../../view/Apis/Map/Api";
import {UserContext} from "../../../context/UserContext";


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

    const removeEvent = async (rowMap, rowKey)=>{
        
        let res= await Api.removeEvent(props.data.id_event,person.id);
       
        if( res.status ){
            
            closeRow(rowMap, rowKey);
            const newData = [...listData];
            const prevIndex = listData.findIndex(item => item.key === rowKey);
            newData.splice(prevIndex, 1);
            setListData(newData);

            Alert.alert(
                "Evento removido com sucesso!",
                "",
                [
                  {
                    text: "ok",
                    style: "ok",
                  },
                  
                ],
                {
                  cancelable: true,
                  onDismiss: () =>
                    Alert.alert(
                      ":)"
                    ),
                }
            );
            
            
        }else{

            alert("Erro ao remover o evento :(");
        }

       
    }


    const deleteRow = (rowMap, rowKey) => {
    
        Alert.alert(
            "Realmente deseja remover ?",
            "* Todos dados e imagens serão removidos",
            [
              {
                text: "Cancelar",
                style: "cancel",
              },
              {
                text: "Excluir",
                onPress: () => removeEvent(rowMap, rowKey),
                style: "cancel",
                
              },
            ],
            {
              cancelable: true,
              onDismiss: () =>
                Alert.alert(
                  ":)"
                ),
            }
        );

    };
   

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;
        rowSwipeAnimatedValues[key].setValue(Math.abs(value));
    };

    const renderItem = data => (
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={ styles(props).rowFront }
            underlayColor={'#AAA'}
        >   
            <View style={ styles(props).containerEvent }>            
                <Image style={ styles(props).img } source={ require("../../../assets/house.jpg") } />
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
        </TouchableHighlight>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles(props).rowBack}>
            <Text></Text>
            <TouchableOpacity
                style={[styles(props).backRightBtn, styles(props).backRightBtnLeft]}
                onPress={() => closeRow(rowMap, data.item.key)}
            >
                <Text style={styles(props).backTextWhite}>Fechar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles(props).backRightBtn, styles(props).backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <Animated.View
                    style={[
                        styles(props).trash,
                        {
                            transform: [
                                {
                                    scale: rowSwipeAnimatedValues[
                                        data.item.key
                                    ].interpolate({
                                        inputRange: [45, 90],
                                        outputRange: [0, 1],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <Image
                        source={require('../../../assets/main/trash.png')}
                        style={styles(props).trash}
                    />
                </Animated.View>
            </TouchableOpacity>
        </View>
    );

    return (
       
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
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
