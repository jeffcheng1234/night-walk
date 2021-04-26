import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackScreen } from "./MainStack/MainStackScreen";
import UserInfoScreen from "./UserInfoScreen/UserInfoScreen.main";
import { NavigationContainer } from "@react-navigation/native";

export type RootStackParamList = {
  Main: undefined;
  UserInfo: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export function RootStackScreen() {
  const options = { headerShown: false };
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" initialRouteName="Main">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={options}
        />
        {/* <RootStack.Screen
          name="UserInfo"
          options={options}
          component={UserInfoScreen}
        /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
