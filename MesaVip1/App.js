import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import favoritosCliente from "./src/screens/favoritosCliente";

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Favoritos'>
      <Stack.Screen
        name='favoritosCliente'
        component={favoritosCliente}
        options={{ title: "Favoritos" }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};