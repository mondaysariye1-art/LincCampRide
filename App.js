import React, { useState } from "react";

import SplashScreen from "./screens/SplashScreen";
import AuthScreen from "./screens/AuthScreen";
import DashboardScreen from "./screens/DashboardScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BookRideScreen from "./screens/BookRideScreen";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("splash");

  switch (currentScreen) {
    case "splash":
      return <SplashScreen setCurrentScreen={setCurrentScreen} />;

    case "auth":
      return <AuthScreen setCurrentScreen={setCurrentScreen} />;

    case "dashboard":
      return <DashboardScreen setCurrentScreen={setCurrentScreen} />;

    case "profile":
      return <ProfileScreen setCurrentScreen={setCurrentScreen} />;

    case "bookRide":
      return <BookRideScreen setCurrentScreen={setCurrentScreen} />;

    default:
      return <SplashScreen setCurrentScreen={setCurrentScreen} />;
  }
}