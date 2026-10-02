import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FareDisplay({
  farePerSeat,
  seats,
}) {
  const totalFare = farePerSeat * seats;

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Fare Summary</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Fare Per Seat</Text>
        <Text style={styles.value}>₦{farePerSeat}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Seats Selected</Text>
        <Text style={styles.value}>{seats}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.totalLabel}>Total Fare</Text>
        <Text style={styles.totalValue}>₦{totalFare}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginVertical: 20,

    elevation: 4,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#14532D",
    marginBottom: 18,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },

  label: {
    fontSize: 16,
    color: "#555",
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 15,
  },

  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#14532D",
  },

  totalValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#14532D",
  },
});