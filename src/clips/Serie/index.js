import React from 'react';
import SerieIcon from '@material-ui/icons/LiveTv';
import {
  Datagrid,
  DateField,
  SearchInput,
  List,
  TextField,
  Filter,
  ReferenceInput,
  SelectInput
} from 'react-admin';
import PosterField from './PosterField';

export { SerieIcon };

export const SerieList = props => (
  <List filters={<SerieFilter />} {...props}>
    <Datagrid rowClick="show">
      <PosterField />
      <TextField source="id"/>
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);

export const SerieFilter = props => (
  <Filter {...props}>
    <SearchInput source="search" alwaysOn />
  </Filter>
);
