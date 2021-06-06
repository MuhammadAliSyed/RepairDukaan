import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { clearingState, getUserInfo } from '../redux/user/userActions';

function SplashScreen({userState, authState, getInfo, navigation, clearUserState}) {
    useEffect(() => {
        getInfo(authState.token)
    }, [])

    console.log(userState)

    if (!userState.loading && userState.userInfo)
        navigation.navigate('DrawerNavigation')
    
    return (
        <View style = {styles.activity}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
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
        clearUserState: () => dispatch(clearingState())
    }
}

const styles = StyleSheet.create({
    activity: {
        flex: 1,
        justifyContent: "center"
      }
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);