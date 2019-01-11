// in src/posts.js
import React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  EditButton,
  RichTextField
} from 'react-admin';

const CardField = ({ record = {} }) => (
  <div>
    <TextField source="title" />
    <TextField source="description" />
  </div>
);
// PlayerField.defaultProps = { label: 'Name' };

const ClipsShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <CardField />
      <RichTextField source="description" />
      <DateField label="Date" source="date" />
      <TextField label="Youtube" source="youtube" />
      <EditButton />
    </SimpleShowLayout>
  </Show>
);

export default ClipsShow;

// export const CategoryShow = props => (
//   <Show title="Show a category" {...props}>
//     <SimpleShowLayout>
//       <TextField source="id" />
//       <TextField source="name" />
//       <ReferenceField source="shop.id" reference="Shop">
//         <TextField source="name" />
//       </ReferenceField>
//     </SimpleShowLayout>
//   </Show>
// );