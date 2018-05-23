import React , { Component } from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 20,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  name:{
    paddingTop: 15,
    paddingLeft: 10,
    fontWeight: 'bold',
  }
});

export default styles;