import React from 'react';
import { SafeAreaView,
         ScrollView,
         StyleSheet,
         Text,
         View,
         ImageBackground,
         Image,
         Button } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import Colors from './Colors'

export default class ViewProfile extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.body}>
        <ScrollView style={styles.scroll}>
          <View style={styles.headerContainer}>
            <ImageBackground
              style={styles.headerBackgroundImage}
              blurRadius={1}
              source={require('./profile-background.jpg')}
            >
              <View style={styles.headerColumn}>
                <Image
                  style={styles.userImage}
                  source={require('./profile-picture.jpg')}
                />
                <Text style={styles.userNameText}>Arthur Taylor</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>E-Mail</Text>
            <Text style={styles.sectionDescription}>
              arthur.taylor@example.com
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Address</Text>
            <Text style={styles.sectionDescription}>
              Karl Marx Allee 103
            </Text>
            <Text style={styles.sectionDescription}>
              10398 Berlin
            </Text>
            <Text style={styles.sectionDescription}>
              Germany
            </Text>
            <Button
              title="Update Address"
              onPress={() => this.props.navigation.navigate('EditAddress')}
            />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Identity Document</Text>
            <Text style={styles.sectionDescription}>
              Passport: 1230984
            </Text>
            <Button
              title="Update Identity Document"
              onPress={() => this.props.navigation.navigate('EditIdDocument')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    flex: 1
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
  cardContainer: {
    backgroundColor: Colors.white,
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  emailContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 35,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  scroll: {
    backgroundColor: Colors.white,
  },
  telContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#01C89E',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
});
