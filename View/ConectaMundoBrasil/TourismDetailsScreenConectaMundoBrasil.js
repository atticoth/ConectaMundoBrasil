import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 1,
    title: "Contagem/MG",
    description: "Patrocínio",
    imageUrl: require("../../assets/images/pracadagloria.jpg"),
    sponsors: [
      require("../../assets/images/NewHolland.png"),
      require("../../assets/images/NewHollandConstruction.png"),
      require("../../assets/images/CNHCapital.png"),
    ],
    screen: "DetalhesContagem",
  },
  {
    id: 2,
    title: "Água Boa/MT",
    description: "Patrocínio",
    imageUrl: require("../../assets/images/aguaBoaIcon.jpeg"),
    sponsors: [
      require("../../assets/images/CaseH.png"),
      require("../../assets/images/CaseConstruction.png"),
      require("../../assets/images/CNHCapital.png"),
    ],
    screen: "DetalhesAguaBoa",
  },
  {
    id: 3,
    title: "Pirassununga/SP",
    description: "Patrocínio",
    imageUrl: require("../../assets/images/pirassunungaicon.jpg"),
    sponsors: [
      require("../../assets/images/CompanhiaMullerBebidas.png"),
    ],
    screen: "DetalhesPirassununga",
  },
];

export function TourismDetailsScreenConectaMundoBrasil() {
  const navigation = useNavigation();

  const handleCardPress = (screen) => {
    navigation.navigate(screen);
  };

  const handleNavigateBack = () => {
    navigation.navigate('AppsNavigate');
  };

  return (
    <ImageBackground
      source={require("../../assets/images/fundo.jpeg")}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() => handleCardPress(item.screen)}
            >
              <View style={styles.imageContainer}>
                <Image source={item.imageUrl} style={styles.mainImage} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.sponsorContainer}>
                  {item.sponsors.map((sponsor, index) => (
                    <Image
                      key={index}
                      source={sponsor}
                      style={styles.sponsorLogo}
                      resizeMode="contain"
                    />
                  ))}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* Botão NavigateBack */}
        <TouchableOpacity style={styles.navigateBackButton} onPress={handleNavigateBack}>
          <Text style={styles.navigateBackButtonText}>Voltar Seleção Apps</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: Dimensions.get("window").width * 0.06,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    marginBottom: Dimensions.get("window").width * 0.06,
    padding: Dimensions.get("window").width * 0.04,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: Dimensions.get("window").width * 0.04,
  },
  mainImage: {
    width: Dimensions.get("window").width * 0.23,
    height: Dimensions.get("window").width * 0.23,
    borderRadius: Dimensions.get("window").width * 0.5,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: Dimensions.get("window").width * 0.02,
  },
  description: {
    fontSize: 14,
    color: "#888",
  },
  sponsorContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").width * 0.02,
  },
  sponsorLogo: {
    width: Dimensions.get("window").width * 0.17,
    height: Dimensions.get("window").width * 0.08,
  },
  navigateBackButton: {
    backgroundColor: '#003293',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  navigateBackButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TourismDetailsScreenConectaMundoBrasil;
