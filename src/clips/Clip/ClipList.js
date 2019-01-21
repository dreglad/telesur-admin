import React from 'react';
import { translate } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import {
  AutocompleteInput,
  BooleanField,
  CardActions,
  CreateButton,
  Datagrid,
  DateField,
  EditButton,
  Filter,
  ImageField,
  List,
  NullableBooleanInput,
  ReferenceField,
  ReferenceInput,
  RefreshButton,
  Responsive,
  SearchInput,
  SelectInput,
  SimpleList,
  TextField,
} from 'react-admin';
import { PosterField } from '../Serie';

const ClipList = props => (
  <List
    filters={<ClipFilter translate={props.translate} />}
    actions={<ClipActions />}
    {...props}
  >
    <Responsive
      small={<ClipsList />}
      medium={<ClipsGrid />}
    />
  </List>
);

const ClipsList = props => (
  <SimpleList
    primaryText={record => new Date(record.date).toLocaleDateString()}
    secondaryText={record => (
      <EditorialField record={record} />
    )}
    leftAvatar={record => <ImageField {...{ record }} source="thumbnailSmall" title="title" />}
    tertiaryText={record => record.id}
    {...props}
  />
);

const ClipsGrid = props => (
  <Datagrid expand={<EditorialField />} {...props}>
    <ImageField source="thumbnailSmall" title="title" />

    <DateField source="date" showTime />

    <BooleanField source="published" />

    {/*<MetadataField />*/}

    <ReferenceField label="Genre" source="genre.id" reference="Genre" allowEmpty>
      <TextField source="name" />
    </ReferenceField>

    {/*<Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
    </Datagrid>*/}

    <ReferenceField label="Serie" source="serie.id" reference="Serie" linkType="show" allowEmpty>
      <PosterField />
    </ReferenceField>

    <ReferenceField label="Topic" source="topic.id" reference="Topic" linkType="show" allowEmpty>
      <TextField source="name" />
    </ReferenceField>

    <EditButton />
  </Datagrid>
);

export const ClipFilter = props => (
  <Filter {...props}>
    <SearchInput source="search" alwaysOn />

    <NullableBooleanInput source="published" alwaysOn />

    <ReferenceInput source="genre.id" reference="Genre" perPage={300} alwaysOn label={props.translate('resources.Genre.name', 1)}>
      <SelectInput optionText="name"/>
    </ReferenceInput>

    <ReferenceInput source="serie.id" reference="Serie" perPage={300} alwaysOn label={props.translate('resources.Serie.name', 1)}>
      <AutocompleteInput optionText="name" />
    </ReferenceInput>

    <ReferenceInput source="correspondent.id" reference="Correspondent" perPage={300} alwaysOn label={props.translate('resources.Correspondent.name', 1)}>
      <AutocompleteInput optionText="name" />
    </ReferenceInput>

    <ReferenceInput source="topic.id" reference="Topic" perPage={300} alwaysOn label={props.translate('resources.Topic.name', 1)}>
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

const ClipActions = ({
    bulkActions,
    basePath,
    currentSort,
    displayedFilters,
    exporter,
    filters,
    filterValues,
    onUnselectItems,
    resource,
    selectedIds,
    showFilter,
    total
}) => (
  <CardActions>
    {bulkActions && React.cloneElement(bulkActions, {
      basePath,
      filterValues,
      resource,
      selectedIds,
      onUnselectItems,
    })}
    {filters && React.cloneElement(filters, {
      resource,
      showFilter,
      displayedFilters,
      filterValues,
      context: 'button',
    }) }
    <CreateButton basePath={basePath} />
    <RefreshButton />
  </CardActions>
);


const MetadataField = ({ record }) => (
  <div style={{'maxWidth': '500px'}}>
    <Typography variant="title">{record.title}</Typography>
  </div>
);

MetadataField.defaultProps = {
    addLabel: true
};

const EditorialField = ({ record }) => (
  <div style={{'maxWidth': '500px'}}>
    <Typography variant="title">{record.title}</Typography>
    <Typography variant="body1">{record.description}</Typography>
  </div>
);

EditorialField.defaultProps = {
    addLabel: true
};

export default translate(ClipList);
