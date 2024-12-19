import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoadingScreenInitial } from "./View/LoadingScreenInitial";
import { Loading } from "./View/Loading";
import { AppsNavigate } from "./View/AppsNavigate";

// ConectaMundoBrasil
import { LoadingScreenConectaMundoBrasil } from "./View/ConectaMundoBrasil/LoadingScreenConectaMundoBrasil";
import { TourismDetailsScreenConectaMundoBrasil } from "./View/ConectaMundoBrasil/TourismDetailsScreenConectaMundoBrasil";
import { DetalhesContagem } from "./View/ConectaMundoBrasil/DetalhesContagem";
import { DetalhesAguaBoa } from "./View/ConectaMundoBrasil/DetalhesAguaBoa";
import { DetalhesPirassununga } from "./View/ConectaMundoBrasil/DetalhesPirassununga";
import { DetailsScreenContagem } from "./View/ConectaMundoBrasil/DetailsScreenContagem";
import { DetailsScreenAguaBoa } from "./View/ConectaMundoBrasil/DetailsScreenAguaBoa";
import { DetailsScreenPirassununga } from "./View/ConectaMundoBrasil/DetailsScreenPirassununga";
import { AtracoesContagem } from "./View/ConectaMundoBrasil/AtracoesContagem";
import { AtracoesAguaBoa } from "./View/ConectaMundoBrasil/AtracoesAguaBoa";
import { AtracoesPirassununga } from "./View/ConectaMundoBrasil/AtracoesPirassununga";
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

// ConectaMundo
import { LoadingScreenConectaMundo } from "./View/ConectaMundo/LoadingScreenConectaMundo";
import { DetailsScreenCastilho } from "./View/ConectaMundo/DetailsScreenCastilho";
import { DetailsScreenSaoPaulo } from "./View/ConectaMundo/DetailsScreenSaoPaulo";
import { DetalhesCastilho } from "./View/ConectaMundo/DetalhesCastilho";
import { DetalhesSaoPaulo } from "./View/ConectaMundo/DetalhesSaoPaulo";
import { PontoTuristico1 } from "./View/ConectaMundo/PontoTuristico1";
import { PontoTuristico2 } from "./View/ConectaMundo/PontoTuristico2";
import { PontoTuristico3 } from "./View/ConectaMundo/PontoTuristico3";
import { PontoTuristico4 } from "./View/ConectaMundo/PontoTuristico4";
import { PontoTuristico5 } from "./View/ConectaMundo/PontoTuristico5";
import { PontoTuristico6 } from "./View/ConectaMundo/PontoTuristico6";
import { PontoTuristico7 } from "./View/ConectaMundo/PontoTuristico7";
import { PontoTuristico8 } from "./View/ConectaMundo/PontoTuristico8";
import { PontoTuristico9 } from "./View/ConectaMundo/PontoTuristico9";
import { PontoTuristico10 } from "./View/ConectaMundo/PontoTuristico10";
import { PontoTuristico11 } from "./View/ConectaMundo/PontoTuristico11";
import { GaleriaDeImagens1 } from "./View/ConectaMundo/GaleriaDeImagens1";
import { MapScreen1 } from "./View/ConectaMundo/MapScreen1";
import { AtracoesCastilho } from "./View/ConectaMundo/AtracoesCastilho";
import { AtracoesSaoPaulo } from "./View/ConectaMundo/AtracoesSaoPaulo";
import { TourismDetailsScreenConectaMundo } from "./View/ConectaMundo/TourismDetailsScreenConectaMundo";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreenInitial">

        <Stack.Screen
          name="LoadingScreenInitial"
          component={LoadingScreenInitial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppsNavigate"
          component={AppsNavigate}
          options={{ title: "Aplicativos" }}
        />

        {/* ConectaMundoBrasil */}
        <Stack.Screen
          name="LoadingScreenConectaMundoBrasil"
          component={LoadingScreenConectaMundoBrasil}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TourismDetailsScreenConectaMundoBrasil"
          component={TourismDetailsScreenConectaMundoBrasil}
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

        {/* ConectaMundo */}

        <Stack.Screen
          name="LoadingScreenConectaMundo"
          component={LoadingScreenConectaMundo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailsScreenCastilho"
          component={DetailsScreenCastilho}
          options={{ title: "Detalhes sobre Castilho - SP" }}
        />
        <Stack.Screen
          name="DetailsScreenSaoPaulo"
          component={DetailsScreenSaoPaulo}
          options={{ title: "Detalhes sobre São Paulo" }}
        />
        <Stack.Screen
          name="PontoTuristico1"
          component={PontoTuristico1}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="MapScreen1"
          component={MapScreen1}
          options={{ title: "Localização" }}
        />
        <Stack.Screen
          name="GaleriaDeImagens1"
          component={GaleriaDeImagens1}
          options={{ title: "Galeria de imagens" }}
        />
        <Stack.Screen
          name="PontoTuristico2"
          component={PontoTuristico2}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="PontoTuristico3"
          component={PontoTuristico3}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="PontoTuristico4"
          component={PontoTuristico4}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="PontoTuristico5"
          component={PontoTuristico5}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="PontoTuristico6"
          component={PontoTuristico6}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="PontoTuristico7"
          component={PontoTuristico7}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="PontoTuristico8"
          component={PontoTuristico8}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="PontoTuristico9"
          component={PontoTuristico9}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="PontoTuristico10"
          component={PontoTuristico10}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="PontoTuristico11"
          component={PontoTuristico11}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="AtracoesCastilho"
          component={AtracoesCastilho}
          options={{ title: "Atrações turísticas" }}
        />
        <Stack.Screen
          name="AtracoesSaoPaulo"
          component={AtracoesSaoPaulo}
          options={{ title: "Atrações turísticas" }}
        />
        <Stack.Screen
          name="TourismDetailsScreenConectaMundo"
          component={TourismDetailsScreenConectaMundo}
          options={{ title: "Cidades" }}
        />
        <Stack.Screen
          name="DetalhesCastilho"
          component={DetalhesCastilho}
          options={{ title: "Detalhes sobre Castilho - SP" }}
        />
        <Stack.Screen
          name="DetalhesSaoPaulo"
          component={DetalhesSaoPaulo}
          options={{ title: "Detalhes sobre São Paulo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
