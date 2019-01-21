import React from 'react';
import { translate } from 'react-admin';
import {
  BooleanInput,
  DisabledInput,
  Edit,
  LongTextInput,
  SimpleForm,
  TextInput
} from 'react-admin';
import PosterField from  './PosterField';

const SerieEdit = ({ translate, ...props }) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput label="Id" source="id" />

      <PosterField />

      <TextInput source="name" />

      <LongTextInput source="description" />

      <BooleanInput source="published" />
    </SimpleForm>
  </Edit>
);

export default translate(SerieEdit);
