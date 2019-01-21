import React from 'react';
import SerieIcon from '@material-ui/icons/LocalPlay';
import {
  Datagrid,
  SearchInput,
  List,
  TextField,
  Filter
} from 'react-admin';
import PosterField from './PosterField';
import SerieEdit from './SerieEdit';

export { SerieIcon, PosterField, SerieEdit };

export const SerieList = props => (
  <List
    filters={<SerieFilter />}
    perPage={100}
    {...props}
  >
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
