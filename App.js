import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoadingScreen } from "./View/LoadingScreen";
import { TourismDetailsScreen } from "./View/TourismDetailsScreen";

import { DetalhesContagem } from "./View/DetalhesContagem";
import { DetalhesAguaBoa } from "./View/DetalhesAguaBoa";

import { DetalhesPirassununga } from "./View/DetalhesPirassununga";
import { DetailsScreenContagem } from "./View/DetailsScreenContagem";

import { DetailsScreenAguaBoa } from "./View/DetailsScreenAguaBoa";
import { DetailsScreenPirassununga } from "./View/DetailsScreenPirassununga";

import { AtracoesContagem } from "./View/AtracoesContagem";
import { AtracoesAguaBoa } from "./View/AtracoesAguaBoa";
import { AtracoesPirassununga } from "./View/AtracoesPirassununga";

import { PracadaGloriaTourism } from "./View/PontosTuristicos/Contagem/PracadaGloria";
import { CasadosCacosTourism } from "./View/PontosTuristicos/Contagem/CasadosCacos";
import { CentroCulturalTourism } from "./View/PontosTuristicos/Contagem/CentroCultural";
import { CasadaCulturaTourism } from "./View/PontosTuristicos/Contagem/CasadaCultura";
import { ParqueEcologicoTourism } from "./View/PontosTuristicos/Contagem/ParqueEcologico";
import { QuilomboArturosTourism } from "./View/PontosTuristicos/Contagem/QuilombolaArturos";
import { IgrejaTourism } from "./View/PontosTuristicos/Contagem/IgrejaSaoGoncalo";

import { ParqueIpesTourism } from "./View/PontosTuristicos/AguaBoa/ParqueIpes";
import { ParoquiaTourism } from "./View/PontosTuristicos/AguaBoa/Paroquia";
import { PracaCulturaTourism } from "./View/PontosTuristicos/AguaBoa/PracaCultura";
import { PracaLazerTourism } from "./View/PontosTuristicos/AguaBoa/PracaLazer";
import { LagoaBuritisTourism } from "./View/PontosTuristicos/AguaBoa/LagoaBuritis";

import { CidadeTourism } from "./View/PontosTuristicos/Pirassununga/Cidade";
import { EmasTourism } from "./View/PontosTuristicos/Pirassununga/Emas";
import { PracaTourism } from "./View/PontosTuristicos/Pirassununga/Praca";
import { SantuarioTourism } from "./View/PontosTuristicos/Pirassununga/Santuario";
import { TherenceTourism } from "./View/PontosTuristicos/Pirassununga/Therence";

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
          name="DetalhesAguaBoa"
          component={DetalhesAguaBoa}
          options={{ title: "Detalhes" }}
        />
        <Stack.Screen
          name="DetalhesPirassununga"
          component={DetalhesPirassununga}
          options={{ title: "Detalhes" }}
        />
        <Stack.Screen
          name="DetailsScreenContagem"
          component={DetailsScreenContagem}
          options={{ title: "Pontos Turísticos" }}
        />
        <Stack.Screen
          name="DetailsScreenAguaBoa"
          component={DetailsScreenAguaBoa}
          options={{ title: "Pontos Turísticos" }}
        />
        <Stack.Screen
          name="DetailsScreenPirassununga"
          component={DetailsScreenPirassununga}
          options={{ title: "Pontos Turísticos" }}
        />
        <Stack.Screen
          name="AtracoesContagem"
          component={AtracoesContagem}
          options={{ title: "Atrações Turísticos" }}
        />
        <Stack.Screen
          name="AtracoesAguaBoa"
          component={AtracoesAguaBoa}
          options={{ title: "Atrações Turísticos" }}
        />
        <Stack.Screen
          name="AtracoesPirassununga"
          component={AtracoesPirassununga}
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
          name="ParqueIpesTourism"
          component={ParqueIpesTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="ParoquiaTourism"
          component={ParoquiaTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="PracaCulturaTourism"
          component={PracaCulturaTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="PracaLazerTourism"
          component={PracaLazerTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="LagoaBuritisTourism"
          component={LagoaBuritisTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="CidadeTourism"
          component={CidadeTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="EmasTourism"
          component={EmasTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="PracaTourism"
          component={PracaTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="SantuarioTourism"
          component={SantuarioTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TherenceTourism"
          component={TherenceTourism}
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
