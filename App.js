import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase/app";

import Landing from "./components/auth/Landing";
import Register from "./components/auth/Register";

const Stack = createStackNavigator();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfCLVEd3-aGdIzGtrAASxXipJCYHf1P4Q",
  authDomain: "instagram-clone-267e5.firebaseapp.com",
  projectId: "instagram-clone-267e5",
  storageBucket: "instagram-clone-267e5.appspot.com",
  messagingSenderId: "536975826444",
  appId: "1:536975826444:web:f2f91b7b6fc66980a49829",
  measurementId: "G-J85FNZNT78",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
