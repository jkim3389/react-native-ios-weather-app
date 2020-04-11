import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading.js'
import * as Location from 'expo-location'
import {Alert} from 'react-native'
import Weather from './Weather.js';

export default class App extends React.Component {
  state = {
    isLoading : true
  }

  getWeather = async (latitude, longitude) => {
    try{
      const apiKey = "a1042f73c18fb5731c38abc97d433b25"
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
      const resJson = await res.json()
      this.setState({
        temp:resJson.main.temp,
        condition: resJson.weather[0].main
      })
      return resJson
    } catch ( err){
        console.log(err)
    }
  }
  // https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}
  getLocation = async ()=>{

    try {
       await Location.requestPermissionsAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude)
      const weather = await this.getWeather(latitude, longitude)
      console.log(weather)
      this.setState({isLoading:false})

    } catch(err) {
        Alert.alert("can not find user", ":(")
    }
  }
  componentDidMount() {
   this.getLocation()
  }

  render() {
    const {isLoading} = this.state
  return isLoading?<Loading/>: <Weather temp={Math.round(this.state.temp)} condition={this.state.condition}/>;
  } 
}

// const styles = StyleSheet.create({
//   container: {
//     //In web, the default flexDirection is row while react native has column as default. 
//     flex: 1,
//     // flexDirection: 'row',
//     backgroundColor: 'red',
    
//   },
//   yellowView : {
//     flex : 1,
//     backgroundColor: "yellow"
//   },
  
//   blueView : {
//     flex: 1,
//     backgroundColor: 'blue'
//   }
// });
