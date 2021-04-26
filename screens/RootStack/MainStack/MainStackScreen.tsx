import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MapViewAdminScreen from "./MapViewAdmin/MapViewAdminScreen.main";
import MapViewUserScreen from "./MapViewUser/MapViewUserScreen.main";

export type MainStackParamList = {
  MapView: undefined;
  NewRequest: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

export function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MapView"
        options={{ headerShown: false }}
        component={MapViewAdminScreen}
      />
      {/* <MainStack.Screen
        name="NewRequest"
        options={{ headerShown: false }}
        component={NewRequestScreen}
      /> */}
    </MainStack.Navigator>
  );
}
