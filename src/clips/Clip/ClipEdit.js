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
  TabbedForm,
  TextInput
} from 'react-admin';
// import { DateInput, TimeInput, DateTimeInput } from 'react-admin-date-inputs';
import ReactPlayer from 'react-player';

const ClipEdit = ({ translate, ...props }) => (
  <Edit
    title={<ClipTitle />}
    aside={<Aside />}
    {...props}
  >
    <TabbedForm>
      <FormTab label={translate('Redacci', 1)}>
        <DisabledInput label="Id" source="id" />

        <ReferenceInput source="genre.id" reference="Genre" label={translate('resources.Genre.name', 1)}>
          <SelectInput optionText="name" />
        </ReferenceInput>

        <ReferenceInput source="correspondent.id" reference="Correspondent" label={translate('resources.Correspondent.name', 1)}>
          <AutocompleteInput optionText="name" />
        </ReferenceInput>

        <TextInput source="title" />

        <LongTextInput source="description" />

        <DateTimeInput source="date" />

        <ReferenceInput source="serie.id" reference="Serie" label={translate('resources.Serie.name', 1)}>
          <AutocompleteInput optionText="name" />
        </ReferenceInput>

        <ReferenceInput source="topic.id" reference="Topic" label={translate('resources.Topic.name', 1)}>
          <AutocompleteInput optionText="name" />
        </ReferenceInput>

        <BooleanInput source="published" />
      </FormTab>
      <FormTab label="body">
      </FormTab>
    </TabbedForm>
  </Edit>
);

const Aside = ({ record }) => (
  <div style={{ width: 360, margin: '0.5em' }}>
    {record && (
      <ReactPlayer
        url={record.hls}
        pip
        controls
        playing
        width={360}
        height={200}
      />
    )}
    <Typography variant="title"></Typography>
    <Typography variant="body1">
      Posts will only be published one an editor approves them
    </Typography>
  </div>
);

const ClipTitle = ({ record }) => (
  <span>Clip {record ? `"${record.id } - ${record.slug}"` : ''}</span>
);

export default translate(ClipEdit);
