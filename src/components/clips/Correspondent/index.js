import React from 'react';
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

export { CorrespondentIcon };

export const CorrespondentList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      {/*<FunctionField
        label="Thumbnail"
        render={({ poster }) => (
          <img style={{maxWidth: 200, maxHeight: 200}} src={poster} />
        )}
      />*/}
      <TextField source="name" />
      <TextField source="country" />
    </Datagrid>
  </List>
);

