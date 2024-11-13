import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { AntDesign } from "@expo/vector-icons"

import { styles } from './styles';

export function BuyButton() {
  return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
              <AntDesign name='shoppingcart' size={24} color={"white"} style={ {paddingRight:10} } />
              <Text style={styles.text}>Buy This</Text>
          </TouchableOpacity>
    </View>
  );
}