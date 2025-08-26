// App.tsx
import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/** ================== IMPORTS DAS TELAS ================== */
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

import { DetalhesCurrais } from "./View/DetalhesCurrais";
import DetailsScreenCurrais from "./View/DetailsScreenCurrais";
import ArcoDaPedraTourism from "./View/PontosTuristicos/Currais/ArcoDaPedraTourism";
import BaixaoDoCaldeiraoTourism from "./View/PontosTuristicos/Currais/BaixaoDoCaldeiraoTourism";
import PassagemMolhadaParaTourism from "./View/PontosTuristicos/Currais/PassagemMolhadaParaTourism";
import NossaSenhoraAparecidaDaLuzTourism from "./View/PontosTuristicos/Currais/NossaSenhoraAparecidaDaLuzTourism";
import BomJesusDaLapaTourism from "./View/PontosTuristicos/Currais/BomJesusDaLapaTourism";
import PacificoCavalcanteTourism from "./View/PontosTuristicos/Currais/PacificoCavalcanteTourism";
import AtracoesCurrais from "./View/AtracoesCurrais";

const Stack = createNativeStackNavigator();

/** Tema opcional (evita flash branco no header em tema escuro) */
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#000000", // ajuste conforme seu app/imagens de fundo
  },
};

function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="LoadingScreen"
        screenOptions={{
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
        }}
      >
        {/* Núcleo */}
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

        {/* Detalhes das cidades */}
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
          name="DetalhesCurrais"
          component={DetalhesCurrais}
          options={{ title: "Detalhes" }}
        />

        {/* Pontos turísticos por cidade */}
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
          name="DetailsScreenCurrais"
          component={DetailsScreenCurrais}
          options={{ title: "Pontos Turísticos" }}
        />

        <Stack.Screen
          name="ArcoDaPedraTourism"
          component={ArcoDaPedraTourism}
          options={{ title: "Pontos Turísticos" }}
        />

        <Stack.Screen
          name="BaixaoDoCaldeiraoTourism"
          component={BaixaoDoCaldeiraoTourism}
          options={{ title: "Pontos Turísticos" }}
        />

        <Stack.Screen
          name="PassagemMolhadaParaTourism"
          component={PassagemMolhadaParaTourism}
          options={{ title: "Pontos Turísticos" }}
        />

        <Stack.Screen
          name="NossaSenhoraAparecidaDaLuzTourism"
          component={NossaSenhoraAparecidaDaLuzTourism}
          options={{ title: "Pontos Turísticos" }}
        />

        <Stack.Screen
          name="BomJesusDaLapaTourism"
          component={BomJesusDaLapaTourism}
          options={{ title: "Pontos Turísticos" }}
        />

        <Stack.Screen
          name="PacificoCavalcanteTourism"
          component={PacificoCavalcanteTourism}
          options={{ title: "Pontos Turísticos" }}
        />
        {/* Atrações (listas) */}
        <Stack.Screen
          name="AtracoesContagem"
          component={AtracoesContagem}
          options={{ title: "Atrações Turísticas" }}
        />
        <Stack.Screen
          name="AtracoesAguaBoa"
          component={AtracoesAguaBoa}
          options={{ title: "Atrações Turísticas" }}
        />
        <Stack.Screen
          name="AtracoesPirassununga"
          component={AtracoesPirassununga}
          options={{ title: "Atrações Turísticas" }}
        />
        <Stack.Screen
          name="AtracoesCurrais"
          component={AtracoesCurrais}
          options={{ title: "Atrações Turísticas" }}
        />


        {/* Contagem */}
        <Stack.Screen
          name="PracadaGloriaTourism"
          component={PracadaGloriaTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />
        <Stack.Screen
          name="CasadosCacosTourism"
          component={CasadosCacosTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />
        <Stack.Screen
          name="CentroCulturalTourism"
          component={CentroCulturalTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />
        <Stack.Screen
          name="CasadaCulturaTourism"
          component={CasadaCulturaTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />
        <Stack.Screen
          name="ParqueEcologicoTourism"
          component={ParqueEcologicoTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />
        <Stack.Screen
          name="QuilomboArturosTourism"
          component={QuilomboArturosTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />
        <Stack.Screen
          name="IgrejaTourism"
          component={IgrejaTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />

        {/* Água Boa */}
        <Stack.Screen
          name="ParqueIpesTourism"
          component={ParqueIpesTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />
        <Stack.Screen
          name="ParoquiaTourism"
          component={ParoquiaTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />
        <Stack.Screen
          name="PracaCulturaTourism"
          component={PracaCulturaTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />
        <Stack.Screen
          name="PracaLazerTourism"
          component={PracaLazerTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />
        <Stack.Screen
          name="LagoaBuritisTourism"
          component={LagoaBuritisTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />

        {/* Pirassununga */}
        <Stack.Screen
          name="CidadeTourism"
          component={CidadeTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />
        <Stack.Screen
          name="EmasTourism"
          component={EmasTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />
        <Stack.Screen
          name="PracaTourism"
          component={PracaTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />
        <Stack.Screen
          name="SantuarioTourism"
          component={SantuarioTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />
        <Stack.Screen
          name="TherenceTourism"
          component={TherenceTourism}
          options={{ title: "Detalhes do Ponto Turístico" }}
        />

        {/* Placeholder geral */}
        <Stack.Screen
          name="EmDesenvolvimento"
          component={EmDesenvolvimento}
          options={{ title: "Em Desenvolvimento" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
