import React from 'react';
import Typography from '@material-ui/core/Typography';
import { translate } from 'react-admin';
import ReactPlayer from 'react-player';
import {
  BooleanInput,
  DisabledInput,
  DateTimeInput,
  Edit,
  FormTab,
  LongTextInput,
  TabbedForm,
  TextInput
} from 'react-admin';
import {
  CategoryInput,
  CorrespondentInput,
  CountryInput,
  GenreInput,
  SerieInput,
  TopicInput
} from './inputs';

const ClipEdit = ({ translate, ...props }) => (
  <Edit
    title={<ClipTitle />}
    aside={<Aside />}
    {...props}
  >
    <TabbedForm>
      <FormTab label={translate('Redacci', 1)}>
        <DisabledInput label="Id" source="id" />

        <BooleanInput source="published" />

        <TextInput source="title" />

        <LongTextInput source="description" />

        <DateTimeInput source="date" />

        <GenreInput />

        <SerieInput />

        <CorrespondentInput />

        <CategoryInput />

        <TopicInput />

        <CountryInput />
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
