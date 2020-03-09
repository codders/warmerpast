import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { Button } from 'react-native-elements'
import FormInput from './FormInput'
import FormButton from './FormButton'

export default class ContactForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleEmailChange = email => {
    this.setState({ email })
  }

  handlePasswordChange = password => {
    this.setState({ password })
  }

  onLogin = async () => {
    const { email, password } = this.state
    try {
      if (email.length > 0 && password.length > 0) {
        this.props.navigation.navigate('App')
      }
    } catch (error) {
      alert(error)
    }
  }

  goToSignup = () => this.props.navigation.navigate('Signup')
  render() {
    const { 
      firstName,
      lastName,
      passportNumber,
      streetAddress,
      postalCode,
      country,
      emailAddress,
      password,
      username,
      photoURL
    } = this.state

    return (
      <SafeAreaView style={styles.container}>
        <FormInput
          name='first-name'
          value={firstName}
          placeholder='First Name'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
          iconName='ios-mail'
          iconColor='#2C384A'
        />
        <FormInput
          name='last-name'
          value={lastName}
          placeholder='Last Name'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
          iconName='ios-mail'
          iconColor='#2C384A'
        />
        <FormInput
          name='passport-number'
          value={passportNumber}
          placeholder='Passport Number'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
          iconName='ios-mail'
          iconColor='#2C384A'
        />
        <FormInput
          name='street-address'
          value={streetAddress}
          placeholder='Street Address'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
          iconName='ios-mail'
          iconColor='#2C384A'
        />
        <FormInput
          name='postal-code'
          value={postalCode}
          placeholder='Postal Code'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
          iconName='ios-mail'
          iconColor='#2C384A'
        />

        <FormInput
          name='password'
          value={password}
          placeholder='Enter password'
          secureTextEntry
          onChangeText={this.handlePasswordChange}
          iconName='ios-lock'
          iconColor='#2C384A'
        />
        <View style={styles.buttonContainer}>
          <FormButton
            buttonType='outline'
            onPress={this.handleOnLogin}
            title='SAVE'
            buttonColor='#039BE5'
          />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    margin: 25
  },
  highlight: {
    fontWeight: '700',
  },
});
