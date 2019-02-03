import React from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { translate } from 'react-admin';
import ReactPlayer from 'react-player';
import {
  ArrayInput,
  AutocompleteArrayInput,
  BooleanInput,
  DisabledInput,
  DateTimeInput,
  Edit,
  FormTab,
  LongTextInput,
  ReferenceArrayInput,
  ReferenceInput,
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
      <FormTab label={translate('Info')}>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <BooleanInput source="published" label="resources.Clip.fields.published" />
          </Grid>
          <Grid item xs={6}>
            <BooleanInput source="uploadYoutube" label="resources.Clip.fields.uploadYoutube" />
          </Grid>
          <Grid item xs={6}>
            <DisabledInput label="Id" source="id" />
          </Grid>
          <Grid item xs={6}>
            <DateTimeInput source="date" label="resources.Clip.fields.date" />
          </Grid>
          <Grid item xs={12}>
            <TextInput source="title" label="resources.Clip.fields.title" style={{ width: '100%'}} />
          </Grid>
          <Grid item xs={12}>
            <LongTextInput source="description" label="resources.Clip.fields.description" />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutocompleteArrayInput source="tags" options={{
              fullWidth: true
            }} />
            {/*<ArrayInput source="tags">
              <SimpleFormIterator>
                <ChipInput />
              </SimpleFormIterator>
            </ArrayInput>*/}
          </Grid>
          <Grid item xs={12} md={6}>
            <AutocompleteArrayInput source="hashtags" options={{
              fullWidth: true
            }} />
          </Grid>
          <Grid item xs={6}>
            <DateTimeInput source="date" label="resources.Clip.fields.date" />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <GenreInput />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <SerieInput />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <CorrespondentInput />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <CategoryInput style={{ width: '100%'}} />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <TopicInput style={{ width: '100%'}} />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <CountryInput />
          </Grid>
        </Grid>
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
