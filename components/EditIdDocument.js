import * as yup from 'yup'
import { Formik } from 'formik'

import React, { Component, Fragment } from 'react'
import { TextInput, Text, Button, Alert, StyleSheet } from 'react-native'

export default class EditIdDocument extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ passportnumber: '' }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          passportnumber: yup
            .string()
            .required()
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <Fragment>
            <TextInput
              value={values.passportnumber}
              onChangeText={handleChange('passportnumber')}
              onBlur={() => setFieldTouched('passportnumber')}
              placeholder="Passport Number"
            />
            {touched.passportnumber && errors.passportnumber &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.passportnumber}</Text>
            }

            <Button
              title='Update Identity Document'
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
