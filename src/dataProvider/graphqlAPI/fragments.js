import { GET_LIST } from 'react-admin';
import gql from 'graphql-tag';

export default {
  Article: {
    [GET_LIST]: gql`
      fragment ArticleFragment on Article {
        id
        headline
        description
        datePublished
        images
        url
        sections {
          id
          name
        }
        body
      }
    `
  },

  ArticleSection: {
    [GET_LIST]: gql`
      fragment ArticleSectionFragment on ArticleSection {
        id
        name
      }
    `
  }
};
