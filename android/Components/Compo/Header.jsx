import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const Header = () => {
    return (
        <View>
            <LinearGradient start={{ x: 0, y: 0 }} colors={['#88dae0', '#98e1d6', '#9ee4d4']} end={{ x: 1, y: 0 }}
                style={{ padding: 10 }}
            >
                <View style={{ flexDirection: 'row' }} >
                    <View style={styles.nav}>
                        <Fontisto name='search' size={22} color="black" style={styles.serchicon} />
                        <TextInput placeholder='Search Amazone.in'
                            style={styles.searchnav}
                        />

                        <AntDesign name="scan1" style={styles.scan} />
                    </View>
                    <View>
                        <MaterialIcons name="mic-none" style={styles.mic} />
                    </View>

                </View>
            </LinearGradient>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        padding: 0,
        backgroundColor: 'white',
        width: 340,
        height: 45,
        borderWidth: 0.8,
        borderColor: 'gray',
        borderRadius: 8,


    },
    searchnav: {
        fontSize: 17,
        fontWeight: '400',
        marginLeft: 5,
    },
    serchicon: {
        marginTop: 11,
        marginLeft: 10,
    },
    scan: {
        marginLeft: 112,
        marginTop: 11,
        fontSize: 22,
    },
    mic: {
        marginTop: 10,
        marginLeft: 5,
        fontSize: 30,

        fontWeight: '600',
        color: 'black',
    }
})