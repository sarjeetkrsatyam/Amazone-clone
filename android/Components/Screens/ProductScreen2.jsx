import { View, Text, StyleSheet, Image,ScrollView } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

import G1 from '../images/f1.jpeg';
import G2 from '../images/f2.jpeg';
import G3 from '../images/f3.jpeg';
import G4 from '../images/f4.jpeg';
import G5 from '../images/f5.jpeg';


const ProductScreen2 = () => {
  return (
    
      <ScrollView>
      <Text style={styles.resulttext}>Results</Text>
      <Text style={styles.productsize}>Price and others details may very based on product size and color </Text>

      <View style={styles.contaoiner} >
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.container2}>
            <View style={styles.imgconatiner}>
              <Image source={G1} style={styles.imag1} />

            </View>
          </View>


          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.rewatrice}>Deawat devaaya, Longs & {'\n'} Fluffy Basmati Rice, 5 Kg</Text>

            <View style={{ flexDirection: 'row', }}>
              <AntDesign name='star' style={styles.star1} />

              <AntDesign name='star' style={styles.star1} />

              <AntDesign name='star' style={styles.star1} />

              <AntDesign name='star' style={styles.star1} />

              <FontAwesome name='star-half-full' style={styles.star1} />
              <AntDesign name='down' style={styles.downerrow} />
              <Text style={{ fontSize: 18, color: '#08755f' }}>4,310</Text>

            </View>
            <Text style={{ fontSize: 17, color: 'gray' }}>2k+ bought in past month</Text>

            <View style={{ flexDirection: 'row' }}>
              <FontAwesome name='rupee' style={{ fontSize: 16, color: 'black', marginTop: 7, marginLeft: 5, }} />
              <Text style={{ position: 'relative' }} >
                <Text style={{ fontSize: 22, color: 'black' }}>720 </Text>
                <Text style={{ color: 'black', fontWeight: '300' }}>
                  ( <FontAwesome name='rupee' style={{ fontSize: 14, color: 'gray', fontWeight: '300' }} />
                  /kg) M.R.P:.
                  <FontAwesome name='rupee' style={{ color: 'gray', }} /> 750

                </Text>


              </Text>
              <View style={styles.widthrupee}></View>
            </View>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: '500' }}>(4% OFF)</Text>

            <View style={{ flexDirection: 'row' }}>
              < AntDesign name='check' style={styles.check} />
              <Text style={styles.prime}>prime</Text>
              <Text style={{ fontSize: 16, color: 'black' }}></Text>
              <Text style={styles.getit}>Get it by</Text>
              <Text style={styles.tomorow}> Tomorrow</Text>
            </View>
            <Text  style={styles.tomorow} > 7 August </Text>



          </View>
        </View>
      </View>
      <View style={styles.contaoiner} >
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.container2}>
            <View style={styles.imgconatiner}>
              <Image source={G2} style={styles.imag1} />

            </View>
          </View>


          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.rewatrice}>UNIBIC Cookies 75 g (Pack of 10) Biscuit Combo</Text>

            <View style={{ flexDirection: 'row', }}>
              <AntDesign name='star' style={styles.star1} />

              <AntDesign name='star' style={styles.star1} />

              <AntDesign name='star' style={styles.star1} />

              <AntDesign name='star' style={styles.star1} />

              <FontAwesome name='star-half-full' style={styles.star1} />
              <AntDesign name='down' style={styles.downerrow} />
              <Text style={{ fontSize: 18, color: '#08755f' }}>4,310</Text>

            </View>
            <Text style={{ fontSize: 17, color: 'gray' }}>1k+ bought in past month</Text>

            <View style={{ flexDirection: 'row' }}>
              <FontAwesome name='rupee' style={{ fontSize: 16, color: 'black', marginTop: 7, marginLeft: 5, }} />
              <Text style={{ position: 'relative' }} >
                <Text style={{ fontSize: 22, color: 'black' }}>199 </Text>
                <Text style={{ color: 'black', fontWeight: '300' }}>
                  ( <FontAwesome name='rupee' style={{ fontSize: 14, color: 'gray', fontWeight: '300' }} />
                  /kg) M.R.P:.
                  <FontAwesome name='rupee' style={{ color: 'gray', }} /> 250

                </Text>


              </Text>
              <View style={styles.widthrupee}></View>
            </View>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: '500' }}>(4% OFF)</Text>

            <View style={{ flexDirection: 'row' }}>
              < AntDesign name='check' style={styles.check} />
              <Text style={styles.prime}>prime</Text>
              <Text style={{ fontSize: 16, color: 'black' }}></Text>
              <Text style={styles.getit}>Get it by</Text>
              <Text style={styles.tomorow}> Tomorrow</Text>
            </View>
            <Text  style={styles.tomorow} > 10  August </Text>



          </View>
        </View>
      </View>
      <View style={styles.contaoiner} >
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.container2}>
            <View style={styles.imgconatiner}>
              <Image source={G3} style={styles.imag1} />

            </View>
          </View>


          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.rewatrice}>Amazon Brand Vedaka {'\n'} Popular  Toor Dal</Text>

            <View style={{ flexDirection: 'row', }}>
              <AntDesign name='star' style={styles.star1} />

              <AntDesign name='star' style={styles.star1} />

              <AntDesign name='star' style={styles.star1} />

              <AntDesign name='star' style={styles.star1} />

              <FontAwesome name='star-half-full' style={styles.star1} />
              <AntDesign name='down' style={styles.downerrow} />
              <Text style={{ fontSize: 18, color: '#08755f' }}>2,310</Text>

            </View>
            <Text style={{ fontSize: 17, color: 'gray' }}>3k+ bought in past month</Text>

            <View style={{ flexDirection: 'row' }}>
              <FontAwesome name='rupee' style={{ fontSize: 16, color: 'black', marginTop: 7, marginLeft: 5, }} />
              <Text style={{ position: 'relative' }} >
                <Text style={{ fontSize: 22, color: 'black' }}>299 </Text>
                <Text style={{ color: 'black', fontWeight: '300' }}>
                  ( <FontAwesome name='rupee' style={{ fontSize: 14, color: 'gray', fontWeight: '300' }} />
                  /kg) M.R.P:.
                  <FontAwesome name='rupee' style={{ color: 'gray', }} /> 357

                </Text>


              </Text>
              <View style={styles.widthrupee}></View>
            </View>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: '500' }}>(4% OFF)</Text>

            <View style={{ flexDirection: 'row' }}>
              < AntDesign name='check' style={styles.check} />
              <Text style={styles.prime}>prime</Text>
              <Text style={{ fontSize: 16, color: 'black' }}></Text>
              <Text style={styles.getit}>Get it by</Text>
              <Text style={styles.tomorow}> Tomorrow</Text>
            </View>
            <Text  style={styles.tomorow} > 14  August </Text>



          </View>
        </View>
      </View>
      <View style={styles.contaoiner} >
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.container2}>
            <View style={styles.imgconatiner}>
              <Image source={G4} style={styles.imag1} />

            </View>
          </View>


          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.rewatrice}>Deawat devaaya, Longs & {'\n'} Sahad 1 Kg</Text>

            <View style={{ flexDirection: 'row', }}>
              <AntDesign name='star' style={styles.star1} />

              <AntDesign name='star' style={styles.star1} />

              <AntDesign name='star' style={styles.star1} />

              <AntDesign name='star' style={styles.star1} />

              <FontAwesome name='star-half-full' style={styles.star1} />
              <AntDesign name='down' style={styles.downerrow} />
              <Text style={{ fontSize: 18, color: '#08755f' }}>1,310</Text>

            </View>
            <Text style={{ fontSize: 17, color: 'gray' }}>1k+ bought in past month</Text>

            <View style={{ flexDirection: 'row' }}>
              <FontAwesome name='rupee' style={{ fontSize: 16, color: 'black', marginTop: 7, marginLeft: 5, }} />
              <Text style={{ position: 'relative' }} >
                <Text style={{ fontSize: 22, color: 'black' }}>420 </Text>
                <Text style={{ color: 'black', fontWeight: '300' }}>
                  ( <FontAwesome name='rupee' style={{ fontSize: 14, color: 'gray', fontWeight: '300' }} />
                  /kg) M.R.P:.
                  <FontAwesome name='rupee' style={{ color: 'gray', }} /> 650

                </Text>


              </Text>
              <View style={styles.widthrupee}></View>
            </View>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: '500' }}>(4% OFF)</Text>

            <View style={{ flexDirection: 'row' }}>
              < AntDesign name='check' style={styles.check} />
              <Text style={styles.prime}>prime</Text>
              <Text style={{ fontSize: 16, color: 'black' }}></Text>
              <Text style={styles.getit}>Get it by</Text>
              <Text style={styles.tomorow}> Tomorrow</Text>
            </View>
            <Text  style={styles.tomorow} > 9  August </Text>



          </View>
        </View>
      </View>
      <View style={styles.contaoiner} >
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.container2}>
            <View style={styles.imgconatiner}>
              <Image source={G5} style={styles.imag1} />

            </View>
          </View>


          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.rewatrice}>Deawat devaaya, Longs & {'\n'} God's Chai 1 Kg</Text>

            <View style={{ flexDirection: 'row', }}>
              <AntDesign name='star' style={styles.star1} />

              <AntDesign name='star' style={styles.star1} />

              <AntDesign name='star' style={styles.star1} />

              <AntDesign name='star' style={styles.star1} />

              <FontAwesome name='star-half-full' style={styles.star1} />
              <AntDesign name='down' style={styles.downerrow} />
              <Text style={{ fontSize: 18, color: '#08755f' }}>2,310</Text>

            </View>
            <Text style={{ fontSize: 17, color: 'gray' }}>1k+ bought in past month</Text>

            <View style={{ flexDirection: 'row' }}>
              <FontAwesome name='rupee' style={{ fontSize: 16, color: 'black', marginTop: 7, marginLeft: 5, }} />
              <Text style={{ position: 'relative' }} >
                <Text style={{ fontSize: 22, color: 'black' }}>1220 </Text>
                <Text style={{ color: 'black', fontWeight: '300' }}>
                  ( <FontAwesome name='rupee' style={{ fontSize: 14, color: 'gray', fontWeight: '300' }} />
                  /kg) M.R.P:.
                  <FontAwesome name='rupee' style={{ color: 'gray', }} /> 2350

                </Text>


              </Text>
              <View style={styles.widthrupee}></View>
            </View>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: '500' }}>(4% OFF)</Text>

            <View style={{ flexDirection: 'row' }}>
              < AntDesign name='check' style={styles.check} />
              <Text style={styles.prime}>prime</Text>
              <Text style={{ fontSize: 16, color: 'black' }}></Text>
              <Text style={styles.getit}>Get it by</Text>
              <Text style={styles.tomorow}> Tomorrow</Text>
            </View>
            <Text  style={styles.tomorow} > 16  August </Text>



          </View>
        </View>
      </View>
      </ScrollView>

    
  )
}

export default ProductScreen2

const styles = StyleSheet.create({
  contaoiner: {
    height: 200,
    width: 389,
    backgroundColor: 'white',
    borderWidth: 1,

  },
  rewatrice: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black'
  },
  resulttext: {
    fontSize: 20,
    marginTop: 5,
    marginLeft: 5,
    color: 'black',
    fontWeight: '500'
  },
  productsize: {
    fontSize: 12,
    color: 'black',
    fontWeight: '400',
    marginLeft: 5,
    marginBottom: 8,

  },
  container2: {
    height: 200,
    width: 183,
    backgroundColor: '#d8e3e1',
  },
  imgconatiner: {
    height: 180,
    width: 170,
    backgroundColor: 'green',
    margin: 5

  },
  imag1: {
    height: '100%',
    width: '100%',


  },
  star1: {
    fontSize: 18,
    color: '#d9940b',
    marginLeft: 5,
    marginTop: 3,

  },
  downerrow: {
    fontSize: 14,
    margin: 5

  },
  widthrupee: {
    borderBottomWidth: 1,
    width: 22,
    color: 'red',
    marginLeft: 154,
    marginTop: 18,
    position: 'absolute'
  },
  check: {
    fontSize: 16,
    color: '#d9940b',
    marginTop: 7,
    fontWeight: '700'
  },
  prime: {
    fontSize: 17,
    color: '#1788ad',
    fontWeight: '700'
  },
  getit: {
    fontSize: 16,
    marginLeft:2,
    color:'black'
  },
  tomorow:{
    fontSize:17,
    fontWeight:'800',
    color:'black'
  }



})