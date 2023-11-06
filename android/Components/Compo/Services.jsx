import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';
import Amazonepay from '../images/pay.png';
import Sendomey from '../images/send.png';
import Scan from '../images/scan2.png';
import Bill from '../images/bill.png';
import Service1 from '../images/service1.jpeg';
import Service2 from '../images/service2.jpeg';
import Service3 from '../images/service3.jpeg';
import Service4 from '../images/service5.jpeg';
import Service6 from '../images/service3.jpeg';
import Service7 from '../images/service9.jpeg';
import Service8 from '../images/service1.jpeg';
import Service9 from '../images/service3.jpeg';




const Services = () => {
    return (
        <ScrollView horizontal
            style={styles.conatiner} >
            <View style={styles.heightwidth} >

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 8 }}>
                    <View >
                        <Image source={Amazonepay} style={styles.pay} />
                        <Text style={styles.amazonepaytext}>Amazone Pay</Text>
                    </View>
                    <View style={styles.imaghiwidth} >
                        <Image source={Sendomey} style={styles.sendmoney} />
                        <Text style={styles.sendmoneytext}>Send Money</Text>
                    </View>

                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginLeft: 8,
                    marginRight: 8,

                }}>
                    <View style={styles.imaghiwidth} >
                        <Image source={Scan} style={styles.scan} />
                        <Text style={styles.scanqrtext}>Scan any QR</Text>
                    </View>
                    <View style={styles.imaghiwidth} >
                        <Image source={Bill} style={styles.bill} />
                        <Text style={styles.paybiltext}>Pay Bills</Text>
                    </View>

                </View>
            </View>

            <View style={styles.heightwidth2} >
           
                <Image source={Service1} style={styles.service1imag} />
                <Text style={styles.service1text}>Up  to  30%  off  TV</Text>
                
            </View>

            <View style={styles.heightwidth3} >
                <Image source={Service2} style={styles.service1imag} />
                <Text style={styles.service1text}>Up to 70% off Fashion </Text>
            </View>

            <View style={styles.heightwidth4} >
                <Image source={Service3} style={styles.service1imag} />
                <Text style={styles.service1text}>Up to 90% off Deal it</Text>
            </View>

            <View style={styles.heightwidth5} >
                <Image source={Service4} style={styles.service1imag} />
                <Text style={styles.service1text}>Best Price off on EMI </Text>
            </View>

            <View style={styles.heightwidth6} >
                <Image source={Service6} style={styles.service1imag} />
                <Text style={styles.service1text}>Up to 70% off Deals</Text>
            </View>

            <View style={styles.heightwidth7} >
                <Image source={Service7} style={styles.service1imag} />
                <Text style={styles.service1text}>Up 75% off Fashion</Text>
            </View>

            <View style={styles.heightwidth8} >
                <Image source={Service8} style={styles.service1imag} />
                <Text style={styles.service1text}>Up to 50% off deal TV </Text>
            </View>

            <View style={styles.heightwidth9} >
                <Image source={Service9} style={styles.service1imag} />
                <Text style={styles.service1text}> 20% off best deal </Text>
            </View>



        </ScrollView>
    )
}

export default Services

const styles = StyleSheet.create({

    conatiner: {

    },
    service1text: {
        flexWrap: 'wrap',
        position: 'absolute',
        fontSize: 17,
        marginTop: 3,
        marginLeft: 5,
        color: 'black',
        fontWeight: '500',
       
    },





    heightwidth: {
        height: 180,
        width: 180,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        margin: 4
    },
    heightwidth2: {
        height: 180,
        width: 180,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        margin: 4,
        backgroundColor:'#a3e6c0',
        position:'relative',
    },
    heightwidth3: {
        height: 180,
        width: 180,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        margin: 4,
        backgroundColor:'#e3db9d',
        position:'relative',
    },
    heightwidth4: {
        height: 180,
        width: 180,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        margin: 4,
        backgroundColor:'#f5bae6',
        position:'relative',
    },
    heightwidth5: {
        height: 180,
        width: 180,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        margin: 4,
        backgroundColor:'#e6c387',
        position:'relative',
    },
    heightwidth6: {
        height: 180,
        width: 180,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        margin: 4,
        backgroundColor:'#f5bae6',
        position:'relative',
    },
    heightwidth7: {
        height: 180,
        width: 180,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        margin: 4,
        backgroundColor:'#294075',
        position:'relative',
    },
    heightwidth8: {
        height: 180,
        width: 180,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        margin: 4,
        backgroundColor:'#a3e6c0',
        position:'relative',
    },
    heightwidth9: {
        height: 180,
        width: 180,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        margin: 4,
        backgroundColor:'#f5bae6',
        position:'relative',
    },



    pay: {
        width: 65,
        height: 65,
        borderRadius: 65
    },
    sendmoney: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginTop: 4,
        marginLeft: 5
    },
    imaghiwidth: {
        height: 65,
        width: 65,
        borderRadius: 65,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'green',

    },
    bill: {
        width: 45,
        height: 45,
        borderRadius: 45,
        marginTop: 5,
        marginLeft: 6
    },
    scan: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginTop: 4,
        marginLeft: 3,
        position: 'relative'
    },
    amazonepaytext: {
        fontSize: 12,
        fontWeight: '400',
        color: "black",
        marginLeft: -2
    },
    sendmoneytext: {
        fontSize: 12,
        marginLeft: -7,
        fontWeight: '400',
        color: 'black',
        marginTop: 9
    },
    scanqrtext: {
        fontSize: 12,
        marginLeft: -6,
        fontWeight: '400',
        color: 'black',
        marginTop: 6,

    },
    paybiltext: {
        fontSize: 12,
        marginLeft: 9,
        fontWeight: '400',
        color: 'black',
        marginTop: 12,
    },
    service1imag: {
        height: 150,
        width: '100%',
        backgroundCover: 'cover',
        position: 'relative',
        marginTop:28,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5,
        
    }


})