import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

export default function AuthScreen({ setCurrentScreen }) {
  const [isLogin, setIsLogin] = useState(true);

  // Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Sign Up
  const [studentId, setStudentId] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Show/Hide Password
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Please enter your email and password.");
      return;
    }

    Alert.alert("Success", "Login Successful!", [
      {
        text: "OK",
        onPress: () => setCurrentScreen("dashboard"),
      },
    ]);
  };

  const handleSignup = () => {
    if (
      !studentId.trim() ||
      !createPassword.trim() ||
      !confirmPassword.trim()
    ) {
      Alert.alert("Error", "Please complete all fields.");
      return;
    }

    if (createPassword.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters.");
      return;
    }

    if (createPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    Alert.alert(
      "Registration Submitted",
      "Your account has been created successfully.\n\nPlease wait for administrator approval.",
      [
        {
          text: "OK",
          onPress: () => {
            setStudentId("");
            setCreatePassword("");
            setConfirmPassword("");
            setIsLogin(true);
          },
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Lincamp Ride</Text>
        <Text style={styles.subtitle}>Rides Made Simple.</Text>

        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, isLogin && styles.activeTab]}
            onPress={() => setIsLogin(true)}
          >
            <Text
              style={[
                styles.tabText,
                isLogin && styles.activeTabText,
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, !isLogin && styles.activeTab]}
            onPress={() => setIsLogin(false)}
          >
            <Text
              style={[
                styles.tabText,
                !isLogin && styles.activeTabText,
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        {isLogin ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showLoginPassword}
              />

              <TouchableOpacity
                onPress={() =>
                  setShowLoginPassword(!showLoginPassword)
                }
              >
                <Text style={styles.showHide}>
                  {showLoginPassword ? "Hide" : "Show"}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => Alert.alert("Forgot Password", "Feature coming soon.")}>
              <Text style={styles.forgotPassword}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TextInput
              style={styles.input}
              placeholder="Student ID"
              value={studentId}
              onChangeText={setStudentId}
            />

            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Create Password"
                value={createPassword}
                onChangeText={setCreatePassword}
                secureTextEntry={!showCreatePassword}
              />

              <TouchableOpacity
                onPress={() =>
                  setShowCreatePassword(!showCreatePassword)
                }
              >
                <Text style={styles.showHide}>
                  {showCreatePassword ? "Hide" : "Show"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
              />

              <TouchableOpacity
                onPress={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                <Text style={styles.showHide}>
                  {showConfirmPassword ? "Hide" : "Show"}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={handleSignup}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F9",
  },

  content: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#14532D",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
  },

  tabs: {
    flexDirection: "row",
    marginBottom: 20,
  },

  tab: {
    flex: 1,
    backgroundColor: "#E5E7EB",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },

  activeTab: {
    backgroundColor: "#14532D",
  },

  tabText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },

  activeTabText: {
    color: "#fff",
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
  },

  showHide: {
    color: "#14532D",
    fontWeight: "bold",
  },

  forgotPassword: {
    color: "#14532D",
    textAlign: "right",
    marginBottom: 20,
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#14532D",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});