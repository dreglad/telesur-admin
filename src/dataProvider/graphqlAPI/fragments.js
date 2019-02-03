import { GET_LIST, GET_MANY } from 'react-admin';
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

  Serie: {
    [GET_LIST]: gql`
      fragment SerieFragment on Serie {
        id
        name
        description
        poster
      }
    `,
    [GET_MANY]: gql`
      fragment SerieFragment on Serie {
        id
        name
        description
        poster
      }
    `
  },

  Topic: {
    [GET_LIST]: gql`
      fragment TopicFragment on Topic {
        id
        name
        description
      }
    `,
    [GET_MANY]: gql`
      fragment TopicFragment on Topic {
        id
        name
        description
      }
    `
  },

  Genre: {
    [GET_LIST]: gql`
      fragment GenreFragment on Genre {
        id
        slug
        name
        plural
        description
      }
    `,
    [GET_MANY]: gql`
      fragment GenreFragment on Genre {
        id
        slug
        name
        plural
        description
      }
    `
  },

  Category: {
    [GET_LIST]: gql`
      fragment CategoryFragment on Category {
        id
        name
      }
    `,
    [GET_MANY]: gql`
      fragment CategoryFragment on Category {
        id
        name
      }
    `,
  },

  Correspondent: {
    [GET_LIST]: gql`
      fragment CorrespondentFragment on Correspondent {
        id
        name
        country
      }
    `,
    [GET_MANY]: gql`
      fragment CorrespondentFragment on Correspondent {
        id
        name
        country
      }
    `,
  },

  Clip: {
    [GET_LIST]: gql`
      fragment ClipFragment on Clip {
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
          slug
          name
          plural
        }
      }
    `
  },
};
