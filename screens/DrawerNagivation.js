import Contact from './Contact';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './Home';
import Rates from './RatesScreen';
import HowToUse from './HowToUse';
import Report from './Report';
import Map from './Map';
import Tracker from './Tracker'
import SplashScreen from './Splashscreen'
import Inprogress from './Inprogress'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { signOut } from '../redux';
import { connect } from 'react-redux';
import Profile from './Profile';
import { clearingState } from '../redux/user/userActions';
const MapStack = createStackNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};
function ContactStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          title : 'REPAIR DUKAAN  '
        , //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign : 'center', //Set Header text style
            fontSize: 26,
            marginRight: 30,
          },
        }}
      />
    </Stack.Navigator>
  );
}
function HowToUseStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="How To Use"
        component={HowToUse}
        options={{
          title : 'REPAIR DUKAAN  '
        , //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign : 'center', //Set Header text style
            fontSize: 26,
            marginRight: 30,
          },
        }}
      />
    </Stack.Navigator>
  );
}
function RatesStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Rates"
        component={Rates}
        options={{
          title : 'REPAIR DUKAAN  '
        , //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign : 'center', //Set Header text style
            fontSize: 26,
            marginRight: 30,
          },
        }}
      />
    </Stack.Navigator>
  );
}
function ReportStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Report"
        component={Report}
        options={{
          title : 'REPAIR DUKAAN  '
        , //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign : 'center', //Set Header text style
            fontSize: 26,
            marginRight: 30,
          },
        }}
      />
    </Stack.Navigator>
  );
}
const MapStackScreen = ({navigation}) => (
  <MapStack.Navigator>
          <MapStack.Screen name="Map" component={Map} options={{
          title:'REPAIR DUKAAN',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign : 'center', //Set Header text style
            fontSize: 26,
            marginRight: 30,
          },
          }} />
                <MapStack.Screen name="Tracker"  component = {Tracker} options={{
          title:'REPAIR DUKAAN',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign : 'center', //Set Header text style
            fontSize: 26,
            marginRight: 30,
          },
          }} />
          <MapStack.Screen name="Inprogress"  component = {Inprogress} options={{
          title:'REPAIR DUKAAN',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign : 'center', //Set Header text style
            fontSize: 26,
            marginRight: 30,
          },
          }} />
  </MapStack.Navigator>
  );
function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
          textAlign : 'center', //Set Header text style
          fontSize: 24
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title : 'REPAIR DUKAAN  '
        , //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign : 'center', //Set Header text style
            fontSize: 26,
            marginRight: 30,
          },
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
          textAlign : 'center', //Set Header text style
          fontSize: 24,
        },
      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title : 'REPAIR DUKAAN  '
        , //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign : 'center', //Set Header text style
            fontSize: 26,
            marginRight: 30,
          },
        }}
      />
    </Stack.Navigator>
  );
}
const handleLogOut = (props, loggingOut, clearUserState) => {
  loggingOut()
  clearUserState()
  props.navigation.navigate("LogIn")
}
function DrawerNagivation({loggingOut, clearUserState}) {
  return (
     <SafeAreaProvider>
      <Drawer.Navigator initialRouteName = {Home} drawerContent = {props => {
         return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Log Out" onPress={() => handleLogOut(props, loggingOut, clearUserState)} />
          </DrawerContentScrollView>
        )
      }}>
        <Drawer.Screen
          name="Home"
          options={{ drawerLabel: 'Home' }}
          component={HomeStack}
        />
        <Drawer.Screen
          name="Rates"
          options={{ drawerLabel: 'Rates' }}
          component={RatesStack}
        />
        <Drawer.Screen
          name="Report"
          options={{ drawerLabel: 'Report' }}
          component={ReportStack}
        />
        <Drawer.Screen
          name="HowToUse"
          options={{ drawerLabel: 'Help' }}
          component={HowToUseStack}
        />
        <Drawer.Screen
          name="Contact"
          options={{ drawerLabel: 'Contact' }}
          component={ContactStack}
        />
        <Drawer.Screen
          name = "Profile"
          options = {{ drawerLabel: 'Profile'}}
          component = {ProfileStack}
        />
        <Drawer.Screen
          name = "Map"
          options = {{drawerLabel: 'Book'}}
          component = {MapStackScreen}
        />      
      </Drawer.Navigator>    
     </SafeAreaProvider>  
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 60,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'normal',
  }, 
});

const mapDispatchToProps = dispatch => {
  return {
    loggingOut: () => dispatch(signOut()),
    clearUserState: () => dispatch(clearingState())
  }
}

export default connect(null, mapDispatchToProps)(DrawerNagivation)
