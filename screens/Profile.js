import React from 'react';
import { StyleSheet, Text, Image, View, Alert, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import logo from '../assets/Person.jpeg';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { getUserInfo } from '../redux/user/userActions';
import { TouchableOpacity } from 'react-native';
import { signOut } from '../redux/auth/authActions';
const dateFormat = require('dateformat');

function Profile({ authState, userState, getInfo, loggingOut, navigation }) {
    React.useEffect(() => {
        getInfo(authState.token)
    }, []);

    console.log(userState)

    const handleLogOut = () => {
        loggingOut()
        navigation.navigate('LogIn')
    }

    const date = dateFormat(userState.userInfo.date_joined, "ddd mmm dd yyyy")
    return !userState.loading && userState.userInfo ? (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Text style={{ color: 'white', fontSize: 27, fontFamily: 'sans-serif-light', fontStyle: 'normal', borderColor: '#f4511e', width: 300, borderWidth: 2, borderRadius: 50, marginVertical: 10, backgroundColor: '#f4511e', textAlign: 'center' }}>PROFILE</Text>
                <Image source={logo} style={{ width: 100, height: 130 }} />
                <Text style={{ color: '#364f6b', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>{userState.userInfo.first_name}  {userState.userInfo.last_name}</Text>
                <Text style={{ color: '#364f6b', fontWeight: 'bold', width: 350, fontSize: 22, borderWidth: 2, marginVertical: 10, textAlign: 'center', borderRadius: 20, borderColor: '#364f6b' }}>JOINED DATE: <Text style={{ color: "red" }}> {date} </Text></Text>
                <Text style={{ color: '#364f6b', fontWeight: 'bold', width: 350, fontSize: 22, borderWidth: 2, marginVertical: 20, textAlign: 'center', borderRadius: 20, borderColor: '#364f6b' }}>PHONE NUMBER: <Text style={{ color: "red" }}>{userState.userInfo.phone_number}</Text></Text>
                <View style={styles.lineStyle} />
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('UpdatePassword')} style={styles.button}>
                        <Text style={styles.buttonText}>Update Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')} style={styles.button}>
                        <Text style={styles.buttonText}>Update Profile</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </View>
        </SafeAreaProvider>
    ) : (
        <Text>Loading</Text>
    )
}

const mapStateToProps = state => {
    return {
        authState: state.auth,
        userState: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInfo: (tokenVal) => dispatch(getUserInfo(tokenVal)),
        loggingOut: () => dispatch(signOut())
    }
}

const styles = StyleSheet.create({
    lineStyle: {
        color: '#364f6b',
        borderBottomColor: "#364f6b",
        borderBottomWidth: 4,
        alignSelf: 'stretch',
        marginVertical: 25,
        width: "100%"
    },
    container: {
        alignSelf: "stretch",
        display: 'flex',
        height: '100%',
        flex: 1,
        position: 'relative',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        backgroundColor: "#f4511e",
        padding: 12,
        borderRadius: 60,
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

