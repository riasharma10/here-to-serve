import React, { useState, useEffect } from 'react'
import countryList from 'react-select-country-list'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types';

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Columns from 'react-bulma-components/lib/components/columns'
import Button from 'react-bulma-components/lib/components/button'
import {
  Field,
  Control,
  Input,
  Select,
} from 'react-bulma-components/lib/components/form'

import CheckboxTermofUse from '../components/checkboxTermofUse'

export default function Register(props) {
  // Non-bulma styles
  var containerStyle = {
    margin: '5% auto',
    maxWidth: '700px',
    padding: '4rem',
    border: '0.1rem solid #E5E5E5',
    borderRadius: '1rem',
  }
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('United States')
  const [state, setState] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validForm, setValidForm] = useState(false)

  let history = useHistory()

  useEffect(() => {
    const formValues = [
      firstName,
      lastName,
      address,
      city,
      country,
      state,
      zipcode,
      phoneNumber,
      email,
      password,
      confirmEmail,
      confirmPassword,
    ]
    const notValidForm =
      formValues.some((formVal) => {
        return formVal === ''
      }) ||
      email !== confirmEmail ||
      password !== confirmPassword
    setValidForm(notValidForm)
  }, [
    firstName,
    lastName,
    address,
    city,
    country,
    state,
    zipcode,
    phoneNumber,
    email,
    password,
    confirmEmail,
    confirmPassword,
  ])

  useEffect(() => {
    if ((localStorage.getItem('token') != null) || props.logged_in) {
      history.push('/my-communities')
    }
  })

  return (
    <Container style={containerStyle}>
      <Heading size={4}>Join a Care Community</Heading>
      <Heading size={6}>Basic Information</Heading>
      <Columns>
        <Columns.Column>
          <Field>
            <Control>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='First Name*'
              />
            </Control>
          </Field>
        </Columns.Column>
        <Columns.Column>
          <Field>
            <Control>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Last Name*'
              />
            </Control>
          </Field>
        </Columns.Column>
      </Columns>
      <Field>
        <Control>
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Address*'
          />
        </Control>
      </Field>
      <Columns>
        <Columns.Column>
          <Field>
            <Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder='City*'
            />
          </Field>
        </Columns.Column>
        <Columns.Column>
          <Select
            name='country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {countryList()
              .getLabels()
              .map((c) => (
                <option style={{ position: 'static' }} value={c}>
                  {c}
                </option>
              ))}
          </Select>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column>
          <Field>
            <Control>
              <Input
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder='State*'
              />
            </Control>
          </Field>
        </Columns.Column>
        <Columns.Column>
          <Field>
            <Control>
              <Input
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                placeholder='Zip Code*'
              />
            </Control>
          </Field>
        </Columns.Column>
        <Columns.Column>
          <Field>
            <Control>
              <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='Phone Number*'
              />
            </Control>
          </Field>
        </Columns.Column>
      </Columns>
      <Heading size={6}>Login Information</Heading>
      <Field>
        <Control>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email*'
          />
        </Control>
      </Field>
      <Field>
        <Control>
          <Input
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            placeholder='Confirm Email*'
          />
        </Control>
      </Field>
      <Columns>
        <Columns.Column>
          <Field>
            <Control>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password*'
              />
            </Control>
          </Field>
        </Columns.Column>
        <Columns.Column>
          <Field>
            <Control>
              <Input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder='Confirm Password*'
              />
            </Control>
          </Field>
        </Columns.Column>
      </Columns>
      <CheckboxTermofUse />
      <Button
        style={{ marginTop: '1rem' }}
        color='primary'
        fullwidth={true}
        disabled={validForm}
        onClick={() => props.handle_signup(firstName, lastName, address, city, country, state, zipcode, phoneNumber, email, password)}
      >
        CREATE ACCOUNT
      </Button>
    </Container>
  )
}

Register.propTypes = {
  handle_signup: PropTypes.func.isRequired,
  logged_in: PropTypes.bool.isRequired
};