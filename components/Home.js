import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Colors from './Colors'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <Text style={styles.sectionDescription}>
            See your WarmerPast profile here
          </Text>
          <Button
            title="Edit Profile"
            onPress={() => this.props.navigation.navigate('EditProfile')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});
