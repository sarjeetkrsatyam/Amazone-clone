import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Rec1 from '../images/rec3.jpeg';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const Recomend = () => {
    return (
        <View style={{ marginBottom: 10 }}>
            <Text style={styles.recmmtext} >Recommended deals for you</Text>
            <View style={styles.heightwidth}>
                <Image source={Rec1} style={styles.imag} />

            </View>
            <View>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Text style={styles.off}>18% off</Text>
                    <TouchableOpacity>
                        <Text style={styles.deal} >Deal</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row' }}>

                    <FontAwesome name='rupee' style={styles.rupee} />

                    <Text style={styles.rupeedown}>1,549.00</Text>

                    <Text style={styles.mrp}> <Text style={{}}> M.R.P.  </Text>

                        <FontAwesome name='rupee' />
                        1895.00   </Text>
                    <View style={styles.widthcut}></View>

                </View>
                <Text style={styles.facetext}>Biotique Face wash Natural product</Text>
                <TouchableOpacity>
                <Text style={styles.seedeals} >See all deals</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Recomend

const styles = StyleSheet.create({
    recmmtext: {
        margin: 8,
        fontSize: 17,
        color: 'black',
        fontWeight: '500',
    },
    heightwidth: {
        height: 250,
        width: 393,
    },
    imag: {
        height: '100%',
        width: '100%',
    },
    off: {
        padding: 5,
        backgroundColor: 'red',
        fontSize: 17,
        color: 'white',
        borderRadius: 5
    },
    deal: {
        marginTop: 5,
        fontSize: 17,
        color: 'red',
        marginLeft: 5
    },
    rupee: {
        marginLeft: 8,
        fontSize: 19,
        color: 'black'
    },
    rupeedown: {
        fontSize: 17,
        color: 'black',
        marginTop: -3,
        marginLeft: 4
    },
    mrp: {
        fontSize: 14,
        color: 'gray',
        position: 'relative',
        marginLeft:-2

    },
    widthcut: {
        borderBottomWidth: 1.5,
        borderColor: 'gray',
        width: 50,
        position: 'absolute',
        marginLeft: 146,
        marginTop: 10,
    },
    facetext:{
        marginLeft:6,
        fontSize:17,
        fontWeight:'400',
        color:'black',
    },
    seedeals:{
        marginLeft:7,
        marginTop:4,
        color:'#017185',
    }
  
})