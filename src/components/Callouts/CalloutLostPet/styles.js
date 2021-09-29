import { StyleSheet } from "react-native";

const styles = (props) => StyleSheet.create({
    callout:{
        
        position:'relative',
        width:300,
        height:210,
        borderRadius:20,
        backgroundColor:'#FFF'
    },

    devname:{

        fontWeight:'bold',
        fontSize:16,
        color:'#FFF'
    },

    devbio:{
        color:'#000',
        marginTop:7,
    },
    devtest:{
        marginTop:7
    },
    
    avatar:{

        marginTop:10,
        width:90,
        height:90,
        borderRadius:30,
        marginRight:20
    },
    headercallout:{

        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:props.color,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    body:{

        flex:1,
        paddingLeft:10

    },
  
    btnMore:{

        width:'10%',
        height:30,
        alignSelf:'center',
        marginTop:20,
        borderRadius:20,
        right:0,
        alignSelf:'flex-end'

        
        
    }
});
export default styles;
