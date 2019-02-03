import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReactCountryFlag from "react-country-flag";
import countryData from 'country-region-data';
import {
  AutocompleteInput,
  NullableBooleanInput,
  Labeled,
  ReferenceInput,
  SelectInput
} from 'react-admin';

export const CountryInput = () => (
  <AutocompleteInput
    source="country"
    label="Country"
    allowEmpty
    choices={
      countryData.map(country => ({
        id: country.countryShortCode,
        name: `${country.countryName} (${country.countryShortCode})`
      }))
    }
  />
);

export const GenreInput = props => (
  <ReferenceInput source="genre.id" reference="Genre" perPage={300} label="resources.Genre.label">
    <SelectInput optionText="name" />
  </ReferenceInput>
);

export const CorrespondentInput = () => (
  <ReferenceInput
    source="correspondent.id"
    reference="Correspondent"
    perPage={300}
    allowEmpty
    filterToQuery={searchText => ({ search: searchText })}
    label="resources.Correspondent.label"
  >
    <AutocompleteInput
      optionText="name"
      suggestionComponent={
        ({ suggestion, query, isHighlighted, ...props }) => {
          console.log(props);
          return (
            <div {...props}>
              <ListItemIcon>
                <ReactCountryFlag 
                  styleProps={{
                    width: '20px',
                    height: '20px'
                  }}
                  code={suggestion.country}
                  svg
                />
              </ListItemIcon>
              <ListItemText>{suggestion.name}</ListItemText>
            </div>
          )
        }
      }
    />
  </ReferenceInput>
);

export const SerieInput = () => (
  <ReferenceInput
    source="serie.id"
    reference="Serie"
    perPage={300}
    allowEmpty
    filterToQuery={searchText => ({ search: searchText })}
    label="resources.Serie.label"
  >
    <AutocompleteInput optionText="name" />
  </ReferenceInput>
);

export const TopicInput = () => (
  <ReferenceInput
    source="topic.id"
    reference="Topic"
    perPage={300}
    allowEmpty
    filterToQuery={searchText => ({ search: searchText })}
    label="resources.Topic.label"
  >
    <AutocompleteInput optionText="name" />
  </ReferenceInput>
);

export const CategoryInput = () => (
  <ReferenceInput
    source="category.id"
    reference="Category"
    perPage={300}
    allowEmpty
    label="resources.Category.label"
    filterToQuery={searchText => ({ search: searchText })}
  >
    <AutocompleteInput optionText="name" />
  </ReferenceInput>
);

export const StatusInput = props => (
  <NullableBooleanInput source="published" />
);
