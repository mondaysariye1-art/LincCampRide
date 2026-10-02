import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ProfileScreen({ setCurrentScreen }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      <View style={styles.card}>
        <Image
          source={require("../assets/placeholder.png")}
          style={styles.image}
        />

        <Text style={styles.name}>Samuel Monday</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Student ID</Text>
          <Text style={styles.value}>1001927</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Department</Text>
          <Text style={styles.value}>
            Computer Software Engineering(CSE)
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Semester</Text>
          <Text style={styles.value}>3</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>
            mondaysariye1@gmail.com
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>
            +234 8162418685
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setCurrentScreen("dashboard")}
      >
        <Text style={styles.backText}>
          ← Back to Dashboard
        </Text>
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
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 25,
    elevation: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#14532D",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#14532D",
    marginBottom: 20,
  },

  infoRow: {
    marginBottom: 15,
  },

  label: {
    fontSize: 14,
    color: "#777",
    marginBottom: 3,
  },

  value: {
    fontSize: 17,
    color: "#222",
    fontWeight: "600",
  },

  backButton: {
    backgroundColor: "#14532D",
    marginTop: 25,
    padding: 16,
    borderRadius: 12,
  },

  backText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
});