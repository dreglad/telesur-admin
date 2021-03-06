import React from 'react';
import GenreIcon from '@material-ui/icons/GroupWork';
import {
  Datagrid,
  List,
  TextField
} from 'react-admin';

export { GenreIcon };

export const GenreList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="plural" />
    </Datagrid>
  </List>
);
