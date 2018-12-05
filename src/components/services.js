import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import InboxIcon from '@material-ui/icons/Inbox';

export const ServiceList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id"/>
      <TextField source="name"/>
    </Datagrid>
  </List>
);

export const ServiceIcon = InboxIcon;