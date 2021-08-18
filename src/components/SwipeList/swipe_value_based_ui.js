import React, { useState } from 'react';
import {
    Animated,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';

const rowSwipeAnimatedValues = {};
Array(1)
    .fill('')
    .forEach((_, i) => {
        rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
    });

export default function SwipeValueBasedUi(props) {

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

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
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
            
            <View>
                <Text>Notificacao</Text>
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
        height: 80,
 
        
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
        backgroundColor: '#5cc5c0',
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
   
});
