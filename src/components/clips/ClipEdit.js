import React from 'react';
import {
  Edit,
  SimpleForm,
  DisabledInput,
  TextInput,
  LongTextInput,
  DateInput
} from 'react-admin';

const ClipTitle = ({ record }) => {
  return <span>Clip {record ? `"${record.id } - ${record.slug }"` : ''}</span>;
};

const ClipEdit = props => (
  <Edit title={<ClipTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <TextInput source="teaser" options={{ multiLine: true }} />
      <LongTextInput source="description" />
      <DateInput label="Publication date" source="published_at" />
      <TextInput source="average_note" />
      <DisabledInput label="Nb views" source="views" />
    </SimpleForm>
  </Edit>
);

export default ClipEdit;

export {
  ClipEdit,
  ClipTitle,
};