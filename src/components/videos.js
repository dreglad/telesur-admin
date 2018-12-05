import React from 'react';
import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  TextField
} from 'react-admin';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ViewListIcon from '@material-ui/icons/ViewList';

export const PlaylistList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name"/>
      <TextField source="description"/>
    </Datagrid>
  </List>
);

export const VideoList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      {/*<FunctionField
        label="Thumbnail"
        render={({ thumbnail }) => (
          <img style={{maxWidth: 200, maxHeight: 200}} src={thumbnail}/>
        )}
      />*/}
      <DateField source="datePublished" showTime/>
      <TextField source="name"/>
      <TextField source="description"/>
    </Datagrid>
  </List>
);

export const VideoIcon = VideoLibraryIcon;
export const PlaylistIcon = ViewListIcon;