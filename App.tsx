import { View, Text, StatusBar } from 'react-native'
import React from 'react'

import Router from './android/Components/Navigation/Router';


const App = () => {
  return (
    <>
      <StatusBar backgroundColor='#88dae0' barStyle='dark-content' />
      <Router />
      
      
    </>
  )
}

export default App