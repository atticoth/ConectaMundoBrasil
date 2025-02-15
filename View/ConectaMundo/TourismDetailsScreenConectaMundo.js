import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const data = [
  {
    id: 1,
    title: 'Castilho - SP',
    description: 'Descrição Castilho',
    imageUrl: require('../../assets/images/comerc.png'),
    logoUrl: require('../../assets/images/castilho.jpg'),
    screen: 'DetalhesCastilho',
  },
  {
    id: 2,
    title: 'São Paulo - SP',
    description: 'Descrição São Paulo',
    imageUrl: require('../../assets/images/comerc.png'),
    logoUrl: require('../../assets/images/saopaulo.jpg'),
    screen: 'DetalhesSaoPaulo', 
  },
];

export function TourismDetailsScreenConectaMundo() {
  const navigation = useNavigation();

  const handleCardPress = (screen) => {
    navigation.navigate(screen);
  };

  const handleNavigateBack = () => {
    navigation.navigate('AppsNavigate');
  };

  return (
    <LinearGradient
      colors={['#003293', '#00134d', '#3f1048']}
      style={styles.backgroundGradient}
    >
    <View style={styles.container}>
      {/*<GradientBackground />*/}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => handleCardPress(item.screen)}
          >
            <View style={styles.leftColumn}>
              <Image source={item.logoUrl} style={styles.logo} />
            </View>
            <View style={styles.rightColumn}>
              <Text style={styles.title}>{item.title}</Text>
              <Image source={item.imageUrl} style={styles.image} resizeMode="contain" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* Botão NavigateBack */}
      <TouchableOpacity style={styles.navigateBackButton} onPress={handleNavigateBack}>
        <Text style={styles.navigateBackButtonText}>Voltar Seleção Apps</Text>
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
    padding: Dimensions.get('window').width * 0.06,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    marginBottom: Dimensions.get('window').width * 0.06, 
    padding: Dimensions.get('window').width * 0.04, 
    borderWidth: 1,
    borderColor: '#ccc',
  },
  leftColumn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Dimensions.get('window').width * 0.04,
  },
  logo: {
    width: Dimensions.get('window').width * 0.23,
    height: Dimensions.get('window').width * 0.23,
    borderRadius: 42,
  },
  rightColumn: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: Dimensions.get('window').width * 0.02,
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
  image: {
    width: 'auto',
    height: Dimensions.get('window').width * 0.08,
    borderRadius: 1,
    marginTop: 10,
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

export default TourismDetailsScreenConectaMundo;
