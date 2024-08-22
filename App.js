import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoadingScreen } from "./LoadingScreen";
import { InitialScreen } from "./InitialScreen";
import { TourismDetailsScreen } from "./TourismDetailsScreen";
import { DetalhesContagem } from "./DetalhesContagem";

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
          options={{ title: "Detalhes sobre Contagem" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
