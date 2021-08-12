import React from 'react';
import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({

    map:{

        flex:1 

    },
    avatar:{

        width:54,
        height:54,
        borderRadius:4,
        borderWidth:4,
        borderColor:'#FFF'

    },

    callout:{

        width:260,
    },

    devname:{

        fontWeight:'bold',
        fontSize:16,
        
    },

    devbio:{
        color:'#666',
        marginTop:3,
    },
    devtest:{
        marginTop:5,
    },

    form:{
        
     
        position:'absolute',
        bottom:20,
        height:50,
        left:10,
        right:10,
        zIndex:5,
        width:'93%',

        flexDirection:'row'
      
        
        
    },
    
    searchInput:{

        flex:1,
        height:50,
        backgroundColor:'#FFF',
        color:'#333',
        borderRadius:25,
        paddingHorizontal:10,
        fontSize:16,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:4,
            height:4,
        },
        elevation:2,
        borderBottomWidth: 0
        
        
    },

    loadbutton:{

        width:50,
        height:50,
        backgroundColor:'#8D4EFF',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:15,

    },
    searchSection: {
        flex: 1,
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
    
    searchIcon: {

        padding: 10,
        color: '#B33BF6',
        paddingLeft:15,
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
    searchIcon2:{
      
        padding:15,
        backgroundColor:'#B33BF6',
        color: 'white',
        borderRadius:9,
        
    },

    /********** Seção do topo  **************************/

    topSection:{
        
     
        position:'absolute',
        top:35,
        height:50,
        left:'77%',
        right:10,
        zIndex:5,
        width:'20%',
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'flex-end'
        
        
    },
    btnBell:{

        padding:15,
        borderRadius:9,
        
    },
    locationSection:{
        
        position:'absolute',
        bottom:100,
        height:50,
        left:'77%',
        right:0,
        zIndex:5,
        width:'20%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        

    },

    btnMylocation:{

        height:50,
        width:50,
        backgroundColor:'white',
        borderRadius:30,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:4,
            height:4,
        },
        elevation:3,
        alignItems:'center',
        justifyContent:'center',
        
    },
    mylocationIcon:{

        height:10,
        width:20

    },

    topMenuSection:{

        position:'absolute',
        top:35,
        left:10,
 
    },

    MenuIcon:{
        height:25,
        width:25
    }

});

export default styles;