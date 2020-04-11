import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Text, View, StatusBar} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'


const weather_condition = {
    Thunderstorm : {
        iconName : "weather-lightning",
        gradient : ['#2C3E50','#4CA1AF']
    },
    Drizzle : {
        iconName : "weather-rainy",
        gradient : ['#2C3E50','#4CA1AF']
    },
    Rain : {
        iconName : "weather-rainy",
        gradient : ['#bdc3c7','#2c3e50']
    },
    Snow : {
        iconName : "weather-snowy",
        gradient : ['#8e9eab','#eef2f3']
    },
    Mist : {
        iconName : "weather-fog",
        gradient : ['#bdc3c7','#2c3e50']
    },
    Smoke : {
        iconName : "weather-fog",
        gradient : ['#bdc3c7','#2c3e50']
    },
    Haze : {
        iconName : "weather-fog",
        gradient : ['##5C258D','##4389A2']
    },
    Dust : {
        iconName : "weather-fog",
        gradient : ['#bdc3c7','#2c3e50']
    },
    Fog : {
        iconName : "weather-fog",
        gradient : ['#bdc3c7','#2c3e50']
    },
    Sand : {
        iconName : "weather-fog",
        gradient : ['#bdc3c7','#2c3e50']
    },
    Ash : {
        iconName : "weather-fog",
        gradient : ['#bdc3c7','#2c3e50']
    },
    Squall : {
        iconName : "weather-fog",
        gradient : ['#bdc3c7','#2c3e50']
    },
    Tornado : {
        iconName : "weather-hurricane",
        gradient : ['#DC2424','#4A569D']
    },
    Clear : {
        iconName : "weather-sunny",
        gradient : ['#fc4a1a', '#f7b733']
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient : ['#076585','#fff']
    }
  }


export default function Weather({temp, condition}) {

    return <LinearGradient
          colors={weather_condition[condition].gradient}
          style={styles.container}>
          <StatusBar barStyle="light-content"/>
                <View style={styles.halfcontainer}>
                    <MaterialCommunityIcons size={96} name = {weather_condition[condition].iconName} color="white"/>
                    <Text style={styles.temp} >{temp}</Text>
                    <Text style={styles.condition}>{condition}</Text>
                </View>
                <View style={styles.halfcontainer}>
                
                    <Text style = {styles.title}></Text>
                    <Text style = {styles.subtitle}></Text>
                </View>
        </LinearGradient>
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfcontainer : {
        flex:1,
        justifyContent : "center",
        alignItems : "center"
    },
    temp : {
        fontSize: 42,
        color: "white"
    },
    condition : {
        fontSize: 32,
        color : "white"
    },
    title : {
        fontSize : 30,
        color : 'white',
        marginBottom: 10
    }, 
    subtitle : {
        fontSize : 25,
        color : 'white'
    }
})