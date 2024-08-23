import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoadingScreen } from "./View/LoadingScreen";
import { InitialScreen } from "./View/InitialScreen";
import { TourismDetailsScreen } from "./View/TourismDetailsScreen";
import { DetalhesContagem } from "./View/DetalhesContagem";
import { DetailsScreenContagem } from "./View/DetailsScreenContagem";
import { AtracoesContagem} from './View/AtracoesContagem';
import { PracadaGloriaTourism} from './View/PontosTuristicos/Contagem/PracadaGloria';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InitialScreen"
          component={InitialScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TourismDetailsScreen"
          component={TourismDetailsScreen}
          options={{ title: "Cidades" }}
        />
        <Stack.Screen
          name="DetalhesContagem"
          component={DetalhesContagem}
          options={{ title: "Detalhes" }}
        />
        <Stack.Screen
          name="DetailsScreenContagem"
          component={DetailsScreenContagem}
          options={{ title: "Pontos Turísticos" }}
        />
        <Stack.Screen
          name="AtracoesContagem"
          component={AtracoesContagem}
          options={{ title: "Atrações Turísticos" }}
        />
        <Stack.Screen name="PracadaGloriaTourism" component={PracadaGloriaTourism} options={{ title: 'Detalhes do ponto turístico' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
