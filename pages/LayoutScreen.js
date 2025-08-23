import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LayoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.box]}>
        <Text style={styles.text}>Header</Text>
      </View>
      <View style={[styles.body, styles.box]}>
        <Text style={styles.text}>Body Content</Text>
      </View>
      <View style={[styles.footer, styles.box]}>
        <Text style={styles.text}>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'green',
  },
  body: {
    flex: 1,
    backgroundColor: 'blue',
  },
  footer: {
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LayoutScreen;