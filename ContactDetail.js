/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import{StackNavigator} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


type Props = {};
export default class ContactDetail extends Component<Props> {
  render() {
    const {params}=this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle}
           source={{uri:params.icon}}/>

          <Text style={styles.nameStyle}>
            名称：{params.name}
          </Text>
          <Text style={styles.typeStyle}>
            分组:{params.type}
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imageStyle:{
    width:300,
    height:300
  },
  nameStyle:{
    fontSize:30
  },
  typeStyle:{
    fontSize:20
  }


});
