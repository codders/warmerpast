import * as yup from 'yup'
import { Formik } from 'formik'

import React, { Component, Fragment } from 'react'
import { TextInput, Text, Button, Alert, StyleSheet } from 'react-native'

export default class EditProfile extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ address: '', city: '', country: '', postcode: '' }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          address: yup
            .string()
            .required(),
          city: yup
            .string()
            .required(),
          country: yup
            .string()
            .required(),
          postcode: yup
            .string()
            .required()
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <Fragment>
            <TextInput
              value={values.address}
              onChangeText={handleChange('address')}
              onBlur={() => setFieldTouched('address')}
              placeholder="Address"
            />
            {touched.address && errors.address &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.address}</Text>
            }
            <TextInput
              value={values.city}
              onChangeText={handleChange('city')}
              onBlur={() => setFieldTouched('city')}
              placeholder="City"
            />
            {touched.city && errors.city &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.city}</Text>
            }
            <TextInput
              value={values.country}
              onChangeText={handleChange('country')}
              onBlur={() => setFieldTouched('country')}
              placeholder="Country"
            />
            {touched.country && errors.country &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.country}</Text>
            }
            <TextInput
              value={values.postcode}
              onChangeText={handleChange('postcode')}
              onBlur={() => setFieldTouched('postcode')}
              placeholder="Postcode"
            />
            {touched.postcode && errors.postcode &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.postcode}</Text>
            }

            <Button
              title='Update Address'
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </Fragment>
        )}
      </Formik>
    );
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
