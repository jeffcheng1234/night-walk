import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackScreen } from "./MainStack/MainStackScreen";
import UserInfoScreen from "./UserInfoScreen/UserInfoScreen.main";
import { NavigationContainer } from "@react-navigation/native";
import { UserModel } from "../../models/user";
import MapViewScreen from "./MainStack/MapView/MapViewScreen.main";

export type RootStackParamList = {
  MapViewScreen: { user: UserModel };
  UserInfoScreen: { user: UserModel };
};

const RootStack = createStackNavigator<RootStackParamList>();

export function RootStackScreen() {
  const options = { headerShown: false };
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" initialRouteName="MapViewScreen">
        <RootStack.Screen
          name="MapViewScreen"
          options={options}
          component={MapViewScreen}
        />
        <RootStack.Screen
          name="UserInfoScreen"
          options={options}
          component={UserInfoScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
