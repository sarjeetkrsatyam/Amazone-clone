import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Cat2 from '../Compo/img/travel.jpeg';
import Cat1 from '../Compo/img/beauty.jpeg';
import Cat3 from '../Compo/img/deals.jpeg';
import Cat4 from '../Compo/img/electronic.jpeg';
import Cat5 from '../Compo/img/furniture.jpeg';
import Cat6 from '../Compo/img/home.jpeg';
import Cat7 from '../Compo/img/mobile.jpeg';
import Cat8 from '../Compo/img/movie.jpeg';
import Cat9 from '../Compo/img/RiceAtta.jpeg';
import { useNavigation } from '@react-navigation/native';
const Categery = () => {

  const navigation = useNavigation();

  return (
    <ScrollView horizontal >
      <LinearGradient start={{ x: 0, y: 0 }} colors={['#e3c588', '#edddbe', '#f2ecdf']} end={{ x: 1, y: 0 }}
        style={{ padding: 10 }}
      >
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('ProductScreen')}
          >
         <View style={{flexDirection:'column'}}>
        <View style={styles.circle} >
          <Image source={Cat9} style={styles.cateimag} />
          </View>

        <Text style={{ marginLeft: 11, fontSize: 15, color: 'black', marginTop:5 }}>RiceAtta</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={()=>navigation.navigate('ProductScreen2')}
          >
         <View style={{flexDirection:'column', marginLeft:10}}>
        <View style={styles.circle} >
          <Image source={Cat2} style={styles.cateimag} />
          </View>

        <Text style={{ marginLeft: 16, fontSize: 15, color: 'black', marginTop:5 }}>Fashion</Text>
        </View>
        </TouchableOpacity>

         <View style={{flexDirection:'column', marginLeft:10}}>
        <View style={styles.circle} >
          <Image source={Cat3} style={styles.cateimag} />
          </View>

        <Text style={{ marginLeft: 16, fontSize: 15, color: 'black', marginTop:5 }}>Deals</Text>
        </View>
         <View style={{flexDirection:'column', marginLeft:10}}>
        <View style={styles.circle} >
          <Image source={Cat4} style={styles.cateimag} />
          </View>

        <Text style={{ marginLeft: 16, fontSize: 15, color: 'black', marginTop:5 }}>Electrinic</Text>
        </View>
         <View style={{flexDirection:'column', marginLeft:10}}>
        <View style={styles.circle} >
          <Image source={Cat5} style={styles.cateimag} />
          </View>

        <Text style={{ marginLeft: 16, fontSize: 15, color: 'black', marginTop:5 }}>Furniture</Text>
        </View>
         <View style={{flexDirection:'column', marginLeft:10}}>
        <View style={styles.circle} >
          <Image source={Cat6} style={styles.cateimag} />
          </View>

        <Text style={{ marginLeft: 16, fontSize: 15, color: 'black', marginTop:5 }}>Home</Text>
        </View>
         <View style={{flexDirection:'column', marginLeft:10}}>
        <View style={styles.circle} >
          <Image source={Cat7} style={styles.cateimag} />
          </View>

        <Text style={{ marginLeft: 16, fontSize: 15, color: 'black', marginTop:5 }}>Mobile</Text>
        </View>
         <View style={{flexDirection:'column', marginLeft:10}}>
        <View style={styles.circle} >
          <Image source={Cat8} style={styles.cateimag} />
          </View>

        <Text style={{ marginLeft: 16, fontSize: 15, color: 'black', marginTop:5 }}>Movies</Text>
        </View>
         <View style={{flexDirection:'column', marginLeft:10}}>
        <View style={styles.circle} >
          <Image source={Cat1} style={styles.cateimag} />
          </View>

        <Text style={{ marginLeft: 16, fontSize: 15, color: 'black', marginTop:5 }}>Makeup</Text>
        </View>
       
      
        </View>
        

      </LinearGradient>

    </ScrollView>
  )
}

export default Categery

const styles = StyleSheet.create({
  categrymain: {

  },
  circle: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderWidth: 1,
    borderCurve: 'circular',
    borderRadius: 40,
    
  },
  cateimag: {
    width: 60,
    height: 75,
    alignItems: 'center',
    marginTop: 3,
    marginLeft: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35


  }
})