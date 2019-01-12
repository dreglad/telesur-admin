import React from 'react';
import GenreIcon from '@material-ui/icons/LiveTv';
import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  TextField,
  Filter,
  ReferenceInput,
  SelectInput
} from 'react-admin';

export { GenreIcon };

export const GenreList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id"/>
      <TextField source="name" />
    </Datagrid>
  </List>
);
