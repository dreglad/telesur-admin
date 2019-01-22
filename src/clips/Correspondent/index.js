import React from 'react';
import countryData from 'country-region-data';
import Avatar from 'react-avatar';
import ColorHash from 'color-hash';
import CorrespondentIcon from '@material-ui/icons/Streetview';
import {
  AutocompleteInput,
  Datagrid,
  Filter,
  FunctionField,
  List,
  Pagination,
  SearchInput,
  TextField
} from 'react-admin';

const colorHash = new ColorHash();

export { CorrespondentIcon };

export const CorrespondentList = props => (
  <List
    {...props}
    filters={<CorrespondentFilter />}
    perPage={50}
    pagination={<Pagination rowsPerPageOptions={[10, 50, 200]} {...props} />}
  >
    <Datagrid rowClick="show">
      <FunctionField
        label="Social"
        render={({ name, country }) => (
          <Avatar color={colorHash.hex(country)} name={name} size={50} />
        )}
      />
      <TextField source="name" />
      <FunctionField
        label="Country"
        render={({ country }) => {
          const { countryName } = countryData.find(({ countryShortCode }) => countryShortCode === country );
          return `${countryName} (${country})`
        }}
      />
    </Datagrid>
  </List>
);

export const CorrespondentFilter = props => (
  <Filter {...props}>
    <SearchInput source="search" alwaysOn />
    <AutocompleteInput source="country" alwaysOn choices={countryData.map(country => ({
      id: country.countryShortCode,
      name: `${country.countryName} (${country.countryShortCode})`
    }))} />
  </Filter>
);
