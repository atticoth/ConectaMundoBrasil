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
import { AtracoesCurrais } from "./View/ConectaMundoBrasil/AtracoesCurrais.js";
import DetailsScreenCurrais from "./View/ConectaMundoBrasil/DetailsScreenCurrais.js";
import { DetalhesCurrais } from "./View/ConectaMundoBrasil/DetalhesCurrais.js";
import ArcoDaPedraTourism from "./View/PontosTuristicos/Currais/ArcoDaPedraTourism.js";
import BaixaoDoCaldeiraoTourism from "./View/PontosTuristicos/Currais/BaixaoDoCaldeiraoTourism.js";
import BomJesusDaLapaTourism from "./View/PontosTuristicos/Currais/BomJesusDaLapaTourism.js";
import NossaSenhoraAparecidaDaLuzTourism from "./View/PontosTuristicos/Currais/NossaSenhoraAparecidaDaLuzTourism.js";
import PacificoCavalcanteTourism from "./View/PontosTuristicos/Currais/PacificoCavalcanteTourism.js";
import PassagemMolhadaParaTourism from "./View/PontosTuristicos/Currais/PassagemMolhadaParaTourism.js";

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
import { AtracoesCastilho } from "./View/ConectaMundo/AtracoesCastilho";
import { AtracoesSaoPaulo } from "./View/ConectaMundo/AtracoesSaoPaulo";
import { TourismDetailsScreenConectaMundo } from "./View/ConectaMundo/TourismDetailsScreenConectaMundo";

//ConectaAi
import { HomeScreen } from "./View/ConectaAi/HomeScreen";
import { DetailsScreenOlimpia } from "./View/ConectaAi/DetailsScreenOlimpia";
import { DetailsScreenDiadema } from "./View/ConectaAi/DetailsScreenDiadema";
import { DetailsScreenIacanga } from "./View/ConectaAi/DetailsScreenIacanga.js";
import { DetalhesOlimpia } from "./View/ConectaAi/DetalhesOlimpia";
import { DetalhesDiadema } from "./View/ConectaAi/DetalhesDiadema";
import { DetalhesIacanga } from "./View/ConectaAi/DetalhesIacanga";
import { TouristAttraction1 } from "./View/ConectaAi/TouristAttraction1";
import { TouristAttraction2 } from "./View/ConectaAi/TouristAttraction2";
import { TouristAttraction3 } from "./View/ConectaAi/TouristAttraction3";
import { TouristAttraction4 } from "./View/ConectaAi/TouristAttraction4";
import { TouristAttraction5 } from "./View/ConectaAi/TouristAttraction5";
import { TouristAttraction6 } from "./View/ConectaAi/TouristAttraction6";
import { TouristAttraction7 } from "./View/ConectaAi/TouristAttraction7";
import { TouristAttraction8 } from "./View/ConectaAi/TouristAttraction8";
import { TouristAttraction9 } from "./View/ConectaAi/TouristAttraction9";
import { TouristAttraction10 } from "./View/ConectaAi/TouristAttraction10";
import { TouristAttraction11 } from "./View/ConectaAi/TouristAttraction11";
import { TouristAttraction12 } from "./View/ConectaAi/TouristAttraction12";
import { TouristAttraction13 } from "./View/ConectaAi/TouristAttraction13";
import { TouristAttraction14 } from "./View/ConectaAi/TouristAttraction14";
import { TouristAttraction15 } from "./View/ConectaAi/TouristAttraction15";
import { TouristAttraction16 } from "./View/ConectaAi/TouristAttraction16";
import { TouristAttraction17 } from "./View/ConectaAi/TouristAttraction17";
import { MapScreen1 } from "./View/ConectaAi/MapScreen1";
import { MapScreen2 } from "./View/ConectaAi/MapScreen2";
import { MapScreen3 } from "./View/ConectaAi/MapScreen3";
import { MapScreen4 } from "./View/ConectaAi/MapScreen4";
import { MapScreen5 } from "./View/ConectaAi/MapScreen5";
import { MapScreen6 } from "./View/ConectaAi/MapScreen6";
import { AtracoesOlimpia } from "./View/ConectaAi/AtracoesOlimpia.js";
import { AtracoesDiadema } from "./View/ConectaAi/AtracoesDiadema.js";
import { AtracoesIacanga } from "./View/ConectaAi/AtracoesIacanga.js";
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
          options={{ headerShown: false }}
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
          options={{ headerShown: false }}
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
          name="DetalhesCurrais"
          component={DetalhesCurrais}
          options={{ title: "Detalhes" }}
        />
        <Stack.Screen
          name="DetailsScreenCurrais"
          component={DetailsScreenCurrais}
          options={{ title: "Pontos Turísticos" }}
        />
        <Stack.Screen
          name="AtracoesCurrais"
          component={AtracoesCurrais}
          options={{ title: "Atrações Turísticos" }}
        />

        <Stack.Screen
          name="ArcoDaPedraTourism"
          component={ArcoDaPedraTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />

        <Stack.Screen
          name="BaixaoDoCaldeiraoTourism"
          component={BaixaoDoCaldeiraoTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />

        <Stack.Screen
          name="BomJesusDaLapaTourism"
          component={BomJesusDaLapaTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="NossaSenhoraAparecidaDaLuzTourism"
          component={NossaSenhoraAparecidaDaLuzTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />

        <Stack.Screen
          name="PacificoCavalcanteTourism"
          component={PacificoCavalcanteTourism}
          options={{ title: "Detalhes do ponto turístico" }}
        />

        <Stack.Screen
          name="PassagemMolhadaParaTourism"
          component={PassagemMolhadaParaTourism}
          options={{ title: "Detalhes do ponto turístico" }}
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
          options={{ headerShown: false }}
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

        {/* ConectaAi */}

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetalhesOlimpia"
          component={DetalhesOlimpia}
          options={{ title: "Detalhes sobre Olímpia - SP" }}
        />
        <Stack.Screen
          name="DetalhesDiadema"
          component={DetalhesDiadema}
          options={{ title: "Detalhes sobre Diadema - SP" }}
        />
        <Stack.Screen
          name="DetalhesIacanga"
          component={DetalhesIacanga}
          options={{ title: "Detalhes sobre Iacanga - SP" }}
        />
        <Stack.Screen
          name="DetailsScreenOlimpia"
          component={DetailsScreenOlimpia}
          options={{ title: "Detalhes sobre Olímpia - SP" }}
        />
        <Stack.Screen
          name="DetailsScreenDiadema"
          component={DetailsScreenDiadema}
          options={{ title: "Detalhes sobre Diadema - SP" }}
        />
        <Stack.Screen
          name="DetailsScreenIacanga"
          component={DetailsScreenIacanga}
          options={{ title: "Detalhes sobre Iacanga - SP" }}
        />
        <Stack.Screen
          name="AtracoesOlimpia"
          component={AtracoesOlimpia}
          options={{ title: "Atrações turísticas" }}
        />
        <Stack.Screen
          name="AtracoesDiadema"
          component={AtracoesDiadema}
          options={{ title: "Atrações turísticas" }}
        />
        <Stack.Screen
          name="AtracoesIacanga"
          component={AtracoesIacanga}
          options={{ title: "Atrações turísticas" }}
        />
        <Stack.Screen
          name="TouristAttraction1"
          component={TouristAttraction1}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TouristAttraction2"
          component={TouristAttraction2}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TouristAttraction3"
          component={TouristAttraction3}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TouristAttraction4"
          component={TouristAttraction4}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TouristAttraction5"
          component={TouristAttraction5}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TouristAttraction6"
          component={TouristAttraction6}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TouristAttraction7"
          component={TouristAttraction7}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TouristAttraction8"
          component={TouristAttraction8}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TouristAttraction9"
          component={TouristAttraction9}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TouristAttraction10"
          component={TouristAttraction10}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TouristAttraction11"
          component={TouristAttraction11}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TouristAttraction12"
          component={TouristAttraction12}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TouristAttraction13"
          component={TouristAttraction13}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TouristAttraction14"
          component={TouristAttraction14}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TouristAttraction15"
          component={TouristAttraction15}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TouristAttraction16"
          component={TouristAttraction16}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="TouristAttraction17"
          component={TouristAttraction17}
          options={{ title: "Detalhes do ponto turístico" }}
        />
        <Stack.Screen
          name="MapScreen1"
          component={MapScreen1}
          options={{ title: "Localização" }}
        />
        <Stack.Screen
          name="MapScreen2"
          component={MapScreen2}
          options={{ title: "Localização" }}
        />
        <Stack.Screen
          name="MapScreen3"
          component={MapScreen3}
          options={{ title: "Localização" }}
        />
        <Stack.Screen
          name="MapScreen4"
          component={MapScreen4}
          options={{ title: "Localização" }}
        />
        <Stack.Screen
          name="MapScreen5"
          component={MapScreen5}
          options={{ title: "Localização" }}
        />
        <Stack.Screen
          name="MapScreen6"
          component={MapScreen6}
          options={{ title: "Localização" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
