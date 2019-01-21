// in src/posts.js
import React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  RichTextField
} from 'react-admin';

const ArticleShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="description" />
      <RichTextField source="body" />
      <DateField label="Date" source="publishedDate" />
    </SimpleShowLayout>
  </Show>
);

export default ArticleShow;

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