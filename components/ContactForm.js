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
      confirmPassword,
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
        />
        <FormInput
          name='last-name'
          value={lastName}
          placeholder='Last Name'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
        />
        <FormInput
          name='username'
          value={username}
          placeholder='Username'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
        />
        <FormInput
          name='passport-number'
          value={passportNumber}
          placeholder='Passport Number'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
        />
        <FormInput
          name='street-address'
          value={streetAddress}
          placeholder='Street Address'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
        />
        <FormInput
          name='postal-code'
          value={postalCode}
          placeholder='Postal Code'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
        />
        <FormInput
          name='country'
          value={country}
          placeholder='Country'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
        />
        <FormInput
          name='email-address'
          value={emailAddress}
          placeholder='Email Address'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
        />
        <FormInput
          name='password'
          value={password}
          placeholder='Change password'
          secureTextEntry
          onChangeText={this.handlePasswordChange}
        />
        <FormInput
          name='confirm-password'
          value={confirmPassword}
          placeholder='Confirm password'
          secureTextEntry
          onChangeText={this.handlePasswordChange}
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
