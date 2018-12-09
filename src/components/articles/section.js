import React from 'react';
import {
  List,
  Datagrid,
  TextField
} from 'react-admin';
import Icon from '@material-ui/icons/Bookmark';

export const ArticleSectionList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name"/>
    </Datagrid>
  </List>
);

export const ArticleSectionIcon = Icon;