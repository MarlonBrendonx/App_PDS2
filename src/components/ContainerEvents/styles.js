import { StyleSheet } from "react-native";

const styles = (props) => StyleSheet.create({
    

    containerElement:{

        width:'19%',
        height:'100%',
        borderWidth:2,
        borderColor:props.color,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
    
    },
    btnOption:{

        width:150,
        height:'100%',
        alignItems:'center',
        
        
    },
    icon:{

       
    },
    ContainerEvents:{

        height:110,
        width:110,
    
    }
  
});
export default styles;
