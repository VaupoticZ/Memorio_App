import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image, Animated, Dimensions, TextInput } from 'react-native';
import React, { useState } from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const { width, height } = Dimensions.get('window');

const pages = [
  "Once upon a time...", "In a faraway land...",
  "There was a brave hero...", "Who went on a great adventure...",
  "They faced many challenges...", "And overcame them with courage...",
  "Finally, they reached their goal...", "The End."
];

const MainPage = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [flipAnim] = useState(new Animated.Value(0));

  const flipPage = (direction) => {
    if (direction === 'left' && pageIndex < pages.length - 2) {
      setPageIndex(pageIndex + 2);
    } else if (direction === 'right' && pageIndex > 0) {
      setPageIndex(pageIndex - 2);
    }

    Animated.sequence([
      Animated.timing(flipAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(flipAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      })
    ]).start();
  };

  const interpolatedFlip = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg']
  });


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
       <GestureRecognizer
      onSwipeLeft={() => flipPage('left')}
      onSwipeRight={() => flipPage('right')}
    >
       <Animated.View style={[styles.book, { transform: [{ rotateY: interpolatedFlip }] }]}>
        <View style={styles.page}>
          <Text style={styles.text}>{pages[pageIndex] || ""}</Text>
        </View>
        <View style={[styles.page, styles.rightPage]}>
          <Text style={styles.text}>{pages[pageIndex + 1] || ""}</Text>
        </View>
      </Animated.View>
     </GestureRecognizer>
    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#393E41',
    justifyContent: 'center',
    alignItems: 'center',
  },

  book: {
    flexDirection: 'row',
    width: width * 0.6,
    height: height * 0.3,
    backgroundColor: '#FFF8DC',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRightWidth: 1,
    borderRightColor: '#D3C6A8',
  },
  rightPage: {
    borderRightWidth: 0, // Remove right border for the last page
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },


});

export default MainPage;
