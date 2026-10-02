import React from "react";
import {
  View,
  Text,
 Image,
  StyleSheet,
} from "react-native";

export default function ProfileCard({
  name,
  department,
  email,
  image,
}) {
  return (
    <View style={styles.card}>
      <Image
        source={image}
        style={styles.image}
      />

      <Text style={styles.name}>
        {name}
      </Text>

      <Text style={styles.department}>
        {department}
      </Text>

      <Text style={styles.email}>
        {email}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",

    elevation: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,

    marginVertical: 20,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#14532D",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#14532D",
    textAlign: "center",
  },

  department: {
    fontSize: 17,
    color: "#555",
    marginTop: 10,
    textAlign: "center",
  },

  email: {
    fontSize: 15,
    color: "#777",
    marginTop: 8,
    textAlign: "center",
  },
});