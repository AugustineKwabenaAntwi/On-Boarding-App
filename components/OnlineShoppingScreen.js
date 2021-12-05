import React, { Component } from 'react'
import { View ,Text,Image, TouchableOpacity,StyleSheet} from 'react-native'

export default class OnlineShoppingScreen extends Component {
    render() {
        return (
            <View style ={styles.container}>
                <View style ={styles.headerContainer}>
                    <Text style={styles.headerText}>ONLINE SHOPPING</Text>
                </View>
                <View style= {styles.info}>
                    <Text style={styles.infoText} numberOfLines={5}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    </Text>
                </View>
                <Image style={styles.Image} source={require('../assets/online-shopping.png')} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20

    },
    headerContainer:{
        marginVertical:10,
    },
    headerText:{
        fontSize:30,
        fontWeight:'bold',
    },
    infoText:{
        color:"#aaaaaa",
        lineHeight:30,
        fontSize:16
    },
    Image:{
        height:300,
        width:300,
        marginVertical:10,
    },
    button:{
        justifyContent:"center",
        alignItems:"center",
        height:60,
        backgroundColor:"#5100ad",
        borderRadius:50,
        marginHorizontal:80

    },
    buttonText:{
        color:'white',
        fontWeight:"bold",
        fontSize:20,
    }

})
