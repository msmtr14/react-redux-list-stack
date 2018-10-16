import React, { Component } from "react";

import ReactNative from "react-native";

import { Platform, StyleSheet, Text, View } from "react-native";

import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={"Taylor Swift Gallery"} />
      <AlbumList />
    </View >
  );
};

export default App;
