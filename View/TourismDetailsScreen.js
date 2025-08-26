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
    imageUrl: require("../assets/images/pracadagloria.jpg"),
    sponsors: [
      require("../assets/images/NewHolland.png"),
      require("../assets/images/NewHollandConstruction.png"),
      require("../assets/images/CNHCapital.png"),
    ],
    screen: "DetalhesContagem",
  },
  {
    id: 2,
    title: "Água Boa/MT",
    description: "Patrocínio",
    imageUrl: require("../assets/images/aguaBoaIcon.jpeg"),
    sponsors: [
      require("../assets/images/CaseH.png"),
      require("../assets/images/CaseConstruction.png"),
      require("../assets/images/CNHCapital.png"),
    ],
    screen: "DetalhesAguaBoa",
  },
  {
    id: 3,
    title: "Pirassununga/SP",
    description: "Patrocínio",
    imageUrl: require("../assets/images/pirassunungaicon.jpg"),
    sponsors: [require("../assets/images/CompanhiaMullerBebidas.png")],
    screen: "DetalhesPirassununga",
  },
  {
    id: 4, 
    title: "Currais/PI",
    description: "Patrocínio",
    imageUrl: require("../assets/images/currais_cidade.jpg"),
    sponsors: [
      require("../assets/images/NewHolland.png"),
      require("../assets/images/NewHollandConstruction.png"),
      require("../assets/images/CNHCapital.png"),
    ],
    screen: "DetalhesCurrais",
    badge: "2ª edição", 
  },
];

export function TourismDetailsScreen() {
  const navigation = useNavigation();

  const handleCardPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ImageBackground
      source={require("../assets/images/fundo.jpeg")}
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
                <View style={styles.titleRow}>
                  <Text style={styles.title}>{item.title}</Text>
                  {item.badge ? <Text style={styles.badge}>{item.badge}</Text> : null}
                </View>

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
      </View>
    </ImageBackground>
  );
}

const W = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: W * 0.06,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    marginBottom: W * 0.06,
    padding: W * 0.04,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: W * 0.04,
  },
  mainImage: {
    width: W * 0.23,
    height: W * 0.23,
    borderRadius: W * 0.5,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: W * 0.02,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 8,
    flexShrink: 1,
  },
  badge: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "#2563eb",
    color: "#fff",
    overflow: "hidden",
  },
  description: {
    fontSize: 14,
    color: "#888",
  },
  sponsorContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: W * 0.02,
  },
  sponsorLogo: {
    width: W * 0.17,
    height: W * 0.08,
  },
});

export default TourismDetailsScreen;
