import React, {useRef} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Image, 
} from 'react-native';

const App = () => {
  const size = useRef(new Animated.Value(100)).current;
  const translate = useRef(new Animated.Value(-100)).current;
  const color_r = useRef(new Animated.Value(127)).current;
  const color_g = useRef(new Animated.Value(127)).current;
  const color_b = useRef(new Animated.Value(127)).current;

  x = 0;
  y = 0;

  const position = function(translateY: number, translateX: number) {
    return {
      width: 100,
      height: 100, 
      transform: [{translateY: translateY}, {translateX: translateX}],
    }
  }

  const sizeIn = () => {
    Animated.timing(size, {
      toValue: 100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const sizeOut = () => {
    Animated.timing(size, {
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const translateXIn = () => {
    Animated.timing(translate, {
      toValue: 100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const translateXOut = () => {
    Animated.timing(translate, {
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const color_r_in = () => {
    Animated.timing(translate, {
      toValue: 255,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const color_r_out = () => {
    Animated.timing(translate, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  
  const changePosition = function(value) {

  }

  return (
    <SafeAreaView style={styles.container}>

      <Animated.Image
        style={[
          {
            width: size,
            height: size, 
            transform: [{translateY: translate}, {translateX: translate}],
          }  
        ]}
        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Siam_lilacpoint.jpg/800px-Siam_lilacpoint.jpg'}}  
      >
      </Animated.Image>

      <Image style={position(0, 0)} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Siam_lilacpoint.jpg/800px-Siam_lilacpoint.jpg'}} />

      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={sizeIn} />
        <Button title="Fade Out View" onPress={sizeOut} />
        <Button title="Translate X In View" onPress={translateXIn} />
        <Button title="Translate X Out View" onPress={translateXOut} />
        <Button title="Top" onPress={changePosition(1)} />
        // 
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black", 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  }, 

});

export default App;