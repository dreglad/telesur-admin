import React from 'react';
import Avatar from 'react-avatar';
import ColorHash from 'color-hash';
import CorrespondentIcon from '@material-ui/icons/LiveTv';
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

const colorHash = new ColorHash();

export { CorrespondentIcon };

export const CorrespondentList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <FunctionField
        label="Social"
        render={({ name, country }) => (
          <Avatar color={colorHash.hex(country)} name={name} />
        )}
      />
      <TextField source="name" />
      <TextField source="country" />
    </Datagrid>
  </List>
);
