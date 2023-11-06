import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react';
import Brand1 from '../images/brand5.jpeg';
import Brand2 from '../images/brand2.jpeg';
import Brand3 from '../images/brand3.jpeg';
import Brand4 from '../images/brand4.jpeg';

const Brand = () => {
    return (
        <View>
            <Text style={styles.recmmtext} >Brands of the day</Text>

            <View style={{ flexDirection: 'row' }} >


                <View style={styles.brand1} >
                    <View style={styles.brand11}>
                        <Image source={Brand1} style={styles.brandpic1} />

                    </View>
                    <Text style={styles.brandtext} > Min 20% OFF on Brand HUMF Lady watch</Text>
                </View  >


                <View style={styles.brand1} >
                    <View style={styles.brand11}>
                        <Image source={Brand2} style={styles.brandpic1} />
                    </View>
                    <Text style={styles.brandtext} > Min 18% OFF on Lady bag and parse  </Text>
                </View>

            </View>

            <View style={{ flexDirection: 'row' }} >

                <View style={styles.brand1} >
                    <View style={styles.brand11}>
                        <Image source={Brand3} style={styles.brandpic1} />
                    </View>
                    <Text style={styles.brandtext} > Min 30% OFF on Brand TITNE Man watch  </Text>
                </View  >

                <View style={styles.brand1} >
                    <View style={styles.brand11}>
                        <Image source={Brand4} style={styles.brandpic1} />
                    </View>
                    <Text style={styles.brandtext} > Min 35% OFF on American tourister Trolly </Text>
                </View>

            </View>


        </View>
    )
}

export default Brand

const styles = StyleSheet.create({
    brand1: {
        height: 210,
        width: 187,
        backgroundColor: '#e6e7eb',
        borderRadius: 10,
        margin: 5
    },
    brand11: {
        height: 155,
        width: 182.5,
        backgroundColor: 'white',
        borderTopRightRadius: 9,
        borderTopLeftRadius: 9,
    },
    brandpic1: {
        height: '100%',
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

    },
    recmmtext: {
        margin: 5,
        fontSize: 18,
        color: 'black',
        fontWeight: '600',
        marginTop: -6,
        marginLeft: 10,
    },
    brandtext:{
        fontSize:16,
        fontWeight:'500',
        color:'black',
        textAlign:'center',
    }
})