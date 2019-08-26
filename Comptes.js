import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Comptes extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Adria!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC46B',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

