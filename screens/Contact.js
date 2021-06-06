import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import axios from 'axios';
import { connect } from 'react-redux';

export default function Contact() {
  const [phone, setphone] = React.useState("");
  const [email, setemail] = React.useState("");
  const [address, setaddress] = React.useState("");
  

  React.useEffect(() => {
    handleLogIn();
  }, []);
  
  const handleLogIn = async () => {
    
        await axios.get('https://enigmatic-mesa-42065.herokuapp.com/getContact/60b69a241b104129505a89ad', {
        })
        .then((response) => {
            setemail(response.data.body.Email)
            setaddress(response.data.body.Address)
            setphone(response.data.body.Phone)
            //Alert.alert(response)
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
            //Alert.alert("Unsuccessful")
        })
}


  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <Text style = {{color : 'white' , fontSize : 27, fontFamily: 'sans-serif-light', fontStyle: 'normal', width : 300, borderWidth: 2, borderRadius: 50, marginVertical: 10, backgroundColor: '#f4511e', textAlign : 'center', borderColor: '#f4511e'}}>CONTACT</Text>
      <Text style = {{color:"#364f6b" , fontSize : 22, fontStyle: 'normal', width : 355, marginVertical: 5, textAlign : 'center', fontWeight : 'bold'}}>EMAIL : {email}</Text>
      <Text style = {{color:"#364f6b" , fontSize : 22, fontStyle: 'normal', width : 355, marginVertical: 5, textAlign : 'center', fontWeight : 'bold'}}>PHONE : {phone}</Text>
      <Text style = {{color:"#364f6b" , fontSize : 22, fontStyle: 'normal', width : 355, marginVertical: 5, textAlign : 'center', fontWeight : 'bold'}}>ADDRESS : {address}</Text>
      <Text style = {{color : 'white' , fontSize : 27, fontFamily: 'sans-serif-light', fontStyle: 'normal', width : 300, borderWidth: 2, borderRadius: 50, marginVertical: 50, backgroundColor: '#f4511e', textAlign : 'center', borderColor: '#f4511e'}}>SITE MAP</Text>
      <Image source = {{uri: 'https://i.ibb.co/hF1ndVH/contact.png', height: 225, width: 300}} />
    </View>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  lineStyle:{
    borderBottomColor: "blue", 
    borderBottomWidth: 7, 
    alignSelf:'stretch',
    marginVertical: 10,
    width: "100%"
},
lineStyle2:{
  borderBottomColor: "black", 
  borderBottomWidth: 2, 
  alignSelf:'center',
  marginVertical: 5,
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
    backgroundColor: "red",
    padding: 12,
    borderRadius: 60,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
  input: {
    height: 30,
    margin: 12,
    width: 300,
    borderWidth: 1,
  },
  input1: {
    height: 100,
    margin: 12,
    width: 300,
    borderWidth: 1,
  },
});
