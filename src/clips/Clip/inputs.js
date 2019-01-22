import React from 'react';
import countryData from 'country-region-data';
import {
  AutocompleteInput,
  NullableBooleanInput,
  Labeled,
  ReferenceInput,
  SelectInput
} from 'react-admin';

const translate = x => x;

export const CountryInput = props => (
  <AutocompleteInput source="country" label="Paíss" alwaysOn choices={countryData.map(country => ({
    id: country.countryShortCode,
    name: `${country.countryName} (${country.countryShortCode})`
  }))} />
);

export const GenreInput = props => (
  <ReferenceInput source="genre.id" reference="Genre" perPage={300} label="resources.Genre.label">
    <SelectInput optionText="name" />
  </ReferenceInput>  
);

export const CorrespondentInput = props => (
  <ReferenceInput source="correspondent.id" reference="Correspondent" perPage={300} label="resources.Correspondent.label">
    <AutocompleteInput optionText="name" />
  </ReferenceInput>
);

export const SerieInput = props => (
  <ReferenceInput source="serie.id" reference="Serie" perPage={300} label="resources.Serie.label">
    <AutocompleteInput optionText="name" />
  </ReferenceInput>
);

export const TopicInput = props => (
  <ReferenceInput source="topic.id" reference="Topic" perPage={300} label="resources.Topic.label">
    <AutocompleteInput optionText="name" />
  </ReferenceInput>
);

export const CategoryInput = props => (
  <ReferenceInput source="category.id" reference="Category" perPage={300} label="resources.Category.label">
    <AutocompleteInput optionText="name" />
  </ReferenceInput>
);

export const StatusInput = props => (
  <NullableBooleanInput source="published" />
);
