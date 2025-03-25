import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";

export default function Home() {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Receitas do Mundo</Text>

      <TextInput
        style={styles.input}
        placeholder="Buscar receita..."
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      <Text style={styles.subtitulo}>Categorias:</Text>
      <Text>🍝 Italiana</Text>
      <Text>🍣 Japonesa</Text>
      <Text>🍛 Indiana</Text>

      <Text style={styles.subtitulo}>Receita em Destaque:</Text>
      <Image
        style={styles.imagem}
        source={require("../../../assets/img/lasanha.jpg")}
      />
      <Text>Lasanha à Bolonhesa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f06161"
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15
  },
  imagem: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginTop: 10
  },
});
