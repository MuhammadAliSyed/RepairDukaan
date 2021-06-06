import Contact from './Contact';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import axios from 'axios';
import Report from './Report';
import { ScrollView } from 'react-native';
const dateFormat = require('dateformat');
import {getUserInfo} from '../redux/user/userActions';
import {connect} from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
function Home({ authState, userState, navigation }) {
  var c1 = 0;
  var c2 = 0;
  const [ID, setID] = React.useState("");
  const [Type, setType] = React.useState("");
  const [Lati, setLati] = React.useState("");
  const [Longi, setLongi] = React.useState("");
  const [Lati2, setLati2] = React.useState("");
  const [Longi2, setLongi2] = React.useState("");
  const [date, setDate] = React.useState("");
  const [Fare, setFare] = React.useState("");
  const [date2, setDate2] = React.useState("");
  const [Fare2, setFare2] = React.useState("");
  const [Status, setStatus] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [ID2, setID2] = React.useState("");
  const [Type2, setType2] = React.useState("");
  const [Location2, setLocation2] = React.useState("");
  const [Status2, setStatus2] = React.useState("");
  const [Email2, setEmail2] = React.useState("");
  const [Current, setCurrent] = React.useState(false);
  const [Past, setPast] = React.useState(false);
  const[Street1, setStreet1] =React.useState("");
  const[Street2, setStreet2] =React.useState("");
  const KEY = "ANRBXbTPpZSwrjbpSl4iIOxqRe2vUlpA";
  const [repair_id, setRepair] = React.useState("");
  const [ButtonS, setButtonS] = React.useState(true);
  React.useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        handleLogIn();
      });
      return unsubscribe;
    }, [navigation]);
 
 //s console.log("hello")
  const handleArrived = async() =>{
    //  ("hello")
      await axios.post('https://enigmatic-mesa-42065.herokuapp.com/user/status',{repair_id}).then((res) =>{
          setStatus(res.data.body.status)
          if (res.data.body.status == "Completed" || res.data.body.status == "Cancelled"){
            setCurrent(false)
          }
          
      }).catch((err) => {
           (err);
      })
    }
  const getaddress1 = async (lat,lng) =>{
    var addressComponent
      await axios.get( 
       "http://www.mapquestapi.com/geocoding/v1/reverse?key="+KEY+"&location="+lat+","+lng+"&includeRoadMetadata=true&includeNearestIntersection=true",
        {
          headers: {
            "Content-type": "application/json"
          }
        }
      ).then(
        (response) => {
          //("Hello")
          ////(response.data)
          ////(response.data.results[0].locations[0].street);
          
          setStreet1(response.data.results[0].locations[0].street)
        }
      )
     }

     const getaddress2 = async (lat,lng) =>{
      var addressComponent
        await axios.get( 
         "http://www.mapquestapi.com/geocoding/v1/reverse?key="+KEY+"&location="+lat+","+lng+"&includeRoadMetadata=true&includeNearestIntersection=true",
          {
            headers: {
              "Content-type": "application/json"
            }
          }
        ).then(
          (response) => {
            //("Hello")
            ////(response.data)
            ////(response.data.results[0].locations[0].street);
            
            setStreet2(response.data.results[0].locations[0].street)
          }
        )
       }
  const handleLogIn = async () => {
    setCurrent(false);
    setButtonS(true);
    console.log(userState.userInfo.id);
        await axios.get(`https://enigmatic-mesa-42065.herokuapp.com/repair/get/${userState.userInfo.id}`, {
        })
        .then((response) => {
          var data = response.data.body;
          console.log(data);
          for (var i = 0; i < data.length; i++){
            if (data[i].status == "Completed" || data[i].status == "Cancelled"){
              setLati2(data[i].location.latitude)
              setLongi2(data[i].location.longitude)
              setDate2(dateFormat(data[i].date, "ddd mmm dd yyyy" ))
              setFare2(data[i].amount)
              setStatus2(data[i].status)
              ////(Lati, Longi)
              getaddress2(data[i].location.latitude, data[i].location.longitude)
              setPast(true)
            }
            else {   
                setLati(data[i].location.latitude)
                setLongi(data[i].location.longitude)
                setDate(dateFormat(data[i].date, "ddd mmm dd yyyy" ))
                setFare(data[i].amount)
                setStatus(data[i].status)
                setRepair(data[i]._id)
                ////(Lati, Longi)
                getaddress1(data[i].location.latitude, data[i].location.longitude)
                setCurrent(true)
                setButtonS(false) 
            }
           
          }
          //(response);
        })
        .catch((error) => {
            //(error)
            //Alert.alert("Unsuccessful")
        })
}
//
//(Current)
//(Past)
  return !userState.loading && userState.userInfo ? 
  (
     <SafeAreaProvider>
       <ScrollView>
     <View style={styles.container}>
     <Text style = {{ textAlign : 'center', fontSize : 27, color :'#364f6b', fontWeight: 'bold', marginVertical: 20 }}>BOOK A CAR OR BIKE MECHANIC</Text>
     <View style = {{flexDirection : 'row'}}><Image
    
        source={{ uri: "https://i.ibb.co/dkL4G53/bike.jpg"}}
        style = {{width : 110, height : 110, marginHorizontal : 15}}
      />
     <Image
    
    source={{ uri: "https://i.ibb.co/6PWQLw8/car.jpg"}}
    style = {{width : 110, height : 110}}
  />
      </View>
     {/*{ButtonS == true ? <TouchableOpacity onPress={() => {}}   style={styles.button}>
         <Text style={styles.buttonText}>BOOK NOW</Text>
  </TouchableOpacity> : null}*/}
       {Current == true ? <View style = {{flexDirection : 'row'}}><TouchableOpacity onPress={() =>navigation.navigate('Map')}><Text style = {{color : '#364f6b' , width: 300, fontWeight : 'bold', fontSize : 25, borderWidth: 3, borderColor: '#3cb371', borderRadius: 15, backgroundColor : '#fff', marginVertical: 20, textAlign : 'left'}}>  <Ionicons name="timer" size={32} color="green" /> Current Request {"\n"}  <AntDesign name="calendar" size={24} color="black" />  {date} {'\n'}  <Entypo name="location" size={24} color="black" />  {Street1} {'\n'}  <MaterialIcons name="book-online" size={24} color="black" />  {Status} {'\n'}  <Entypo name="wallet" size={24} color="black" />  EXPECTED PKR {Fare}</Text></TouchableOpacity></View> : <Image source={{uri : "https://i.ibb.co/GQqWh2K/appdev1.png"}} style={{ width: 300, height: 175, marginVertical: 12, borderRadius: 15}} />}
       {Past == true ? <View style = {{flexDirection : 'row'}}><Text style = {{color : '#364f6b' , width: 300, fontWeight : 'bold', fontSize : 25, borderWidth: 3, borderColor: '#98fb98', borderRadius: 15, backgroundColor : '#fff',  marginVertical: 20, textAlign : 'left'}}>  <Ionicons name="timer" size={32} color="green" /> Past Request{"\n"}  <AntDesign name="calendar" size={24} color="black" />  {date2}{'\n'}  <Entypo name="location" size={24} color="black" />  {Street2}{'\n'}  <MaterialIcons name="book-online" size={24} color="black" />  {Status2} {'\n'}  <Entypo name="wallet" size={24} color="black" />  PKR {Fare2}</Text></View> :  <Image source={{uri : "https://i.ibb.co/hsqMvdn/display.png"}} style={{ width: 300, height: 200, marginVertical: 12, borderRadius: 15}} />}    
          
       

       <StatusBar style="auto" />
       
      
     </View>
     </ScrollView>
     </SafeAreaProvider>  
  

  ) : (
    <Text>Loading</Text>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#f4511e",
    padding: 12,
    borderRadius: 60,
    marginVertical: 20,
  },
  buttonText: {
    fontSize : 20,
    color: '#fff',
    fontWeight: 'bold'
  }, 
 
});
const mapStateToProps = state =>{
  return{
    authState:state.auth,
    userState:state.user
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    getinfo:(tokenval) => dispatch(getUserInfo(tokenval))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
