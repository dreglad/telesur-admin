import React from 'react';
import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  TextField
} from 'react-admin';
import ViewListIcon from '@material-ui/icons/ViewList';

export const PlaylistList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name"/>
      <TextField source="description"/>
    </Datagrid>
  </List>
);

export const PlaylistIcon = ViewListIcon;