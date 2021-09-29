import { StyleSheet } from "react-native";

const styles = (props) => StyleSheet.create({
    callout:{
        
        position:'relative',
        width:300,
        height:230,
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

        width:150,
        height:150,
        
       
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
        
        width:'100%',
        height:200,
        paddingLeft:10,
       

    },
    containerimgs:{

        width:'95%',
        height:'60%',
        marginTop:10,
        borderTopWidth:1,
        borderTopColor:props.color


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
