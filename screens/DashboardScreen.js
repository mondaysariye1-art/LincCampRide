import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function DashboardScreen({ setCurrentScreen }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <Text style={styles.welcome}>
        Welcome, Samuel Monday
      </Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => setCurrentScreen("profile")}
      >
        <Text style={styles.cardTitle}>Profile</Text>
        <Text style={styles.cardText}>
          View your student profile
        </Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={styles.card}
        onPress={() => setCurrentScreen("bookRide")}
      >
        <Text style={styles.cardTitle}>Book Ride</Text>
        <Text style={styles.cardText}>
          Book your campus ride
        </Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => setCurrentScreen("auth")}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F9",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#14532D",
    textAlign: "center",
    marginBottom: 10,
  },

  welcome: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
    color: "#555",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 4,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#14532D",
  },

  cardText: {
    marginTop: 5,
    color: "#666",
  },

  logoutButton: {
    backgroundColor: "#14532D",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },

  logoutText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});