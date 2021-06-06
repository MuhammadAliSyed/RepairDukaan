import {StyleSheet, View, Text, FlatList, ActivityIndicator, StatusBar} from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

function RatesScreen() {
    const [ratesList, setRatesList] = useState()

    useEffect(() => {
        axios.get('https://enigmatic-mesa-42065.herokuapp.com/api/rates/get')
            .then((response) => {
                console.log(response)
                setRatesList(response.data.body.rates)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

      const Item = ({ repair_type, rateOfRepair }) => (
        <View style={styles.flatview}>
          <Text style={styles.name}>{repair_type}</Text>
          <Text style = {styles.email}>{rateOfRepair}</Text>
        </View>
      );
    
      const renderItem = ({ item }) => (
        <Item repair_type={item.repair_type} rateOfRepair = {item.rateOfRepair} />
      );

    ratesList ? console.log(ratesList) : console.log("Loading")

    return ratesList ? (
        <View style = {styles.container}>
            <Text style={{ color: 'white', fontSize: 27, fontFamily: 'sans-serif-light', fontStyle: 'normal', borderColor: '#f4511e', width: 300, borderWidth: 2, borderRadius: 50, marginVertical: 10, backgroundColor: '#f4511e', textAlign: 'center' }}>RATES</Text>
        <FlatList
            data={ratesList}
            renderItem={renderItem}
            keyExtractor={item => item._id}
      />
        </View>
    ) : (
        <View>
            <View style = {styles.activity}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      h2text: {
        marginTop: 10,
        fontFamily: 'serif',
        fontSize: 36,
        fontWeight: 'bold',
      },
      flatview: {
        justifyContent: 'center',
        paddingTop: 30,
        borderRadius: 2,
      },
      name: {
        borderColor: '#364f6b',
        fontSize: 30,
        color: '#364f6b',
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 50,
        borderWidth: 2,
        width: 200
      },
      email: {
        borderColor: '#364f6b',
        color: 'red',
        textAlign: 'center',
        fontSize: 25,
        borderRadius: 50,
        borderWidth: 2,
        width: 50,
        alignSelf: 'center',
        marginVertical: 5
      },
      activity: {
        flex: 1,
        justifyContent: "center"
      }
})

  
export default RatesScreen;