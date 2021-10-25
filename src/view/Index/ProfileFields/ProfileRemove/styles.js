import React from 'react';
import { StyleSheet  } from 'react-native';

const styles = StyleSheet.create({

    
    container:{

        flex:1,
        backgroundColor:'#FFF',
        
        
    },
    
    body:{

        flex:1,
        alignItems:'center',
     
        
    },

    inputText:{

        height:55,
        width:'72%',
        borderWidth:1,
        borderColor:'#B33BF6',
        borderRadius:20,
        padding:10
        
    },

    btnChange:{

        
        height:51,
        width:'70%',
        backgroundColor:'#B33BF6',
        bottom:0,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        marginTop:20
        
        
    },

    pawArt:{

        height:20,
        width:20

    },
    title:{

        color:'grey',
        fontSize:40,
        paddingBottom:10,
        top:0,
        paddingLeft:20

    }, 
    titleHeader:{

        flex:1,
        width:'95%',
        paddingTop:10
        
        
    },
    imagegif:{
        flex:1,
    },
    footer:{
        
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    }
    
});

export default styles;