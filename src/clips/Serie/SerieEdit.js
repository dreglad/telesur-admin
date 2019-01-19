import React from 'react';
import Typography from '@material-ui/core/Typography';
import { translate } from 'react-admin';
import {
  AutocompleteInput,
  BooleanInput,
  DisabledInput,
  DateTimeInput,
  Edit,
  FormTab,
  LongTextInput,
  ReferenceInput,
  SelectInput,
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
