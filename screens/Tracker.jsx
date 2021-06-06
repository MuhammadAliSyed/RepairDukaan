import React,{useState,useEffect} from 'react';
import {View, Text,Animated,StyleSheet,Button,Alert, TouchableOpacity} from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import Constants from 'expo-constants';
import axios from 'axios';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.'
]);
//const repair_id = '6095bf546ce90e1ba0c1124a'
const Tracker = ({route,navigation}) => {
  var chck = false;
  var ride =  false;
  var finished = false;
  const [isPlaying, setIsPlaying] = useState(true);
  const[time,setTime] = useState(route.params.start);
  const [arrived,setArrived] = useState(false);
  const repair_id = route.params.data;
  const worker_id = route.params.worker_id;
 // console.log(worker_id)
  const [wname,setWname] = useState("");
  const [move,setMove] = useState(false);
  const getname = async() =>{
    await axios.post('https://enigmatic-mesa-42065.herokuapp.com/worker/info',{worker_id}).then((res) =>{
     setWname(res.data.body.first_name);
     // console.log(res.data);
    }).catch((err) => {
         console.log(err);
     });
  }
  const handleArrived = async() =>{
   //console.log("hello")
     await axios.post('https://enigmatic-mesa-42065.herokuapp.com/user/status',{repair_id}).then((res) =>{
       if(res.data.body.status == "Repair Started"){
         setMove(true);
        }
     }).catch((err) => {
         console.log(err);
     })
   }
  useEffect(() => {
    getname();
    var handle=setInterval(handleArrived,10000);    
  })

  const handleCancel = async () =>{
    endDate = new Date();
    var seconds = (endDate.getTime() - time.getTime()) / 60000;
    if (seconds >= 5 && chck == false){
      Alert.alert("You will be charged as 5 minutes have passed");
      chck = true;
    }
    else{
    await axios.post('https://enigmatic-mesa-42065.herokuapp.com/user/cancel',{repair_id,"time":seconds}).then((res) => {
    setIsPlaying(false);
    navigation.navigate('Map');
  }).catch((err) => {
    console.log(err);
  })}
  }
  function Update(t){
    setTime(t)
}
//handleArrived();
if(move){
  navigation.navigate("Inprogress",{repair_id:repair_id})
}
  return (
    <View style={styles.container}>
      <Text style = {{fontSize: 25, textAlign: 'center', color: '#364f6b', marginVertical: 30}}>Your Mechanic {wname} is Arriving Soon</Text>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={4*60}
        colors={[
          ['#004777', 0.4]
        ]}
        onComplete={() => [false]}
    >
      {({ remainingTime, animatedColor }) => (
        <View>
        <Animated.Text style={{ color: animatedColor, fontSize: 40, textAlign: 'center' }}>
        {Math.ceil(remainingTime/60)}
        </Animated.Text>
        <Animated.Text style={{ color: animatedColor, fontSize: 20, textAlign: 'center' }}>
        Minutes</Animated.Text>
        </View>
      )}
    </CountdownCircleTimer>
    <TouchableOpacity onPress={handleCancel} style={styles.button}>
      <Text style={styles.buttonText}>Cancel</Text>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    backgroundColor: "#f4511e",
    padding: 12,
    borderRadius: 60,
    marginVertical: 40,
},
buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
},
});

export default Tracker;
