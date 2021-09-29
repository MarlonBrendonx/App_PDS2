import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  body:{
    flex:1,
    width:'100%',
    marginTop:-25,
    backgroundColor:'white',
    borderTopRightRadius:32,
    borderTopLeftRadius:32,
  
    
  },
  containerImage:{
    
    height:'50%',
    width:'100%',
    
    justifyContent:'center',
    alignItems:'center',
    

  },
  img:{
    
    width:'100%',
    height:'100%',
   
  },
  atributes:{

    width:'95%',
    height:140,
    left:10,
    paddingTop:10,
    borderBottomWidth:1,
    borderColor:'#FAAB64',
    paddingBottom:15
  },
  info:{

    paddingTop:10,
  

  },
  textArea:{
    height:150,
    width:'95%',
    left:10,
    right:5,
  
    textAlignVertical: 'top',
  },
  status:{
    paddingTop:20,
    flexDirection:'row',
    left:10
  },
  containerUser:{
    flexDirection:'row',
    paddingBottom:30,
    alignItems:'center',
    paddingLeft:10,
    
  },
  imgUser:{
    height:50,
    width:50,
    borderRadius:40
  },
  containerUserInfo:{

    paddingLeft:10,
    flexDirection:'column',
    
  },
  containerBtn:{

    alignSelf:'center',
    position:'absolute',
    bottom:20,
    width:'95%',
    

  },
  btnResolve:{
    height:50,
    width:'95%',
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:"center",
    borderRadius:25
  },
  containerResolve:{
    paddingLeft:5,
    paddingTop:15
  },
  containerInfo:{
    paddingTop:20,
    left:10
  },
  carousel: {
    flexGrow: 0,
    height: '100%',
   },
   indicator:{

    bottom:23,
   },

   activeIndicator:{

      backgroundColor:'red',
      height:10,
      width:10
      
   }
});

export default styles;
