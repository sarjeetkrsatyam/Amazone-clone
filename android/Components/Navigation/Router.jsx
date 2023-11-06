import { View, Text } from 'react-native'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from '../Screens/Homescreen';
import ProductScreen from '../Screens/ProductScreen';
import ProductScreen2 from '../Screens/ProductScreen2';


const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Homescreen'  component={Homescreen}
        options={()=>({
          headerShown:false,
        })}
        />
        <Stack.Screen name='ProductScreen'  component={ProductScreen} />
        <Stack.Screen name='ProductScreen2'  component={ProductScreen2} />

        </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default Router