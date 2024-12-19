import * as React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function DetalhesAguaBoa({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/images/fundo.jpeg")}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Água Boa - MT</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/coracao_ab_julho.jpg")}
              style={styles.imageLarge}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.description}>
          Água Boa é um município do Mato Grosso conhecida como Vale do Araguaia, por seu desenvolvimento ordenado e sua qualidade de vida acima da média, sendo conhecida por sua enorme quantidade de gado, além de se projetar no setor da agricultura (soja e milho) e na diversificação produtiva como a do ramo arbóreo com as culturas da teca e da seringueira, bem como setores consideráveis na piscicultura, na bacia leiteira e no trabalho do pequeno produtor familiar.
          </Text>
          <Text style={styles.subscription}>
          Cidade pacata de ruas largas e urbanização planejada, palco de uma constante expansão física e estrutural, com 100% das vias dotadas de asfalto, meio fio e iluminação, além de pontos estratégicos como praças de lazer, esporte e cultura, academias públicas ao ar livre e roteiros calçados para caminhada, sendo cenário de uma arquitetura moderna, tanto dos prédios públicos quanto das residências privadas, gerando a apreciação de moradores e visitantes.
          </Text>
          <Text style={styles.subscription}>
          Dentre as festividades e eventos sociais, se destacam na cidade o Carnaval Municipal, Páscoa, as festas Juninas de escolas e comunidades rurais, Grupo Junino de Quadrilha, Expo Geek, Dia dos Pais com pescaria entre pais e filhos, Miss Água Boa, Desfile Cívico Municipal, EXPOVALE, Natal Iluminado e diversas promoções de entidades ao longo do ano.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.firstButton]}
            onPress={() => navigation.navigate("AtracoesAguaBoa")}
          >
            <Text style={styles.buttonText}>Atrações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.secondButton]}
            onPress={() => navigation.navigate("DetailsScreenAguaBoa")}
          >
            <Text style={[styles.buttonText, styles.secondButtonText]}>
              Pontos Turísticos
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20, // Adiciona espaçamento ao redor do conteúdo
  },
  content: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    textAlign: "center",
    color: "white",
    marginBottom: 10,
    fontWeight: "100",
    textShadowColor: "rgba(55, 14, 67, 1)",
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 5,
    width: "100%",
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
    color: "white",
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 10,
  },
  subscription: {
    fontSize: 16,
    textAlign: "justify",
    color: "white",
    marginBottom: 10,
    width: "100%",
    paddingHorizontal: 10,
  },
  imageLarge: {
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").height * 0.3,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  firstButton: {
    borderColor: "white",
    borderWidth: 1,
    height: 50,
    width: Dimensions.get("window").width * 0.4,
  },
  secondButton: {
    backgroundColor: "white",
    borderColor: "#370e43",
    borderWidth: 1,
    height: 50,
    width: Dimensions.get("window").width * 0.4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  secondButtonText: {
    color: "#370e43",
  },
});

export default DetalhesAguaBoa;
