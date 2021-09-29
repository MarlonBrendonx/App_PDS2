import { StyleSheet } from "react-native";

const styles = (props) => StyleSheet.create({
    

    containerElement:{

        width:'19%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    
    },
    btnOption:{

        width:150,
        height:'100%',
        alignItems:'center',
        
        
    },
    ContainerEvents:{

        height:110,
        width:110,
    
    },
    icon:{

        height:props.height,
        width:props.width,
        marginTop:10,
        left:props.left ? 10 : 0

    }
  
});
export default styles;
