import React from 'react';
import { StyleSheet  } from 'react-native';

const styles = StyleSheet.create({

    
    container:{

        flex:1,
        backgroundColor:'#FFF',
        
    },
    
    body:{

        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
        
    },

    inputText:{

        height:50,
        width:'70%',
        borderBottomWidth:2,
        borderBottomColor:'#B33BF6'

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