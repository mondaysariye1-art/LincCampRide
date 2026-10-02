// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from "react-native";

// export default function BookRideScreen({ setCurrentScreen }) {
//   const [seats, setSeats] = useState(1);

//   const increaseSeats = () => {
//     if (seats < 6) {
//       setSeats(seats + 1);
//     }
//   };

//   const decreaseSeats = () => {
//     if (seats > 1) {
//       setSeats(seats - 1);
//     }
//   };

//   const bookRide = () => {
//     Alert.alert("Booking Successful", "Ride booked successfully.");
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Book Ride</Text>

//       <Text style={styles.label}>Seats Selected</Text>

//       <View style={styles.counter}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={decreaseSeats}
//         >
//           <Text style={styles.buttonText}>-</Text>
//         </TouchableOpacity>

//         <Text style={styles.seatText}>{seats}</Text>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={increaseSeats}
//         >
//           <Text style={styles.buttonText}>+</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity
//         style={styles.confirmButton}
//         onPress={bookRide}
//       >
//         <Text style={styles.confirmText}>Confirm Booking</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.backButton}
//         onPress={() => setCurrentScreen("dashboard")}
//       >
//         <Text style={styles.backText}>← Back</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F4F7F9",
//     justifyContent: "center",
//     padding: 20,
//   },

//   title: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "#14532D",
//     textAlign: "center",
//     marginBottom: 40,
//   },

//   label: {
//     fontSize: 18,
//     textAlign: "center",
//     marginBottom: 20,
//   },

//   counter: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 40,
//   },

//   button: {
//     backgroundColor: "#14532D",
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 28,
//     fontWeight: "bold",
//   },

//   seatText: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginHorizontal: 35,
//   },

//   confirmButton: {
//     backgroundColor: "#14532D",
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//   },

//   confirmText: {
//     color: "#FFFFFF",
//     textAlign: "center",
//     fontSize: 17,
//     fontWeight: "bold",
//   },

//   backButton: {
//     alignItems: "center",
//   },

//   backText: {
//     color: "#14532D",
//     fontSize: 17,
//     fontWeight: "bold",
//   },
// });