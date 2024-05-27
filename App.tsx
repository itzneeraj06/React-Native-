import React from 'react'

import {
  View,
  Text,
  SafeAreaView,
  ScrollView
} from 'react-native'
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCards from './components/ActionCards';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>

          <Text>Hello World !</Text>
          <FlatCards />
          <ElevatedCards/>
          <FancyCards/>
          <ActionCards/>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;