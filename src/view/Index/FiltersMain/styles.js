import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    
    header:{
        
        top:10,
        height:50,
        width:'100%',
        backgroundColor:'#fff',
        display: 'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
        borderBottomWidth:0.5,
        borderRadius:30
    },
    
    headerTitle:{
        fontSize:20,
        fontWeight:'bold'
    },
    bodyModal:{
        flex:1,
        width:'100%',
        left:3,
        padding:20,
    },

    btnLocation:{
        
        width:'100%',
        padding:7,
        backgroundColor: 'rgba(196, 196, 196, 0.3)',
        borderRadius:40,
        flexDirection:'row',
    },
    txtLocation:{
        left:5,
        paddingTop:10,
        paddingBottom:5
    },
    bodyOptions:{
        height:'auto',
        width:'100%',
        top:30,
       
    },
    bodyInternaloptions:{
        height:'auto',
        width:'100%',
        top:5,
        padding:10,
        backgroundColor: 'rgba(196, 196, 196, 0.3)',
        borderRadius:20,
        
    },
    RadioButtons:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        paddingBottom:10
    },
    bodySlider:{

        top:50,
        height:'auto',
        width:'100%',
        left:5,
    }, 
    
});

export default styles;