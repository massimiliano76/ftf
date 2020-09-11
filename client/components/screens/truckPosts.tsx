import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import axios from 'axios';
import TruckPostItem from '../dropIns/TruckPostItem';

export default function TruckPosts({ navigation }) {
  const [currentTruckPosts, setCurrentTruckPosts] = useState([]);
  const currentTruckId = navigation.state.params.params.navigation.state.params.params.currentTruck.id;

  useEffect(() => {
    axios.get(`${process.env.EXPO_LocalLan}/truck/truckpost/${currentTruckId}`)
      .then((response) => {
        console.log('response.data', response.data);
        setCurrentTruckPosts(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const pressHandler = () => {
    navigation.navigate('TruckReviews');
  };
  const pressHandlerDetails = () => {
    navigation.navigate('TruckDetails', );
  };

  return (
    <View style={styles.container}>
      <TruckPostItem />
      <Button title='Go To Reviews' onPress={pressHandler} />
      <Button title='Go To Details' onPress={pressHandlerDetails} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
