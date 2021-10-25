import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  user_profile: {
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: "#CDCDCD",
    marginRight: 10,
    overflow: "hidden",
    
  },
  centeredView: {
    height:'60%',
    width:'95%',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: 'rgba(255,255, 246, 0.8)',

    borderRadius:30
  },
  modalView: {

    margin: 0,
    backgroundColor: "transparent",
    borderRadius: 20,
    padding: 10,
    height:'90%',
    width:'95%',
    alignItems: "center",
 
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  footerbtn:{
    

    marginTop:50,
    flexDirection:'row',
    width:'80%',
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    borderWidth:1,
    borderColor:'#B33BF6'

  },

  photo:{
    width:200,
    height:200,
    borderRadius:100 
  },
  chooseImage:{

    position:'absolute',
    alignSelf:'flex-end',
    right:25,
    bottom:0,
    borderWidth:1,
    padding:10,
    borderRadius:25,
    borderColor:'transparent',
    backgroundColor:'white'
  }
});

export default styles;
