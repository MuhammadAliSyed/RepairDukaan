import React from 'react';
import LogInForm from "./screens/LogInForm"
import Profile from "./screens/Profile"
import RegisterScreen from "./screens/RegisterScreen"
import UpdateProfile from "./screens/UpdateProfile"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UpdatePassword from "./screens/UpdatePassword";
import store from './redux/store';
import {Provider} from 'react-redux'
import {LogBox} from 'react-native'
import RatesScreen from './screens/RatesScreen';
import Contact from "./screens/Contact"
import SplashScreen from './screens/Splashscreen'
import Report from './screens/Report';
import HowToUse from './screens/HowToUse'
import DrawerNagivation from './screens/DrawerNagivation';
LogBox.ignoreAllLogs(true);
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store = {store}>
        <Stack.Navigator screenOptions = {{headerShown: false}} initialRouteName = 'LogIn'>
          <Stack.Screen name = "RegisterScreen" component = {RegisterScreen} />
          <Stack.Screen name = "LogIn" component = {LogInForm} />
          <Stack.Screen name = 'UpdatePassword' component = {UpdatePassword} />
          <Stack.Screen name = 'UpdateProfile' component = {UpdateProfile} />
          <Stack.Screen name = "SplashScreen" component = {SplashScreen}/>
          <Stack.Screen name = "DrawerNavigation" component = {DrawerNagivation} options =  {{title: 'REPAIR DUKAAN', headerLeft: () => null}}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
