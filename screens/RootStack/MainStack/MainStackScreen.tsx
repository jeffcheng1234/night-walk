import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MapViewAdminScreen from "./MapViewAdmin/MapViewAdminScreen.main";
import MapViewUserScreen from "./MapViewUser/MapViewUserScreen.main";
import { UserModel } from "../../../models/user";
import firebase, { auth } from "firebase/app";
import { RouteProp } from "@react-navigation/core";
import MapViewScreen from "./MapView/MapViewScreen.main";

export type MainStackParamList = {
  MapView: undefined;
  NewRequest: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

export function MainStackScreen() {
  return (
    <MainStack.Navigator>
      {/* <MainStack.Screen
        name="NewRequest"
        options={{ headerShown: false }}
        component={NewRequestScreen}
      /> */}
    </MainStack.Navigator>
  );
}
