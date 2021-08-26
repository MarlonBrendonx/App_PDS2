import { StyleSheet } from "react-native";

const styles = (props) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    
  },
  body:{
    flex:1,
      
  },
  wlpBackground:{

    flex:1,
    marginTop:10,

  },
  titles:{

    //backgroundColor:'red',
    textAlign:'center',
    justifyContent:'center'
    
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
    width:'95%',
    left:5
  },
  textArea:{

    borderWidth:1,
    borderColor:'#B33BF6',
    borderRadius:10,
    textAlignVertical: 'top',
    paddingTop:10,
    paddingLeft:5,
  },
  txtOption:{
    marginTop:26,
    color:'#535454',
    paddingBottom:10
  },
  containerImage:{

    flexDirection:'row',
    width: '100%',
    height: 'auto',
    resizeMode: "contain",
    borderRadius:20,
    padding:6  

},
  btnAddPhoto:{

    height:40,
    justifyContent:'center',
    marginTop:10,
    marginBottom:10,
    alignSelf:'flex-end',
    right:20

  },
  imgsContainer:{

    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    overflow: "hidden",
    borderWidth: 3,  
    borderBottomWidth:1,


  },
  btnAddEvent:{

    backgroundColor:props.color,
    height:50,
    width:'100%',
    justifyContent:'center',
    marginTop:40,
    marginBottom:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40,
    flexDirection:'row',
    

},
iconButtonsubmit:{

    height:30,
    width:30,
    marginLeft:11,

},

});

export default styles;
