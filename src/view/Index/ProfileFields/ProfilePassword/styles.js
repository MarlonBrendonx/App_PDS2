import React from 'react';
import { StyleSheet  } from 'react-native';

const styles = StyleSheet.create({

    
    container:{

        flex:1,
        backgroundColor:'#FFF',
        
    },
    
    body:{

        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center'
        
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
        bottom:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50

    },

    pawArt:{

        height:20,
        width:20

    }
    
});

export default styles;