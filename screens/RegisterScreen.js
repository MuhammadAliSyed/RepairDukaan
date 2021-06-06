import React ,{ useContext, useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput,Text,Alert,View,Image,TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';
//const Registerapi = axios.create({baseURL:'http://localhost:3000/signup/customer'});

export default function RegisterScreen({navigation}) {
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [number,setNumber] = useState("");
  const [regsucc,setRegSucc] = useState(false);
  const [log,setlog] = useState(false);
  const onSubmitForm = async () => {
      try {
        const body = { fname, email, lname, password,number};
         await fetch( 
          "https://enigmatic-mesa-42065.herokuapp.com/signup/customer",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(body)
          }
        ).then((response) => response.json())
        .then((responseJson) => {
       // console.log();
        if (responseJson.header.message === 'success') {
          console.log("Registration successful");
          setRegSucc(true);
        }
        else {
          return(
            Alert.alert("Registration Unsuccessful!")
          )
        }
      })}
        // const parseRes = response;
        //console.log(response.json());
       /* if(parseRes){
            // setAuth(false);
            //toast.error(parseRes);
            console.log("Successful");
          }*/
       catch (err) {
        console.error(err.message);
      }
    };
    if(regsucc==true){
      return (
        <SafeAreaView
          style={styles.container2}>
          <Image
            source={require('../assets/success.png')}
            style={{
              height: 300,
              width:300,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginTop: 100
            }}
          />
          <Text style={styles.successTextStyle}>
            Registration Successful
          </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() =>{//setlog(true)
            navigation.navigate('LogIn')
            setRegSucc(false)}}>
            <Text style={styles.buttonTextStyle}>Login Now</Text>
          </TouchableOpacity>
        </SafeAreaView>
      );
    }
    return(       
      <SafeAreaView style={styles.container}>
    <Text style= {styles.logo}>Registration</Text>
          <View style = {styles.inputView}>
          <TextInput
          style={styles.inputText}
          onChangeText={text=>setFname(text)}
          placeholder="First Name"
          name="fname"
          textAlign="center"
          placeholderTextColor="white"
        />
          </View>
        <View style = {styles.inputView}>
        <TextInput
          style={styles.inputText}
          onChangeText={text=>setLname(text)}
          placeholder="Last Name"
          name="lname"
          textAlign="center"
          placeholderTextColor="white"
        />
        </View>

<View style = {styles.inputView}>
<TextInput
          style={styles.inputText}
          placeholder="Email"
          onChangeText={text=>setEmail(text)}
          name="email"
          textAlign="center"
          placeholderTextColor="white"
        />
</View>
        

<View style = {styles.inputView}>
<TextInput
          style={styles.inputText}
          onChangeText={text=>setNumber(text)}
          name="number"
          placeholder="+92-XXXXX-XXX"
          placeholderTextColor="white"
          keyboardType="numeric"
          textAlign="center"
        />
</View>
        

<View style = {styles.inputView}>
<TextInput
          style={styles.inputText}
          placeholder="Password"
          onChangeText={text=>setPassword(text)}
          name="password"
          placeholderTextColor="white"
          textContentType="password"
          textAlign="center"
          secureTextEntry={true}
        />
</View>
        <TouchableOpacity style={styles.loginBtn} onPress={onSubmitForm}>
          <Text style = {styles.loginText}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('LogIn')}>
          <Text style = {styles.loginText}>BACK TO LOG-IN</Text>
        </TouchableOpacity>
    </SafeAreaView>
    );
  }
  
  // const styles = StyleSheet.create({
  //   head:{
  //     fontSize:40,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     textAlign: 'center',
  //     margin:15
  
  //   },
  //   buttonStyle: {
  //     backgroundColor: '#7DE24E',
  //     borderWidth: 0,
  //     color: '#FFFFFF',
  //     borderColor: '#7DE24E',
  //     height: 60,
  //     width:120,
  //     alignItems: 'center',
  //     borderRadius: 30,
  //     marginLeft: 35,
  //     marginRight: 35,
  //     marginTop: 20,
  //     marginBottom: 20,
  //   },
  //   buttonTextStyle: {
  //     color: '#FFFFFF',
  //     paddingVertical: 10,
  //     fontSize: 20,
  //   },
  //   inputStyle: {
  //     flex: 1,
  //     color: 'white',
  //     paddingLeft: 15,
  //     paddingRight: 15,
  //     borderWidth: 1,
  //     borderRadius: 30,
  //     borderColor: '#dadae8',
  //   },
  //   errorTextStyle: {
  //     color: 'red',
  //     textAlign: 'center',
  //     fontSize: 14,
  //   },
  //   successTextStyle: {
  //     color: 'green',
  //     textAlign: 'center',
  //     fontSize: 18,
  //     padding: 30,
  //   },
  //   btn:{
  //     textAlign: 'center',
  //     marginVertical: 15,
  //     width:250,
  //   },
  //   input: {
  //     height: 50,
  //     width:270,
  //     margin: 15,
  //     borderWidth: 3,
  //     fontSize:15
  //   },
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
      
  //   },
  //   separator: {
  //     marginVertical: 8,
  //     borderBottomColor: '#737373',
  //     borderBottomWidth: StyleSheet.hairlineWidth
  //   },
  //   }
  // );

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
        marginTop:10,
        marginBottom:5
      },
      loginText:{
        color:"white",
      },
      activity: {
        flex: 1,
        justifyContent: "center"
      },
      buttonStyle: {
            backgroundColor: '#7DE24E',
            borderWidth: 0,
            color: '#FFFFFF',
            borderColor: '#7DE24E',
            height: 50,
            width:120,
            alignItems: 'center',
            borderRadius: 30,
            marginLeft: 35,
            marginRight: 35,
            marginTop: 20,
            marginBottom: 20,
          },
          buttonTextStyle: {
                color: '#FFFFFF',
                paddingVertical: 10,
                fontSize: 20,
                textAlign: 'center'
              },
              successTextStyle: {
                    color: 'green',
                    textAlign: 'center',
                    fontSize: 30,
                    padding: 30,
                  },
                  container2: {
                      flex: 1,
                      backgroundColor: '#fff',
                      alignItems: 'center',
                      textAlign: 'center',
                      color: 'aliceblue'
                    }
})
