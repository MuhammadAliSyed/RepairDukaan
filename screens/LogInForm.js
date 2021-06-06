import React, { useEffect } from "react"
import {Text, View, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ActivityIndicator, ToastAndroid} from "react-native"
import { useState } from "react"
import { connect } from "react-redux"
import {signIn, signOut} from '../redux'
import { Alert } from "react-native"

function LogInForm( {authState, logIn, logOut, navigation} ) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(authState)

    if (!authState.loading && authState.token) {
      navigation.navigate('SplashScreen')
    }
    else if (!authState.loading && authState.error) {
      Alert.alert("Log-In was unsuccessful!")
      logOut()
      navigation.navigate('LogIn')
    }

    return authState.loading ? (
      <View style = {styles.activity}>
      <ActivityIndicator size="large" color="#00ff00" />
      </View>
    ) : (
      <SafeAreaView style = {styles.container}>
    <Text style = {styles.logo}>Repair Dukaan</Text>
      <View style = {styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="white"
            onChangeText = {setEmail}
            keyboardType = 'email-address'
          />
      </View>
      <View style = {styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="white"
            secureTextEntry = {true}
            onChangeText = {setPassword}
          />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress = {() => logIn(email, password)}>
          <Text style={styles.loginText}>LOG-IN</Text>
      </TouchableOpacity>

      <Text style={{fontSize: 16, color: '#465881', fontWeight: 'bold'}}>DON'T HAVE AN ACCOUNT?</Text>
      <TouchableOpacity onPress = {() => navigation.navigate('RegisterScreen')}>
        <Text style={{fontSize: 18, color: '#f4511e', fontWeight: 'bold', marginVertical: 10, textAlign: 'center'}}>REGISTER NOW</Text>
      </TouchableOpacity>
      </SafeAreaView>
    )
}


const mapStateToProps = state => {
  return {
      authState: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
      logIn: (email, password) => dispatch(signIn(email, password)),
      logOut: () => dispatch(signOut())
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aliceblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40,
      },
      inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"white"
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#f4511e",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30,
        marginBottom:20
      },
      loginText:{
        color:"white",
      },
      activity: {
        flex: 1,
        justifyContent: "center"
      }
})

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
