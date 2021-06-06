import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text, Alert, View, Image, TouchableOpacity } from 'react-native';
import axios from 'axios'
import { connect } from 'react-redux';
import {signOut} from "../redux/auth/authActions"
import { clearingState } from '../redux/user/userActions';

function UpdatePassword({ authState, navigation, loggingOut, clearUserState }) {
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const handleUpdatePassword = async () => {
        await axios.post("https://enigmatic-mesa-42065.herokuapp.com/api/customer/change", {currentPassword, newPassword}, {
            headers: {
                "token": authState.token
            }
        })
        .then((response) => {
            Alert.alert('Change of Password Successful! Please re-login!')
            loggingOut()
            clearUserState()
            navigation.navigate('LogIn')
        })
        .catch((error) => {
            Alert.alert("Change of Password Unsuccessful!")
            console.log(error)
        })
    }

    return(
        <SafeAreaView style = {styles.container}>
            <Text style={styles.logo}>Change Password</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    value = {currentPassword}
                    placeholder = 'Current Password'
                    placeholderTextColor="white"
                    onChangeText={setCurrentPassword}
                    secureTextEntry = {true}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    value = {newPassword}
                    placeholder = 'New Password'
                    placeholderTextColor="white"
                    onChangeText={setNewPassword}
                    secureTextEntry = {true}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleUpdatePassword}>
                <Text style={styles.loginText}>Update Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('DrawerNavigation')}>
                <Text style={styles.loginText}>Go Back</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
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
        fontSize:40,
        color:"#fb5b5a",
        marginBottom:40,
        textAlign: 'center'
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
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:10
      },
      loginText:{
        color:"white"
      }
})

const mapStateToProps = state => {
    return {
        authState: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loggingOut: () => dispatch(signOut()), 
        clearUserState : () => dispatch(clearingState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePassword);