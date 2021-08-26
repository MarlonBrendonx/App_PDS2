import { StyleSheet } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import { shadow } from "react-native-paper";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    
  },

  titles:{

    //backgroundColor:'red',
    textAlign:'center',
    justifyContent:'center'
    
  },

  wlpBackground:{
    flex:1,
    marginTop:10,
    
   
  },
  txtTitle:{

    height:50,
    paddingTop:20,
    width:'80%',
    fontSize:20,
    fontWeight:'bold',
    color:'#535454',
    left:10,
 

  },
  txtTitle2:{

    color:'#B33BF6',
    fontSize:23,
    fontWeight:'bold',
    left:10,
    
  },
  body:{

    flex:1,
    justifyContent:'center',
    alignItems:'center',
      
      
  },
  optionsEvent:{

    top:19,
    height:50,
    width:'95%',
    borderBottomWidth:1,
    borderColor:'#B33BF6',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:"row",
    justifyContent:'space-between'

  },

containerOptions:{

    marginTop:20,
    height:'auto',
    width:'95%',
    

},

Optiontitle:{
    fontSize:15
},
textArea:{

    borderWidth:1,
    borderColor:'#B33BF6',
    borderRadius:10,
    textAlignVertical: 'top',
    paddingTop:10,
},
txtOption:{

    marginTop:26,
    color:'#535454',
    paddingBottom:10

},
btnAddPhoto:{

    height:40,
    width:'60%',
    justifyContent:'center',
    marginTop:10,
    marginBottom:10,
    alignSelf:'flex-end',
    right:20

},

btnAddEvent:{

    backgroundColor:'#faab64',
    height:50,
    width:'95%',
    justifyContent:'center',
    marginTop:10,
    marginBottom:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40,
    flexDirection:'row'

},

containerImage:{

    flexDirection:'row',
    width: '94%',
    height: 'auto',
    resizeMode: "contain",
    borderRadius:20,
    padding:6  

},
imgsContainer:{

    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    overflow: "hidden",
    borderWidth: 3,

    
    borderBottomWidth:1,
  

},

iconButtonsubmit:{

    height:30,
    width:30,
    marginLeft:11,

},
//------------------Picker--------------------------------
pickerField:{
    top:20,
    width:'94%',
    height:'auto',
    fontWeight:'bold'

}
  
});

export default styles;
