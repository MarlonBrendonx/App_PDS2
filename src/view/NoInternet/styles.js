import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    
    container:{

        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
        
    },

    Titles:{

        width:'95%',
        paddingTop:45,
        paddingLeft:25

    },

    txtTitle:{
        
        color:'grey',
        fontSize:40,
        paddingBottom:10,
    },  

    imagegif:{

    }, 

    btnUpdate:{

        width:'75%',
        height:55,
        borderWidth:1,
        borderColor:'#B33BF6',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25,
        

    },
    
    submitTextUpdate:{
        color:'black'
    },

    textExit:{
        color:'#B33BF6'
    },


    btnExit:{

        paddingTop:40

    },

    Buttons:{
        
        flex:1,
        width:'95%',
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:40

    }


});

export default styles;