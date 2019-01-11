import React from 'react';
import {
  Edit,
  TabbedForm,
  DisabledInput,
  TextInput,
  LongTextInput,
  BooleanInput,
  DateInput,
  FormTab
} from 'react-admin';
import ReactPlayer from 'react-player'

const ClipPlayer = ({ record }) => (
  <ReactPlayer
    url={record.hls}
    pip
    controls
    playing
  />
);

const ClipTitle = ({ record }) => {
  return <span>Clip {record ? `"${record.id } - ${record.slug }"` : ''}</span>;
};

const ClipEdit = props => (
  <Edit title={<ClipTitle />} {...props}>
    <TabbedForm>
      <FormTab label="body">
        <DisabledInput label="Id" source="id" />
        <ClipPlayer source="hls" />
        <DisabledInput source="id" />
        <TextInput source="title" />
        <TextInput label="Genre" source="genre.id" options={{ multiLine: true }} />
        <LongTextInput source="description" />
        <DateInput label="Date" source="date" />
        <TextInput label="Serie" source="serie.id" />
        <BooleanInput label="Publicado" source="published" defaultValue />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default ClipEdit;

export {
    ClipEdit,
    ClipTitle,
};