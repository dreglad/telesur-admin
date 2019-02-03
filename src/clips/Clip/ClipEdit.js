import React from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { translate } from 'react-admin';
import ReactPlayer from 'react-player';
import {
  AutocompleteArrayInput,
  BooleanInput,
  CardActions,
  DateTimeInput,
  Edit,
  FormTab,
  LongTextInput,
  SaveButton,
  ShowButton,
  TabbedForm,
  TextInput,
  Toolbar,
} from 'react-admin';
import {
  CountryInput,
  RelatedInput
} from './inputs';

// const ClipEditActions = ({ basePath, data, resource }) => (
//   <CardActions>
//     <ShowButton basePath={basePath} record={data} />
//     {/* Add your custom actions */}
//     {/*<Button color="primary" onClick={customAction}>Custom Action</Button>*/}
//   </CardActions>
// );

const PostCreateToolbar = props => (
  <Toolbar {...props} >
    <SaveButton
      label="post.action.save_and_show"
      redirect="show"
      submitOnEnter={true}
    />
    <SaveButton
      label="post.action.save_and_add"
      redirect={false}
      submitOnEnter={false}
      variant="flat"
    />
  </Toolbar>
);

const SerieClipFormTab = ({ translate, label, ...props }) => (
  <FormTab label={label}>
  </FormTab>
);

const ClipEdit = ({ translate, ...props }) => (
  <Edit
    title={<ClipTitle />}
    aside={<Aside />}
    {...props}
  >
    <TabbedForm>
      <FormTab label={translate('Info')}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <BooleanInput source="published" label="resources.Clip.fields.published" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BooleanInput source="uploadYoutube" label="resources.Clip.fields.uploadYoutube" />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <DateTimeInput source="date" label="resources.Clip.fields.date" />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <RelatedInput reference="Serie" source="serie.id" />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <RelatedInput reference="Genre" source="genre.id" allowEmpty />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <RelatedInput reference="Correspondent" source="correspondent.id" allowEmpty />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <RelatedInput reference="Category" source="category.id" allowEmpty resettable />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <RelatedInput reference="Topic" source="topic.id" allowEmpty resettable />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <CountryInput />
          </Grid>
          <Grid item xs={12}>
            <TextInput source="title" style={{ width: '100%'}} />
          </Grid>
          <Grid item xs={12}>
            <LongTextInput source="description" label="resources.Clip.fields.description" />
          </Grid>
          <Grid item xs={12} md={6}>
            {/*<AutocompleteArrayInput source="tags" options={{
              fullWidth: true
            }} />*/}
            {/*<ArrayInput source="tags">
              <SimpleFormIterator>
                <ChipInput />
              </SimpleFormIterator>
            </ArrayInput>*/}
            {/*<TagsField source="tags" />*/}
          </Grid>
          <Grid item xs={12} md={6}>
            <AutocompleteArrayInput source="hashtags" options={{
              fullWidth: true
            }} />
          </Grid>
          <Grid item xs={6}>
            <DateTimeInput source="date" label="resources.Clip.fields.date" />
          </Grid>
        </Grid>
      </FormTab>
      <SerieClipFormTab label="Programa" />
    </TabbedForm>
  </Edit>
);

const TagsField = ({ record }) => (
  <ul>
    {record.tags.map(tag => (
      <li key={tag}>{tag}</li>
    ))}
  </ul>
);

TagsField.defaultProps = { addLabel: true };

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
