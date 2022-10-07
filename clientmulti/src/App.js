import React, { useState, useEffect } from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewBoxesWithColorAndText from './components/ViewBoxesWithColorAndText';
import SeperateComponent from './components/SeperateComponent';
import FlexDirectionBasics from './components/FlexDirectionBasics';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import ButtonGroup from './components/ButtonGroup';
import ReduxChecker from './components/ReduxChecker';

import Register from './components/auth/Register';

import AsyncStorage from '@react-native-async-storage/async-storage';

const image = './images/sports-tools.jpg';

import Home from './components/Home';
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null) {
      // value previously stored
      console.log(value);
    }
  } catch (e) {
    // error reading value
  }
};
function HomeScreen({ navigation }) {
  const [count, setCount] = useState(null);
  useEffect(() => {
    storeData('hi');
    getData();
  });


  return (
    <View style={{ flex: 1 }}>
      {/*
      <ViewBoxesWithColorAndText />*/}
      <ImageBackground
        source={require('./images/sports-tools.jpg')}
        resizeMode="cover"
        style={styles.image}
      >
        <Text>Home Screen</Text>
        <Button
          title="Details"
          onPress={() => navigation.navigate('Details')}
          style={styles.buttons}
        />

        <Button
          title="Home2"
          onPress={() => navigation.navigate('Home2')}
          style={styles.buttons}
        />

        <Button
          title="Separate"
          onPress={() => navigation.navigate('Separate')}
          style={styles.buttons}
        />

        <Button
          title="Redux"
          onPress={() => navigation.navigate('Redux')}
          style={styles.buttons}
        />
        <Button
          title="Flex"
          onPress={() => navigation.navigate('Flex')}
          style={styles.buttons}
        />
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
          style={styles.buttons}
        />
      </ImageBackground>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 30, height: 30, marginLeft: 10 }}
      source={require('./images/logo.png')}
      ma
    />
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: () => {},
              headerLeft: (props) => <LogoTitle {...props} />,
              headerRight: () => (
                <View style={[styles.horizontal]}>
                  {/*
                  <Button
                    onPress={() => alert('This is a button!')}
                    title="Players"
                  />
                  <Button
                    onPress={() => alert('This is a button!')}
                    title="Register"
                  />
                  <Button
                    onPress={() => alert('This is a button!')}
                    title="Login"
                  />*/}
                  <ButtonGroup />
                </View>
              ),
              headerStyle: {
                backgroundColor: '#D3D3D3'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Home2" component={Home} />
          <Stack.Screen name="Separate" component={SeperateComponent} />
          <Stack.Screen name="Redux" component={ReduxChecker} />
          <Stack.Screen name="Flex" component={FlexDirectionBasics} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="login" component={FlexDirectionBasics} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    marginVertical: 8
  },
  buttons: {
    marginVertical: 8,
    marginHorizontal: 16
  },
  horizontal: {
    flexDirection: 'row',
    marginLeft: 5
  }
});

export default App;
