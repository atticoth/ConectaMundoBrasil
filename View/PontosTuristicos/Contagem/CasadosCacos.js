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
  Linking,
} from "react-native";

export function CasadosCacosTourism({ navigation }) {
  return (
    <ImageBackground
      source={require("../../../assets/images/fundo.jpeg")}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.content}>
            <Text style={styles.title}>Casa dos Cacos</Text>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../../assets/images/galeria/casadoscacos/casadoscacos2.jpg")}
                style={styles.imageLarge}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.description}>
              Representação simbólica das várias identidades de Contagem, é a
              única em sua tipologia no Brasil. Construção considerada única do
              gênero no Brasil e equiparada à Capela de Ossos, na Igreja de São
              Francisco, em Évora (Portugal), e as criações do arquiteto
              espanhol Gaudí. Foi construída e customizada com mosaicos de louça
              e cerâmica pelo geólogo Carlos Luís de Almeida a partir de1963 até
              sua morte, em 1989.
            </Text>
            <Text style={styles.description}>
              Toda a casa , além de enfeites e alegorias, é feita de cacos
              vindos das mais diversas procedências. As peças formam mosaicos
              nas paredes do imóvel e esculturas de cachorros, cabras e uma
              curiosa elefanta "Fifi". No banheiro da casa, a toalha é feita de
              cacos. Nos quartos, sala, cama, televisão e rádio são revestidos.
              Na sala de jantar, a mesa e o telefone são cobertos com pedaços de
              vidros de várias cores.
            </Text>
            <Text style={styles.description}>
              Consta que alguns cacos seriam do Palácio do Planalto (presente da
              mulher do ex-presidente Ernesto Geisel ao artista). Outro assíduo
              fornecedor de cacos teria sido o proprietário do extinto Café
              Pérola, na Praça 7, em Belo Horizonte. Consta, ainda, que, quando
              vivo, o artista conseguiu divulgar as imagens da casa na imprensa,
              especialmente em programas de televisão, como o do Chacrinha.
            </Text>
            <Text style={styles.description}>
              Ao visitar a casa, em 1976, o ex-presidente Juscelino Kubitschek,
              escreveu: "Meu caro amigo Carlos, ao visitar a sua Casa de Cacos,
              quando aí passei, galvanizou-me o coração sentimental e a alma
              tornou-se imensamente inefável pela elevada beleza inaudita que
              veio estuar-me e encantar-me, deixando-me profundamente
              sensibilizado".
            </Text>
            <Text style={styles.description}>
              A Casa dos Cacos foi adquirida pela Prefeitura de Contagem em 1991
              e tombada conforme decreto 10.445, de 14 de abril de 2000.
            </Text>
            <Text style={styles.description}></Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.firstButton]}
              onPress={() => navigation.navigate("AtracoesContagem")}
            >
              <Text style={styles.buttonText}>Atrações</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.secondButton]}
              onPress={() =>
                Linking.openURL(
                  "https://maps.app.goo.gl/crAT2hSiErrDkYEH8"
                )
              }
            >
              <Text style={[styles.buttonText, styles.secondButtonText]}>
                Localização
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
    justifyContent: "center",
  },

  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Dimensions.get("window").height * 0.01,
    paddingBottom: Dimensions.get("window").height * 0.01,
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
    marginLeft: Dimensions.get("window").width * 0.1,
    marginRight: Dimensions.get("window").width * 0.1,
  },
  description: {
    fontSize: 14,
    textAlign: "justify",
    color: "white",
    marginBottom: Dimensions.get("window").height * 0.03,
    marginLeft: Dimensions.get("window").width * 0.1,
    marginRight: Dimensions.get("window").width * 0.1,
  },
  imageLarge: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.36,
    marginBottom: Dimensions.get("window").height * 0.03,
  },
  buttonContainer: {
    flexDirection: "row",
    width: Dimensions.get("window").width * 0.8,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Dimensions.get("window").height * 0.04,
    marginLeft: "auto",
    marginRight: "auto",
    marginHorizontal: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 1,
    paddingHorizontal: 20,
  },
  firstButton: {
    borderColor: "white",
    borderWidth: 1,
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.31,
  },
  secondButton: {
    backgroundColor: "white",
    borderColor: "#370e43",
    borderWidth: 1,
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.45,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  secondButtonText: {
    color: "#370e43",
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Dimensions.get("window").height * 0.02,
    paddingHorizontal: Dimensions.get("window").width * 0.1,
  },
  imageSmall: {
    width: Dimensions.get("window").width * 0.25,
    height: Dimensions.get("window").height * 0.15,
    marginBottom: Dimensions.get("window").height * 0.01,
  },
});

export default CasadosCacosTourism;
