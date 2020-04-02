import React, { useState } from 'react'
import countryList from 'react-select-country-list'

import {
  Field,
  Checkbox,
  Control,
  Input,
  Select,
  Textarea
} from 'react-bulma-components/lib/components/form'
import Button from 'react-bulma-components/lib/components/button'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Columns from 'react-bulma-components/lib/components/columns'
import Notification from 'react-bulma-components/lib/components/notification'

const CheckboxField = ({ text }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
    <Checkbox style={{ marginRight: '10px' }} />
    <p>{text}</p>
  </div>
)

export default function CreateCommunity() {
  // Non-bulma styles
  var containerStyle = {
    margin: '10% auto',
    maxWidth: '700px',
    padding: '4rem',
    border: '0.1rem solid #E5E5E5',
    borderRadius: '1rem'
  }
  var noteStyle = {
    color: '#E5E5E5',
    fontSize: '0.75rem',
    fontStyle: 'italic'
  }
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [country, setCountry] = useState('United States')
  return (
    <Container style={containerStyle}>
      <Heading size={4}>Create New Community</Heading>
      <Heading size={6}>Basic Information</Heading>
      <Field>
        <Control>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Community Name'
          />
        </Control>
      </Field>
      <Field>
        <Textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder='Community Description'
        />
      </Field>
      <Field>
        <Columns>
          <Columns.Column>
            <Field>
              <Input
                value={zipCode}
                onChange={e => setZipCode(e.target.value)}
                placeholder='Zip Code'
              />
            </Field>
          </Columns.Column>
          <Columns.Column>
            <Select
              name='country'
              value={country}
              onChange={e => setCountry(e.target.value)}
            >
              {countryList()
                .getLabels()
                .map(c => (
                  <option style={{ position: 'static' }} value={c}>
                    {c}
                  </option>
                ))}
            </Select>
          </Columns.Column>
        </Columns>
      </Field>
      <p className='has-text-grey-light' style={noteStyle}>
        The zip code should be the location of the community, not necessarily
        where the caregiver lives.
      </p>
      <br />
      <Field className='has-text-grey'>
        <CheckboxField
          text={
            'Allow friends and family to find this community by name and/or postal code.'
          }
        />
        <CheckboxField text={'Allow all members to send invitations.'} />
        <CheckboxField text={'I have read and agreed to the Terms of Use.'} />
      </Field>
      <br />
      <Button style={{ marginBottom: '1rem' }} color='primary' fullwidth={true}>
        CREATE COMMUNITY
      </Button>
      <Notification className='has-text-grey'>
        <a href='#'>Click here</a> to find and join existing communities.
      </Notification>
    </Container>
  )
}