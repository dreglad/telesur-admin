import React from 'react';
import {
  List,
  Datagrid,
  TextField
} from 'react-admin';

const SectionList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name"/>
    </Datagrid>
  </List>
);

export default SectionList;
