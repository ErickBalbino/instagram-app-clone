import React from "react";
import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import firebase from "firebase/app";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleName = (enteredText) => {
    setData({ ...data, name: enteredText });
  };

  const handleEmail = (enteredText) => {
    setData({ ...data, email: enteredText });
  };

  const handlePass = (enteredText) => {
    setData({ ...data, password: enteredText });
  };

  const onSignUp = () => {
    const { email, password, name } = data;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((results) => {
        console.log(results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <TextInput placeholder="Name" onChangeText={handleName} />
      <TextInput placeholder="Email" onChangeText={handleEmail} />
      <TextInput placeholder="Password" onChangeText={handlePass} />

      <Button title="Registrar" onPress={() => onSignUp()} />
    </View>
  );
};

export default Register;
