import React from 'react';
import TopicIcon from '@material-ui/icons/Style';
import {
  Datagrid,
  List,
  TextField
} from 'react-admin';

export { TopicIcon };

export const TopicList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id"/>
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
