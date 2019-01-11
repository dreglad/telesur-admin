import React from 'react';
import {
  List,
  ArrayField,
  ChipField,
  Datagrid,
  DateField,
  Filter,
  FunctionField,
  SingleFieldList,
  TextField,
  TextInput,
  UrlField
} from 'react-admin';
import Typography from '@material-ui/core/Typography';

const ArticleList = props => (
  <List {...props} filters={<ArticleFilter/>} aside={<ArticleAside/>}>
    <Datagrid rowClick="show">
      <FunctionField
        label="Images"
        render={({ images }) => (
          <img style={{maxWidth: 200, maxHeight: 200}} src={images[0]}/>
        )}
      />
      <DateField source="datePublished" />
      <ArrayField source="sections">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <TextField source="headline" />
      <TextField source="description" />
      <UrlField source="url" />
    </Datagrid>
  </List>
);

const ArticleFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Encabezado" source="headline_contains" alwaysOn />
    <TextInput label="Descripción" source="description_contains" alwaysOn />
    {/*<TextInput label="Búsqueda" source="sections_some." alwaysOn />*/}
    {/*<ReferenceInput label="ArticleSection" source="section" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>*/}
  </Filter>
);

const ArticleAside = ({ translate }) => (
    <div style={{ width: 200, margin: '1em' }}>
        <Typography variant="title">Post details</Typography>
        <Typography variant="body1">
            {translate('articles.list.aside_label')}
        </Typography>
    </div>
);

export default ArticleList;
