import * as React from "react";
import { View, Text } from "react-native";

import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./Screens/Homescreen";
import RestaurantScreen from "./Screens/RestaurantScreen";
import Basketscreen from "./Screens/Basketscreen";
import { Provider } from "react-redux";
import {store} from "./store"
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
           <Stack.Screen name="Login" component={Login} />
          
            <Stack.Screen name="Home" component={Homescreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Basket" component={Basketscreen} 
            options={{ presentation:'modal', headerShown:'false' }} />
            <Stack.Screen name="Signup" component={Signup} />
            
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
