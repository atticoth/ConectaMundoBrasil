import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  Modal,
  Image,
} from "react-native";

const images = {
  imagem1: require("../assets/images/arco_foto1.jpg"),

  // imagem5: require("../assets/images/pracadagloria.jpg"),

  // imagem9: require("../assets/images/pracadagloria.jpg"),

  imagem13: require("../assets/images/nossa_senhora_da_luz.jpg"),

  imagem17: require("../assets/images/padroeiro_bom_jesus.jpg"),

  imagem21: require("../assets/images/pacifico_cavalcante_1.jpeg"),
};

export const AtracoesCurrais = ({ navigation }) => {
  const windowWidth = useWindowDimensions().width;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (imageKey) => {
    setSelectedImage(images[imageKey]);
    setModalVisible(true);
  };

  const renderImages = () => {
    const sections = [
      { title: "Mirante do Arco da Pedra", key: "imagem1" },
      { title: "Mirante do Baixão do Caldeirão", key: "imagem5" },
      { title: "Passagem Molhada do Pará", key: "imagem9" },
      { title: "Nossa Senhora Aparecida da Luz", key: "imagem13" },
      { title: "Padroeiro Bom Jesus da Lapa", key: "imagem17" },
      { title: "Pacífico Cavalcante", key: "imagem21" },
    ];

    return sections.map((sec, idx) => {
      if (!images[sec.key]) return null;

      return (
        <View key={`sec_${idx}`} style={styles.section}>
          <Text style={styles.sectionTitle}>{sec.title}</Text>
          <TouchableOpacity onPress={() => handleImagePress(sec.key)}>
            <Image
              source={images[sec.key]}
              style={{
                width: windowWidth * 0.9,
                height: windowWidth * 0.55,
                borderRadius: 12,
                alignSelf: "center",
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      );
    });
  };

  return (
    <ImageBackground
      source={require("../assets/images/fundo.jpeg")}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Galeria de imagens Currais - PI</Text>

        <Modal
          visible={modalVisible}
          transparent
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackdrop}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.modalClose}
            >
              <Text style={styles.modalCloseText}>Fechar</Text>
            </TouchableOpacity>
            <Image source={selectedImage} style={styles.modalImage} />
          </View>
        </Modal>

        <ScrollView style={styles.scroll}>
          <View>{renderImages()}</View>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.firstButton]}
            onPress={() => navigation.navigate("TourismDetailsScreen")}
          >
            <Text style={styles.buttonText}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.secondButton]}
            onPress={() => navigation.navigate("DetailsScreenCurrais")}
          >
            <Text style={[styles.buttonText, styles.secondButtonText]}>
              Mais detalhes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "space-between" },
  title: {
    fontSize: 35,
    textAlign: "center",
    color: "white",
    marginTop: Dimensions.get("window").height * 0.05,
    fontWeight: "100",
    textShadowColor: "rgba(55, 14, 67, 1)",
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 5,
    marginHorizontal: Dimensions.get("window").width * 0.03,
  },
  scroll: {
    marginVertical: 16,
    marginHorizontal: 10,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "100",
    marginBottom: 12,
  },

  buttonContainer: {
    flexDirection: "row",
    width: Dimensions.get("window").width * 0.8,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Dimensions.get("window").height * 0.04,
    marginLeft: "auto",
    marginRight: "auto",
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
    width: Dimensions.get("window").width * 0.33,
  },
  secondButton: {
    backgroundColor: "white",
    borderColor: "#370e43",
    borderWidth: 1,
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.43,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  secondButtonText: {
    color: "#370e43",
    textAlign: "center",
  },

  modalBackdrop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalClose: { position: "absolute", top: "10%", right: "10%", zIndex: 1 },
  modalCloseText: { color: "white", fontSize: 18, textAlign: "right" },
  modalImage: { width: "80%", height: "80%", resizeMode: "contain", zIndex: 0 },
});

export default AtracoesCurrais;
