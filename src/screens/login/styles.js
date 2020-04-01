import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#56D7BC",
    alignItems: "center",
    justifyContent: "center"
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center"
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 15,
    paddingBottom: 50
  },
  input: {
    width: "95%",
    padding: 10,
    borderWidth: 0.5,
    borderColor: "#56D7BC",
    backgroundColor: "#fff",
    borderRadius: 4,
    marginVertical: 5,
    color: "#56D7BC",
    fontSize: 17
  },
  buttonSubmit: {
    backgroundColor: "#209D7D",
    width: "95%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7
  },
  buttonSubmitText: {
    color: "#fff",
    fontSize: 17
  },
  buttonRegister: {
    width: "85%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    borderColor: "#56D7BC",
    borderWidth: 0.5,
    marginTop: 10
  },
  buttonRegisterText: {
    fontSize: 17,
    color: "#FFF"
  }
});

export default styles;
