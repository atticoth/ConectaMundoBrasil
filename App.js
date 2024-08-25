import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoadingScreen } from "./View/LoadingScreen";
import { InitialScreen } from "./View/InitialScreen";
import { TourismDetailsScreen } from "./View/TourismDetailsScreen";
import { DetalhesContagem } from "./View/DetalhesContagem";
import { DetailsScreenContagem } from "./View/DetailsScreenContagem";
import { AtracoesContagem } from "./View/AtracoesContagem";
import { PracadaGloriaTourism } from "./View/PontosTuristicos/Contagem/PracadaGloria";
import { CasadosCacosTourism } from "./View/PontosTuristicos/Contagem/CasadosCacos";
import { CentroCulturalTourism } from "./View/PontosTuristicos/Contagem/CentroCultural";
import { CasadaCulturaTourism } from "./View/PontosTuristicos/Contagem/CasadaCultura";
import { ParqueEcologicoTourism } from "./View/PontosTuristicos/Contagem/ParqueEcologico";
import { QuilomboArturosTourism } from "./View/PontosTuristicos/Contagem/QuilombolaArturos";
import { IgrejaTourism } from "./View/PontosTuristicos/Contagem/IgrejaSaoGoncalo";

import { EmDesenvolvimento } from "./View/EmDesenvolvimento";

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
        <Stack.Screen
          name="PracadaGloriaTourism"
          component={PracadaGloriaTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="CasadosCacosTourism"
          component={CasadosCacosTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="CentroCulturalTourism"
          component={CentroCulturalTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="CasadaCulturaTourism"
          component={CasadaCulturaTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="ParqueEcologicoTourism"
          component={ParqueEcologicoTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="QuilomboArturosTourism"
          component={QuilomboArturosTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="IgrejaTourism"
          component={IgrejaTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />

        <Stack.Screen
          name="EmDesenvolvimento"
          component={EmDesenvolvimento}
          options={{ title: "Detalhes do ponto turístico" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
