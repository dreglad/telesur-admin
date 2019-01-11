import React from 'react';
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

const ClipList = props => (
  <List filters={<ClipFilter />} {...props}>
    <Datagrid rowClick="edit">
      <FunctionField
        label="Thumbnail"
        render={({ thumbnail }) => (
          <img style={{maxWidth: 200, maxHeight: 200}} src={thumbnail} />
        )}
      />
      <DateField source="date" showTime />
      <TextField source="genre.id" />
      <TextField source="title" />
      <TextField source="description" />
      <TextField source="serie.id" />
      <TextField source="topic.id" />
      <TextField source="genre.id" />
    </Datagrid>
  </List>
);

export const ClipFilter = props => (
  <Filter {...props}>
    <ReferenceInput label="Serie" source="serie.id" reference="Serie" alwaysOn>
      <SelectInput optionText="name"/>
    </ReferenceInput>
    <ReferenceInput label="Correspondent" source="correspondent.id" reference="Correspondent" alwaysOn>
      <SelectInput optionText="name"/>
    </ReferenceInput>
    <ReferenceInput label="Genre" source="genre.id" reference="Genre" alwaysOn>
      <SelectInput optionText="name"/>
    </ReferenceInput>
    <ReferenceInput label="Topic" source="topic.id" reference="Topic" alwaysOn>
      <SelectInput optionText="name"/>
    </ReferenceInput>
  </Filter>
);

export default ClipList;
