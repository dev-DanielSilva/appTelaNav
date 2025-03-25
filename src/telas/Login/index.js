import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  Animated,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Login({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }));
  const [opac] = useState(new Animated.Value(0));
  const [nome, setNome] = useState("");

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opac, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ImageBackground
      source={require("../../../assets/img/fundo2.jpg")}
      style={styles.imgBg}
    >
      <KeyboardAvoidingView style={styles.background} behavior="padding">
        <View style={styles.logo}>
          <Image
            style={{ width: 200, height: 200, borderRadius: 200 }}
            resizeMode="contain"
            source={require("../../../assets/img/logo.png")}
          />
        </View>

        <Animated.View
          style={[
            styles.formulario,
            {
              opacity: opac,
              transform: [{ translateY: offset.y }],
            },
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            onChangeText={setNome}
          />

          <View style={styles.viewBotao}>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate("Usuario", { nome })}
            >
              <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 1,
    justifyContent: "center",
  },
  formulario: {
    flex: 1,
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginTop: -50,
  },
  input: {
    backgroundColor: "#FFF",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    width: "90%",
  },
  viewBotao: {
    width: "90%",
    borderRadius: 7,
  },
  botao: {
    backgroundColor: "#af190d",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    padding: 10,
  },
  textoBotao: {
    color: "#FFF",
    fontSize: 18,
  },
  botaoRecuperar: {
    marginTop: 15,
  },
  textoRecuperar: {
    color: "#FFF",
  },
  imgBg: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    backgroundColor: "#000",
  },
});
