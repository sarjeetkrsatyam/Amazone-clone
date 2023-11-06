import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const DeliverTo = () => {
    return (
        <View style={{flexDirection:'row', padding:10, backgroundColor:'#c5f6fa', alignItems:'center'}} >
             <SimpleLineIcons name="location-pin" style={styles.locationicon} />
            <Text style={styles.delivertext}>Deliver to Sarjeet-Patna 804452</Text>
           <AntDesign name="down" style={styles.down} />
        </View>
    )
}

export default DeliverTo

const styles = StyleSheet.create({
    locationicon:{
        fontSize:22,
        color:'black',
        fontWeight:'700'
    },
    delivertext:{
        fontSize:15,
        color:'black',
        marginLeft:8,
    },
    down:{
        marginLeft:2,
        color:'black',
        fontSize:15,
        marginTop:5
    }
})