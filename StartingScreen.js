import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const text = 'LOGIN';
const text2 = 'No account?'


export default function StartingScreen() {

  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
        }}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require('./photos/logo.png')} />
      <View style={styles.loginContainer}>
          <Text style={styles.prijavaText}>{text}</Text>
          <TextInput 
          style={styles.emailText}
          placeholder='E-mail or phone number'
          ></TextInput>
          <TextInput 
          style={styles.gesloText}
          placeholder='Password'
          secureTextEntry={true}
          ></TextInput>
          <TouchableOpacity onPress={() => navigation.navigate('MainPage')} style={styles.prijavaButton}>
            <Text style={styles.prijaviSeText}>Log In</Text>
          </TouchableOpacity>
          <Text style={styles.racunText}>{text2}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegistracijaPage')} style={styles.racunButton}>
            <Text style={styles.prijaviSeText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        </View>
        </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({

  /* SIGN IN BACKGROUND */

  container: {
    flex: 1,
    backgroundColor: '#A63D40',
  },

  logo: {
    position: 'absolute',
    width: '320',
    height: '320',
    alignSelf: 'center',
  },

  loginContainer: {
    backgroundColor: '#A63D40',
    width: '320',
    height: '400',
    marginTop: 300,
    marginLeft: 45,
    borderRadius: 20,

  },

  prijavaText: {
    position: 'relative',
    textAlign: 'center',
    color: '#003554',
    top: 30,
    fontSize: 25,
    fontStyle: 'italic',
  },

  emailText: {
    fontSize: 15,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#003554',
    borderRadius: 5,
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    textAlign: 'left',
    top: 50,
    fontStyle: 'italic',
  },

  gesloText: {
    fontSize: 15,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#003554',
    borderRadius: 5,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    textAlign: 'left',
    top: 50,
    fontStyle: 'italic',
  },

  prijavaButton: {
    marginTop: 65,
    marginLeft: 72,
    width: '55%',
    height: 40,
    borderRadius: 25,
    backgroundColor: '#003554',
    justifyContent: 'center',
    padding: 5,
    alignItems: 'center',
  },

  prijaviSeText: {
    color: 'white',
    fontSize: 16,
    fontStyle: 'italic',
  },

  racunText: {
    position: 'relative',
    textAlign: 'center',
    color: '#003554',
    top: 50,
    fontSize: 20,
    fontStyle: 'italic',
  },

  racunButton: {
    marginTop: 70,
    marginLeft: 72,
    width: '55%',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#00CC66',
    justifyContent: 'center',
    padding: 5,
    alignItems: 'center',
  },
});
