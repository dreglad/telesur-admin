import React from 'react';
import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  TextField
} from 'react-admin';
import LiveTvIcon from '@material-ui/icons/LiveTv';

export const ClipList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <FunctionField
        label="Thumbnail"
        render={({ thumbnail }) => (
          <img style={{maxWidth: 200, maxHeight: 200}} src={thumbnail}/>
        )}
      />
      <DateField source="date" showTime/>
      <TextField source="title"/>
      <TextField source="description"/>
    </Datagrid>
  </List>
);

export const ClipIcon = LiveTvIcon;