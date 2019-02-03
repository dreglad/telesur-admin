import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReactCountryFlag from "react-country-flag";
import countryData from 'country-region-data';
import PropTypes from 'prop-types';
import {
  AutocompleteArrayInput,
  AutocompleteInput,
  NullableBooleanInput,
  Labeled,
  ReferenceInput,
  ReferenceArrayInput,
  SimpleFormIterator,
  SelectInput
} from 'react-admin';

export const countryChoices =
  countryData.map(country => {
    return {
      id: country.countryShortCode,
      name: `${country.countryName} (${country.countryShortCode})`
    }
  });

export const countrySuggestions = ({ suggestion, query, isHighlighted, ...props }) => {
  return (
    <div {...props}>
      <ListItemIcon>
        <ReactCountryFlag 
          styleProps={{
            width: '20px',
            height: '20px'
          }}
          code={suggestion.id}
          svg
        />
      </ListItemIcon>
      <ListItemText>{suggestion.name}</ListItemText>
    </div>
  );
};

export const CountryInput = ({ multiple, ...props }) => {
  const Input = multiple ? AutocompleteArrayInput : AutocompleteInput;
  return (
    <Input
      source="country"
      label="Country"
      allowEmpty
      choices={countryChoices}
      suggestionComponent={countrySuggestions}
    />
  );
};

export const ACountryInput = () => (
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

export const RelatedArrayInput = (props) => (
  <ReferenceArrayInput
    label={props.label}
    reference={props.reference}
    resource={props.resource}
    source={props.referenceSource || props.source}
    perPage={300}
    allowEmpty={props.allowEmpty}
    filterToQuery={search => ({ search })}
  >
    <AutocompleteArrayInput optionText="name" resettable={props.resettable} />
  </ReferenceArrayInput>
);

export const RelatedInput = (props) => {
  return (
    <ReferenceInput
      label={props.label}
      reference={props.reference}
      resource={props.resource}
      source={props.referenceSource || props.source}
      perPage={300}
      allowEmpty={props.allowEmpty}
      filterToQuery={search => ({ search })}
    >
      <AutocompleteInput optionText="name" allowEmpty={props.allowEmpty} resettable={props.resettable} />
    </ReferenceInput>
  );
}

RelatedInput.propTypes = {
  autocomplete: PropTypes.bool.isRequired,
  reference: PropTypes.bool.isRequired,
  allowEmpty: PropTypes.bool.isRequired,
  referenceSource: PropTypes.string
};

RelatedInput.defaultProps = {
  allowEmpty: false
};

export const StatusInput = props => (
  <NullableBooleanInput source="published" />
);
