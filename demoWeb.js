/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  WebView,
  Dimensions
} from 'react-native';

type Props = {};
const {width, height} = Dimensions.get('window');
const url = "https://news.sina.com.cn/";
export default class demoWeb extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

        <WebView
          style={{width:width,height:height}}
          source={require('./Video.html')}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={false}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
