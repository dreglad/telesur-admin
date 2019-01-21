import React from 'react';
import TopicIcon from '@material-ui/icons/Style';
import {
  Datagrid,
  Filter,
  List,
  SearchInput,
  TextField
} from 'react-admin';

export { TopicIcon };

export const TopicList = props => (
  <List
    filters={<TopicFilter />}
    {...props}
  >
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);

export const TopicFilter = props => (
  <Filter {...props}>
    <SearchInput source="search" alwaysOn />
  </Filter>
);
