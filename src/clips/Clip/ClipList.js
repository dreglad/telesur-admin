import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { translate } from 'react-admin';
import {
  BooleanField,
  CardActions,
  CreateButton,
  Datagrid,
  EditButton,
  Filter,
  ImageField,
  List,
  Pagination,
  RefreshButton,
  Responsive,
  SearchInput,
  SimpleList,
  SimpleFormIterator
} from 'react-admin';
import {
  CategoryInput,
  CountryInput,
  RelatedInput,
  RelatedArrayInput,
  StatusInput,
} from './inputs';
import { EditorialField, ClasificationGridField } from './fields';

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

const ClipPagination = props => <Pagination rowsPerPageOptions={[25, 50, 100]} {...props} />;

const ClipsSimpleList = props => (
  <SimpleList
    primaryText={record => new Date(record.date).toLocaleDateString()}
    secondaryText={record => <EditorialField record={record} />}
    leftAvatar={record => <ImageField {...{ record }} source="thumbnailSmall" title="title" />}
    tertiaryText={record => record.id}
    {...props}
  />
);

const clipsGridStyles = theme => ({
  alignedToTop: {
    verticalAlign: 'top'
  }
});

const ClipsGrid = withStyles(clipsGridStyles)(({ classes, ...props }) => (
  <Datagrid {...props} classes={classes}>
    <ImageField source="thumbnail" title="title" />
    <EditorialField cellClassName={classes.alignedToTop} />
    <ClasificationGridField />
    <StatusField />
    <ClipActionsField />
  </Datagrid>
));

const StatusField = props => (
  <React.Fragment>
    <BooleanField label="Published" source="published" {...props} />
    <BooleanField source="uploadYoutube" {...props} />
  </React.Fragment>
);

const ClipActionsField = props => (
  <div>
    <EditButton {...props} />
  </div>
);

export const ClipFilter = props => (
  <Filter {...props}>
    <StatusInput source="published" alwaysOn label="Status" />
    <SearchInput source="search" alwaysOn label="Search" />
    <RelatedArrayInput reference="Genre" source="genre.id" referenceSource="genre" allowEmpty alwaysOn label="resources.Clip.fields.genre" />
    <RelatedArrayInput reference="Topic" source="topic.id" referenceSource="topic" allowEmpty alwaysOn label="resources.Clip.fields.topic"/>
    <RelatedArrayInput reference="Serie" source="serie.id" referenceSource="serie" allowEmpty alwaysOn label="resources.Clip.fields.serie" />
    <CountryInput label="Country" />
    <RelatedInput reference="Correspondent" source="correspondent.id" allowEmpty alwaysOn label="resources.Clip.fields.correspondent" />
    <RelatedArrayInput reference="Category" source="category.id" referenceSource="category" allowEmpty alwaysOn label="resources.Clip.fields.category" />
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




export default translate(ClipList);
