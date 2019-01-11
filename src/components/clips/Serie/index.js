import React from 'react';
import SerieIcon from '@material-ui/icons/LiveTv';
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

export { SerieIcon };

export const SerieList = props => (
  <List filters={<SerieFilter />} {...props}>
    <Datagrid rowClick="show">
      <FunctionField
        label="Thumbnail"
        render={({ poster }) => (
          <img style={{maxWidth: 200, maxHeight: 200}} src={poster} />
        )}
      />
      <DateField source="date" showTime />
      <TextField source="title" />
      <TextField source="description" />
    </Datagrid>
  </List>
);

export const SerieFilter = props => (
  <Filter {...props}>
    <ReferenceInput label="Series" source="series.id" reference="Serie" alwaysOn>
      <SelectInput optionText="name"/>
    </ReferenceInput>
  </Filter>
);
