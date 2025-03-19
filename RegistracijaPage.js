import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Animated, View, Button, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { LogBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const text = 'JOIN MEMORIO AND START BUILDING YOUR PHOTO ALBUM.';
const text2 = 'Create an Account';

export default function RegistracijaPage() {

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Text style={styles.upperText}>{text}</Text>
        <Text style={styles.lowerText}>{text2}</Text>
        <View style={styles.regContainer}>
          <Text style={styles.emailText}>{'Email or phone number'}</Text>
        <TextInput 
          style={styles.emailInput}
          placeholder='E-mail or phone number'
        ></TextInput>
        <Text style={styles.gesloText}>{'Password'}</Text>
        <TextInput 
          style={styles.gesloInput}
          placeholder='Password'
          secureTextEntry={true}
        ></TextInput>
        <Text style={styles.imeText}>{'First Name'}</Text>
        <TextInput 
          style={styles.imeInput}
          placeholder='First Name'
        ></TextInput>
        <Text style={styles.priimekText}>{'Last Name'}</Text>
        <TextInput 
          style={styles.priimekInput}
          placeholder='Last Name'
        ></TextInput>
        <Text style={styles.usernameText}>{'Username'}</Text>
        <TextInput 
          style={styles.usernameInput}
          placeholder='Username'
        ></TextInput>
        </View>
        <TouchableOpacity style={styles.button}>
          <Icon name="arrow-right" size={24} color="#D7FDF0" />
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#A63D40',
  },

  upperText: {
    top: 50,
    left: 15,
    width: 330,
    fontSize: 30,
    fontStyle: 'italic',
    color: '#E2C044',
  },

  lowerText: {
    top: 100,
    left: 15,
    fontSize: 28,
    fontStyle: 'italic',
    color: '#003554',
  },

  regContainer: {
    backgroundColor: '#A63D40',
    width: '320',
    height: '400',
    marginTop: 110,
    marginLeft: 15,
  },

  emailText: {
    fontSize: 18,
    color: '#003554',
    marginTop: 10,
    marginBottom: -16,
    marginLeft: 0,
  },

  emailInput: {
    fontSize: 15,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#003554',
    borderRadius: 5,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    textAlign: 'left',
    top: 20,
  },

  gesloText: {
    fontSize: 18,
    color: '#003554',
    marginTop: 30,
    marginBottom: -36,
    marginLeft: 0,
  },

  gesloInput: {
    fontSize: 15,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#003554',
    borderRadius: 5,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    textAlign: 'left',
    top: 20,
  },

  imeText: {
    fontSize: 18,
    color: '#003554',
    marginTop: 30,
    marginBottom: -36,
    marginLeft: 0,
  },

  imeInput: {
    fontSize: 15,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#003554',
    borderRadius: 5,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    textAlign: 'left',
    top: 0,
    fontStyle: 'italic',
  },

  priimekText: {
    fontSize: 18,
    color: '#003554',
    marginTop: 10,
    marginBottom: -16,
    marginLeft: 0,
  },

  priimekInput: {
    fontSize: 15,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#003554',
    borderRadius: 5,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    textAlign: 'left',
    top: 0,
  },

  usernameText: {
    fontSize: 18,
    color: '#003554',
    marginTop: 10,
    marginBottom: -16,
    marginLeft: 0,
  },

  usernameInput: {
    fontSize: 15,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#003554',
    borderRadius: 5,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    textAlign: 'left',
    top: 0,
  },

  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#003554',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // For Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginLeft: 300,
    marginTop: 50,
  },
 
});
