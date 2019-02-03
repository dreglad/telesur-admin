import React from 'react';
import countryData from 'country-region-data';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { translate } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import {
  Arrayfield,
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

const ClipPagination = props => <Pagination rowsPerPageOptions={[25, 50, 100]} {...props} />

const ClipList = props => (
  <List
    {...props}
    filters={<ClipFilter />}
    actions={<ClipActions />}
    pagination={<ClipPagination />}
    perPage={25}
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
    <GenreInput source="genre.id" alwaysOn label="resources.Genre.label" />
    <TopicInput source="topic.id" label="resources.Topic.label" />
    <SerieInput source="swrie.id" alwaysOn label="resources.Serie.label" />
    <CountryInput label="Country" />
    <CorrespondentInput source="correspondent.id" label="resources.Correspondent.label" />
    <CategoryInput source="category.id" label="resources.Category.label" />
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

const EditorialField = ({ record }) => (
  <div style={{'maxWidth': '500px'}}>
    <Typography variant="subheading">
      {record.published ? (
        <a href={record.url} target="_blank">{record.title}</a>
      ) : (
        record.title
      )}
    </Typography>
    {record.tags.map(tag => (
      <Chip key={tag} label={tag} />
    ))}
    {record.correspondent && (
      <Chip avatar={<Avatar>{record.correspondent.id}</Avatar>} label={record.correspondent.name} variant="outlined" />
    )}
    <Typography variant="body2">{record.description}</Typography>
  </div>
);

EditorialField.defaultProps = {
  addLabel: true
};

const ClasificationGridField = ({ record }) => (
  <div style={{'maxWidth': '500px'}}>
    <Grid container spacing={8}>
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

const CountryField = ({ record: { country } }) => {
  const data = countryData.find(({ countryShortCode }) => countryShortCode === country );
  if (data.countryName) {
    return <span>{data.countryName} ({country})</span>
  }
};

CountryField.defaultProps = {
  addLabel: true
};

export default translate(ClipList);
