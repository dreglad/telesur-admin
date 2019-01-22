import React from 'react';
import countryData from 'country-region-data';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import { translate } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import {
  BooleanField,
  CardActions,
  ChipField,
  CreateButton,
  Datagrid,
  DateField,
  EditButton,
  Filter,
  ImageField,
  List,
  Pagination,
  RefreshButton,
  Responsive,
  SearchInput,
  SimpleList,
} from 'react-admin';
import {
  CategoryInput,
  CorrespondentInput,
  CountryInput,
  GenreInput,
  SerieInput,
  StatusInput,
  TopicInput
} from './inputs';
import { PosterField } from '../Serie';

const ClipList = props => (
  <List
    {...props}
    filters={<ClipFilter />}
    actions={<ClipActions />}
    perPage={25}
    pagination={<Pagination rowsPerPageOptions={[25, 50, 100]} {...props} />}
  >
    <Responsive
      small={<ClipsSimpleList />}
      medium={<ClipsGrid />}
    />
  </List>
);

const ClipsSimpleList = props => (
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

const gridStyles = {
  rowCell: {
    verticalAlign: 'top',
  }
};

const ClipsGrid = withStyles(gridStyles)(({ classes, ...props }) => (
  <Datagrid {...props} classes={classes}>
    <ImageField source="thumbnail" title="title" />
    <EditorialField />
    <BooleanField source="published" />
    <ClasificationGridField />
    <ClipActionsField />
  </Datagrid>
));

const ClipActionsField = props => (
  <div>
    <EditButton {...props} />
  </div>
);

export const ClipFilter = props => (
  <Filter {...props}>
    <StatusInput source="published" alwaysOn label="Status" />
    <SearchInput source="search" alwaysOn label="Search" />
    <GenreInput alwaysOn label="resources.Genre.label" />
    <TopicInput label="resources.Topic.label" />
    <SerieInput alwaysOn label="resources.Serie.label" />
    <CountryInput label="Country" />
    <CorrespondentInput label="resources.Correspondent.label" />
    <CategoryInput label="resources.Category.label" />
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

const ClasificationGridField = ({ record }) => (
  <div style={{'maxWidth': '500px'}}>
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <DateField source="date" record={record} showTime />
      </Grid>
      <Grid item xs={12}>
        {record.genre && <ChipField record={record.genre} source="name" />}
      </Grid>
      <Grid item xs={12} sm={4}>
        <PosterField record={record.serie} />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant="title">{record.serie.name}</Typography>
      </Grid>
    </Grid>
  </div>
);

ClasificationGridField.defaultProps = {
  addLabel: true
};

const EditorialField = ({ record }) => (
  <div style={{'maxWidth': '500px'}}>
    <Typography variant="subheading">
      {record.published ? (
        <a href={record.url} target="_blank">{record.title}</a>
      ) : (
        record.title
      )}
    </Typography>
    {record.correspondent && <ChipField record={record.correspondent} color="seocndary" source="name" />}
    {record.category && <ChipField record={record.category} color="primary" source="name" />}
    {record.topic && <ChipField record={record.topic} source="name" />}
    {record.country && <ChipField record={record} source="country" />}
    <Typography variant="body2">{record.description}</Typography>
  </div>
);

EditorialField.defaultProps = {
  addLabel: true
};

const CountryField = ({ record: { country } }) => {
  const data = countryData.find(({ countryShortCode }) => countryShortCode === country );
  if (!data.countryName) {
    console.log('NOOOO')
    return;
  }
  return (
    <div>
      {`${data.countryName} (${country})`}
    </div>
  );
};

CountryField.defaultProps = {
  addLabel: true
};

export default translate(ClipList);
