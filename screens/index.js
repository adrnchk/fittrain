import React from "react";
import Screen1 from "./HomeScreen";

export const ProfileScreen = ({ navigation }) => (
  <Screen1 navigation={navigation} name="Profile" />
);
export const ExercisesScreen = ({ navigation }) => (
  <Screen1 navigation={navigation} name="Exercises" />
);
export const StatsScreen = ({ navigation }) => (
  <Screen1 navigation={navigation} name="Stats" />
);
export const GuidesScreen = ({ navigation }) => (
  <Screen1 navigation={navigation} name="Guides" />
);
export const SettingsScreen = ({ navigation }) => (
  <Screen1 navigation={navigation} name="Settings" />
);
