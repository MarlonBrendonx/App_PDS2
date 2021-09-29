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
    status:{
        marginTop:7,
    },
    avatar:{

        width:90,
        height:100,
        
       
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
    
    textArea:{
        
        height:105,
        width:'100%',
        right:5,
        textAlignVertical: 'top',
        paddingTop:10,
        paddingLeft:5,
        marginTop:5,
        borderBottomEndRadius:100,

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
