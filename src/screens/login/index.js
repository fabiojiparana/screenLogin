import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard
} from "react-native";

import styles from "./styles";

export default function Login() {
  const [offSet] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.Value(220));

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShow
    );
    keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHide
    );

    Animated.parallel([
      Animated.spring(offSet.y, {
        toValue: 0,
        speed: 5,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300
      })
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo, {
        toValue: 70,
        duration: 100
      })
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo, {
        toValue: 220,
        duration: 100
      })
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
        <Animated.Image
          style={{
            width: logo,
            resizeMode: "contain"
          }}
          source={require("../../../assets/login.png")}
        ></Animated.Image>
      </View>

      <Animated.View
        style={[
          styles.inputContainer,
          {
            opacity: opacity,
            transform: [{ translateY: offSet.y }]
          }
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Login"
          autoCorrect={false}
          onChangeText={() => {}}
        ></TextInput>

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          secureTextEntry
          onChangeText={() => {}}
        ></TextInput>

        <TouchableOpacity style={styles.buttonSubmit}>
          <Text style={styles.buttonSubmitText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.buttonRegisterText}>Crie sua conta</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
