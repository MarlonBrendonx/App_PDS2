import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  text_white: {
    color: "#FFFFFF",
  },
  text_primary: {
    fontSize: 14,
    color: "#3483FA",
  },
  text_secundary: {
    color: "#000",
  },
  drawer_content: {
    flex: 1,
    
  },
  drawer_header: {
    height:'30%',
    justifyContent: "center",
    alignItems: "center",

  },
  drawer_body: {
    flex: 6,
    backgroundColor: "#fff",
  },
  viewEmail: {
    
    width: "100%",
    top:80,
    left:20,
    flexDirection: "row",

  },
  text: {
    marginLeft: 0,
    color:"#FFFFFF",
    fontWeight: 'bold'
  },
  user: {
    top:50,
    flexDirection: "row",
    width:'100%', 
    left:20
  },
  footer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopWidth: 0.5,
    borderTopColor: "#c1c1c1",
    backgroundColor: "#FFF",
  },
  backgroundImg:{

    width:'100%',
    height:'100%',
    backgroundColor: 'rgb(164, 0, 255)' 
  },
  overlay:{
    backgroundColor:'rgba(255,100,10,0.5)',
  }
});

export default styles;
