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

export function DetalhesPirassununga({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/images/fundo.jpeg")}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Pirassununga - SP</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/images/pracaconseheiroprado.jpg")}
              style={styles.imageLarge}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.description}>
          Pirassununga, localizada no interior do estado de São Paulo, possui uma história rica e antiga, cuja origem remonta à época dos bandeirantes. Seu nome tem raízes indígenas, originando-se do termo tupi "pira" (peixe) e "sununga" (barulho), significando “som do peixe” ou "peixe barulhento", referência às águas do rio Mogi Guaçu, onde o movimento das águas e dos peixes eram destacados pelos habitantes originários.
          </Text>
          <Text style={styles.subscription}>
            Fundada oficialmente em 6 de agosto de 1823, Pirassununga começou como um pequeno povoado, e seu desenvolvimento foi impulsionado pelo cultivo de café e pela pecuária no finaldo século XIX. A expansão da ferrovia também foi essencial para o crescimento econômico da cidade, facilitando o transporte de produtos agrícolas para os grandes centros. Com o passar dos anos, a cidade se tornou um polo agropecuário, abrangendo também a produção de cana-de-açúcar, um importante conjunto até os dias de hoje.
          </Text>
          <Text style={styles.subscription}>
          Um dos marcos de Pirassununga é sua relação com as Forças Armadas. A cidade abriga a Academia da Força Aérea (AFA), um dos principais centros de formação de oficiais da Aeronáutica do Brasil. A presença da AFA tornou a cidade um ponto de referência para a aviação militar brasileira e contribuiu significativamente para a economia e a cultura local, realizando eventos anuais, como a Esquadrilha da Fumaça, que atraem turistas e entusiastas da aviação.
          </Text>
          <Text style={styles.subscription}>
          Culturalmente, Pirassununga se destaca por suas tradições, inclusive pela cachaça, pois desde a chegada dos imigrantes europeus no Brasil, é fabricada na região. O grande movimento de imigrantes vindos para o Brasil ocorreu por volta de 1820 a 1830. Inicialmente os italianos foram trabalhar no interior de São Paulo, na cultura do café. Logo montaram seus alambiques em Pirassununga e produziram para o consumo próprio. Vendiam eventualmente, mas a fama da cachaça e dos alambiques de Pirassununga logo se alastrou pelo país. Muitas famílias produziam cachaça e vendiam a comerciantes das cidades vizinhas para a revenda.
          </Text>
          <Text style={styles.subscription}>
          Dessa forma, surgiram mais de cem marcas de cachaça em Pirassununga por volta de 1920. A cidade possui uma imensidão de marcas, e já era conhecida como “a Terra da Cachaça”. As cachaças eram todas feitas em alambique e os produtores vendiam suas produções a granel para revenda
          </Text>
          <Text style={styles.subscription}>
          Com a evolução do mercado, comerciantes mais experientes foram surgindo e em 1959 surge a 51, já com a família Müller. Desde então, Pirassununga passou a ser a conhecida pela 51 e pela cachaça de maior escala, produzida em colunas de destilação, porém, seus alambiques e famílias produtoras permaneceram ativas.
          </Text>
          <Text style={styles.subscription}>
          Assim, Pirassununga ficou sendo o lugar onde é “uma boa ideia”.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.firstButton]}
            onPress={() => navigation.navigate("AtracoesPirassununga")}
          >
            <Text style={styles.buttonText}>Atrações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.secondButton]}
            onPress={() => navigation.navigate("DetailsScreenPirassununga")}
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

export default DetalhesPirassununga;
