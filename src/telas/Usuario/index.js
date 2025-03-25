import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Usuario() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, Usuário!</Text>

      <Image
        style={styles.avatar}
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
      />

      <Text style={styles.subtitulo}>📚 Receitas Favoritas:</Text>
      <Text>🍕 Pizza Margherita</Text>
      <Text>🥗 Salada Grega</Text>
      <Text>🍜 Ramen Japonês</Text>

      <Text style={styles.subtitulo}>📝 Minhas Receitas:</Text>
      <Text>🥞 Panquecas Americanas</Text>
      <Text>🥖 Pão Francês</Text>
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
  avatar: {
    width: 100,
    height: 100, borderRadius: 50,
    marginBottom: 15
  },
});
