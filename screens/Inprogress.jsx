import React,{useState,useEffect} from 'react';
import {View, Text,Animated,StyleSheet,Button,Alert, Image} from 'react-native'
import Constants from 'expo-constants';
import axios from 'axios';
const Inprogress = ({route,navigation}) => {
    const repair_id = route.params.repair_id;
  const [move,setMove] = useState(false);
    const handleArrived = async() =>{
        // console.log("hello")
          await axios.post('https://enigmatic-mesa-42065.herokuapp.com/user/status',{repair_id}).then((res) =>{
             if(res.data.body.status == "Completed"){
              setMove(true)
            }
          }).catch((err) => {
              console.log(err);
          })
        }
        useEffect(() => {
          var handle=setInterval(handleArrived,1000);    
        })
        if(move){
          navigation.navigate("Map",{repair_id:repair_id})
        }
       return(
           <View style={styles.container}>
               <Text style = {{fontSize: 30, color: '#364f6b', fontWeight: 'bold', marginBottom: 20}}>Your Repair Has Started</Text>
               <Image source = {{uri : "https://bestanimations.com/media/loading-gears/2074796765loading-gears-animation-3.gif", height: 300, width: 350}}/>
           </View>
       )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: 'aliceblue',
      padding: 8,
    }
  });
export default Inprogress;
