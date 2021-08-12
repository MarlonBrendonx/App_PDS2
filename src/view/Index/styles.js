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
    backgroundColor: "#CDCDCD",
  },
  drawer_header: {
    flex: 2,
    borderWidth:1,
    borderColor:'#64dcd4',
    paddingTop: 60,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  drawer_body: {
    flex: 6,
    backgroundColor: "#fff",
  },
  viewEmail: {
    
    width: "100%",
    height: 30,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
  },
  text: {
    marginLeft: 0,
    color:"#FFFFFF",
    fontWeight: 'bold'
  },
  user: {
    flexDirection: "row",
    width:'100%', 
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
});

export default styles;
