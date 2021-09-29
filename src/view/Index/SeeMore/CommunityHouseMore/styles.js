import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  img:{
    
    height:320,
    width:'100%'

  },
  body:{
      
      backgroundColor:'white',
      flex:1,
      marginTop:-30,
      borderTopLeftRadius:30,
      borderTopRightRadius:30
  },
  info:{

      width:'95%',
      height:200,
      paddingTop:20
  },
  containerInfo:{
      
     top:20,
     left:10
  },
  indicator:{

    bottom:23,
    
   },

   activeIndicator:{

      backgroundColor:'#5cc5c0',
      height:10,
      width:10
      
   }
});

export default styles;
