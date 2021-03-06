import React from 'react';
import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = (props)=> StyleSheet.create({

    container:{
        
        flex:1,
        
    },
    containerBody:{
        
        flex:1, 
        marginTop:10,
        backgroundColor:'#FFF'
    },

    containerEvent:{
        
        top:40,
        height:110,
        width:'93%',
        left:10,
        backgroundColor: '#fff',
        borderRadius:15,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:2,
            height:4,
        },
        elevation:10,
        flexDirection:'row',
        borderLeftWidth:4,
        borderColor:'red',
        marginBottom:5,

    },
    form:{
        
     
       
        top:5,
        height:50,
        left:10,
        right:10,
        zIndex:5,
        width:'100%',

        flexDirection:'row'
      
        
        
    },
    searchSection: {
        
        top:20,
        width:'95%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius:15,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:4,
            height:4,
        },
        elevation:2,
    },
    btnSettings:{

        paddingRight:0,
        padding:4
       
    }, 
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft:10,
        backgroundColor:'#fff',
        borderRadius:25,
        color: '#B33BF6',
    },

    searchIcon: {

        padding: 10,
        color: '#B33BF6',
        paddingLeft:15,
    },
    searchIcon2:{
      
        padding:15,
        backgroundColor:'#B33BF6',
        color: 'white',
        borderRadius:9,
        
    },
    img:{

        width:60,
        height:60,
        borderRadius:25,
        marginTop:10,
        marginLeft:20
    },
    imgicon:{
        width:100,
        height:100,
    },
    data:{
        paddingLeft:35
    },
    txt:{

        height:100,
        width:200,
        paddingTop:5,
        paddingBottom:10
    }

});

export default styles;