import React from 'react';
import CategoryIcon from '@material-ui/icons/Streetview';
import {
  Datagrid,
  Filter,
  List,
  SearchInput,
  TextField
} from 'react-admin';

export { CategoryIcon };

export const CategoryList = props => (
  <List
    filters={<CategoryFilter />}
    {...props}
  >
    <Datagrid rowClick="edit">
      <TextField source="name" />
    </Datagrid>
  </List>
);

export const CategoryFilter = props => (
  <Filter {...props}>
    <SearchInput source="search" alwaysOn />
  </Filter>
);
