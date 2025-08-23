import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, StatusBar, Platform, Button } from 'react-native';

const DUMMY_IMAGE_1 = 'https://cdn2.steamgriddb.com/thumb/833e89d3d9a150b0feba26e590fd09ce.jpg';
const DUMMY_IMAGE_2 = 'https://cdn2.steamgriddb.com/thumb/1a56bb4c25aa3debc90b373af184960b.png';
const DUMMY_IMAGE_3 = 'https://cdn2.steamgriddb.com/thumb/a097bd56f2aba2345550f8aa79aee810.jpg';

export default function FlexScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.profileContainer}>
        <Image source={{ uri: DUMMY_IMAGE_1 }} style={styles.profileImage} />
        <Image source={{ uri: DUMMY_IMAGE_2 }} style={styles.profileImage} />
        <Image source={{ uri: DUMMY_IMAGE_3 }} style={styles.profileImage} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  profileContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  buttonContainer: {
    marginTop: 20,
  },
});