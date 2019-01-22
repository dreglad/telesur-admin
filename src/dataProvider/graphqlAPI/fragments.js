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
  },

  Clip: {
    [GET_LIST]: gql`
      fragment ClipFragment on Article {
        id
        title
        description
        date
        url
        tags
        hls
        mp4
        uploadYoutube
        published
        thumbnailSmall
        thumbnail
        country
        aspectRatio
        serie {
          id
          name
          poster
        }
        correspondent {
          id
          name
          country
        }
        category {
          id
          name
        }
        topic {
          id
          name
        }
        genre {
          id
          name
          plural
        }
      }
    `
  },
};
