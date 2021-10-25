import React, { useState } from 'react';
import {
    Animated,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Alert
} from 'react-native';

import { Entypo } from "@expo/vector-icons";
import { SwipeListView } from 'react-native-swipe-list-view';
import Api from '../../view/Apis/Notification/Api';
import InformationResponse from '../../components/InformationUserResponse';
 
const rowSwipeAnimatedValues = {};
Array(1)
    .fill('')
    .forEach((_, i) => {
        rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
    });



export default function SwipeValueBasedUi(props) {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const removeNotification = async (rowMap, rowKey)=>{
        
        let res=await Api.removeNotification(props.data.id_notification);
       
        if( res.status ){
            
            closeRow(rowMap, rowKey);
            const newData = [...listData];
            const prevIndex = listData.findIndex(item => item.key === rowKey);
            newData.splice(prevIndex, 1);
            setListData(newData);


            props.StateRemoveNotf();

            Alert.alert(
                "Notificação removida !",
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

            alert("Erro ao remover a notificação :(");
        }

       
    }


    const deleteRow = (rowMap, rowKey) => {
    
        Alert.alert(
            "Realmente deseja remover a notificação ?",
            "",
            [
              {
                text: "Cancelar",
                style: "cancel",
              },
              {
                text: "Excluir",
                onPress: () => removeNotification(rowMap, rowKey),
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

    const handleClickNotf= async () =>{

         props.listevents.map((item, k)=>{
                        
            if( item.id_event === props.data.id_event ){

            
                props.onClose();
                
                props.navigation.navigate(props.data.type == 0 ? "LostPet_More": "Complaint_More",
                
                props.data.type == 0 ?
                
                {
                    
                    StateInsertList: null,
                    dataEvent:item,
                    images:item.images,
                    status:item.status,
                    type:item.status,
                    state:true

                }
                
                :{
             
                    StateInsertList: null,
                    id_event:item.id_event,
                    user_id_event: item.user_id,
                    status: item.status,
                    type: item.type,
                    information: item.information,
                    images: item.images,
                    state:true

                                     
                });

            }
         })
    }
    

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

    /*
    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };
    */
    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;
        rowSwipeAnimatedValues[key].setValue(Math.abs(value));
    };

    const renderItem = data => (
        <TouchableHighlight
            onPress={() => handleClickNotf()}
            style={ styles(props).rowFront }
            underlayColor={'#AAA'}
        >   
            <View  style={styles(props).containerMsg} >
                <View style={{ alignSelf:'center',  width:'90%', flexDirection:'row',alignItems:'center'}}>
                    <Image

                        style={ styles(props).photo }
                        source={ 

                        props.data.photo != '' ?  {  uri: `data:image/jpg;base64,${props.data.photo}` } 
                        : require("../../assets/avatar.jpg")

                        }


                    />
                    <Text style={styles(props).txt}>  {props.data.message} </Text>
                </View>
                <InformationResponse isVisible={isModalVisible} item={props.data} onClose={()=> toggleModal()}  />
            </View>
        </TouchableHighlight>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles(props).rowBack}>
            <Entypo name="info" size={26} color="#B33BF6" onPress={toggleModal}/>
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
                        source={require('../../assets/main/trash.png')}
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

const styles = (props) => StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius:30
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {

        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#A9A8A8',
        borderBottomWidth: 0.5,
        borderLeftWidth:5,
        borderLeftColor:props.color,
        justifyContent: 'center',
        height: 100,
 
        
    },
    rowBack: {

        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    
        
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
     
        
    },
    backRightBtnLeft: {
        backgroundColor: props.color,
        right: 75,
        borderRadius:2
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
       
    },
    trash: {
        height: 20,
        width: 20,
    },

    txt:{
        
        marginLeft:10,
        fontSize:13,
        width:'90%',
              
    },

    containerMsg:{
        
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
        
    },

    photo:{

        height:50,
        width:50,
        borderRadius:24,
        
    }
   
});
