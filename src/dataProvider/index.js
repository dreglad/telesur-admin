import buildGraphqlAPIProvider from './graphqlAPI';

export default buildGraphqlAPIProvider;

// const dataProviders = [
//     {
//       providerBuilder: buildGraphqlAPIProvider,
//       resources: [
//         'Article', 'ArticleSection',
//         'Clip', 'Genre', 'Tipo', 'Correspondent', 'Serie', 'Category'
//       ]
//     },
//     {
//       providerBuilder: 'OTHER',
//       resources: ['bars']
//     }
// ];

// export default (type, resource, params) => {
//   console.log(resource)
//   const { providerBuilder } = dataProviders.find(dp => dp.resources.includes(resource));

//   return providerBuilder(type, resource, params);
// }
