import { StyleSheet } from "react-native";

const styles = (props) => StyleSheet.create({
    callout:{
        
        position:'relative',
        width:260,
        height:300,
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
    containerimgs:{

        width:'95%',
        height:'60%',
        marginTop:10,
        borderTopWidth:1,
        borderTopColor:props.color


    }
});
export default styles;
