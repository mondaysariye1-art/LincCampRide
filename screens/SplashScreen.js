import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function SplashScreen({ setCurrentScreen }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Going to Auth Screen...");
      setCurrentScreen("auth");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#14532D"
        barStyle="light-content"
      />

      <Text style={styles.title}>
        Lincamp Ride
      </Text>

      <Text style={styles.subtitle}>
        Rides Made Simple.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14532D",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 18,
    color: "#FFFFFF",
  },
});