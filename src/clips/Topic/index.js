import React from 'react';
import TopicIcon from '@material-ui/icons/LiveTv';
import {
  Datagrid,
  DateField,
  List,
  TextField
} from 'react-admin';

export { TopicIcon };

export const TopicList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="description" />
      <DateField source="date" showTime />
    </Datagrid>
  </List>
);
