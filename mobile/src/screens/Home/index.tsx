import React from 'react';
import { Text, View } from 'react-native';
import { Header } from '../../components/Header';

function Home ({ navigation }: any ) {
  return (
    <View>
      <Header navigation={navigation} isHome={true}/>
    </View>
  );
}

export default Home;