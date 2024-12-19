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
  imagem1: require("../../assets/images/galeria/pracadagloria/pracadagloria6.jpg"),
  imagem2: require("../../assets/images/galeria/pracadagloria/pracadagloria5.jpg"),
  imagem3: require("../../assets/images/galeria/pracadagloria/pracadagloria4.jpg"),
  imagem4: require("../../assets/images/galeria/pracadagloria/pracadagloria7.jpg"),

  imagem5: require("../../assets/images/galeria/casadoscacos/casadoscacos.jpg"),
  imagem6: require("../../assets/images/galeria/casadoscacos/casadoscacos8.jpg"),
  imagem7: require("../../assets/images/galeria/casadoscacos/casadoscacos4.jpg"),
  imagem8: require("../../assets/images/galeria/casadoscacos/casadoscacos7.jpg"),

  imagem9: require("../../assets/images/galeria/pqecologico/pqecologico6.jpg"),
  imagem10: require("../../assets/images/galeria/pqecologico/pqecologico8.jpg"),
  imagem11: require("../../assets/images/galeria/pqecologico/pqecologico7.jpg"),
  imagem12: require("../../assets/images/galeria/pqecologico/pqecologico3.jpg"),

  imagem13: require("../../assets/images/galeria/igreja/igreja6.jpg"),
  imagem14: require("../../assets/images/galeria/igreja/igreja2.jpg"),
  imagem15: require("../../assets/images/galeria/igreja/igreja3.jpg"),
  imagem16: require("../../assets/images/galeria/igreja/igreja.jpg"),

  imagem17: require("../../assets/images/galeria/quilomboarturos/quilomboarturos7.jpg"),
  imagem18: require("../../assets/images/galeria/quilomboarturos/quilomboarturos8.jpg"),
  imagem19: require("../../assets/images/galeria/quilomboarturos/quilomboarturos.jpg"),
  imagem20: require("../../assets/images/galeria/quilomboarturos/quilomboarturos6.jpg"),

  imagem21: require("../../assets/images/galeria/casadacultura/casadacultura2.jpg"),
  imagem22: require("../../assets/images/galeria/casadacultura/casadacultura.jpg"),
  imagem23: require("../../assets/images/galeria/casadacultura/casadacultura7.jpg"),
  imagem24: require("../../assets/images/galeria/casadacultura/casadacultura8.jpg"),

  imagem25: require("../../assets/images/galeria/centrocultural/centrocultural.jpg"),
  imagem26: require("../../assets/images/galeria/centrocultural/centrocultural9.jpg"),
  imagem27: require("../../assets/images/galeria/centrocultural/centrocultural7.jpg"),
  imagem28: require("../../assets/images/galeria/centrocultural/centrocultural4.jpg"),
};

export const AtracoesContagem = ({ navigation }) => {
  const windowWidth = useWindowDimensions().width;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (imageKey) => {
    setSelectedImage(images[imageKey]);
    setModalVisible(true);
  };

  const renderImages = () => {
    const renderedImages = [];

    for (let i = 1; i <= 28; i++) {
      let textToRender = "";

      if (i === 1) {
        (textToRender = "Praça da Glória"), i;
      } else if (i === 5) {
        textToRender = "Casa dos Cacos";
      } else if (i === 9) {
        textToRender = "Parque Ecológico Fernão Dias";
      } else if (i === 13) {
        textToRender = "Igreja São Gonçalo";
      } else if (i === 17) {
        textToRender = "Centro Quilombola dos Arturos";
      } else if (i === 21) {
        textToRender = "Casa da Cultura Nair Mendes Moreira";
      } else if (i === 25) {
        textToRender = "Centro Cultural";
      } else {
        textToRender = "";
      }

      if ((i - 1) % 4 === 0) {
        renderedImages.push(
          <Text
            key={`text_${i}`}
            style={{
              color: "white",
              fontSize: 18,
              textAlign: "center",
              fontWeight: "100",
              marginTop: Dimensions.get("window").height * 0.1,
              marginBottom: Dimensions.get("window").height * 0.03,
              width: "100%",
            }}
          >
            {textToRender}
          </Text>
        );
      }

      renderedImages.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleImagePress(`imagem${i}`)}
        >
          <Image
            source={images[`imagem${i}`]}
            style={{
              width: windowWidth * 0.42,
              height: windowWidth * 0.3,
              marginBottom: windowWidth * 0.05, // 5% da largura da tela
              marginRight: "2.7%",
              marginLeft: "2.7%",
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      );
    }
    return renderedImages;
  };

  return (
    <ImageBackground
      source={require("../../assets/images/fundo.jpeg")}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Galeria de imagens Contagem - MG</Text>

        <Modal
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                position: "absolute",
                top: "10%",
                right: "10%",
                zIndex: 1,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 18, textAlign: "right" }}
              >
                Fechar
              </Text>
            </TouchableOpacity>
            <Image
              source={selectedImage}
              style={{
                width: "80%",
                height: "80%",
                resizeMode: "contain",
                zIndex: 0,
              }}
            />
          </View>
        </Modal>
        <ScrollView
          style={{
            marginVertical: "5%",
            marginLeft: "2.5%",
            marginRight: "2.5%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {renderImages()}
          </View>
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
            onPress={() => navigation.navigate("DetailsScreenContagem")}
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
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Dimensions.get("window").height * 0.005,
    paddingBottom: Dimensions.get("window").height * 0.02,
  },
  title: {
    fontSize: 35,
    textAlign: "center",
    color: "white",
    marginTop: Dimensions.get("window").height * 0.05,
    fontWeight: "100",
    textShadowColor: "rgba(55, 14, 67, 1)",
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 5,
    marginLeft: Dimensions.get("window").width * 0.03,
    marginRight: Dimensions.get("window").width * 0.03,
  },
  subtitle: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
    marginBottom: Dimensions.get("window").height * 0.1,
    marginTop: Dimensions.get("window").height * 0.05,
    fontWeight: "100",
    textShadowColor: "rgba(55, 14, 67, 1)",
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 5,
    marginLeft: Dimensions.get("window").width * 0.03,
    marginRight: Dimensions.get("window").width * 0.03,
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
});

export default AtracoesContagem;
