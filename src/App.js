// in App.js
import React, { Component } from 'react';
import { Admin, Resource, Delete, ListGuesser, EditGuesser } from 'react-admin';
import { ArticleList, ArticleSectionList } from './components/articles';
import { ServiceList } from './components/services';
import buildProvider from './dataProvider';
import englishMessages from 'ra-language-english';
import spanishMessages from 'ra-language-spanish';

const messages = {
  en: englishMessages,
  es: spanishMessages
}

const i18nProvider = locale => {
  console.log(messages[locale])
  return messages[locale];
};

class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }

  async componentDidMount() {
    this.setState({ dataProvider: await buildProvider() })
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <Admin dataProvider={dataProvider} locale="es" i18nProvider={i18nProvider}>
        <Resource name="Service" list={ServiceList}/>
        <Resource name="ArticleSection" list={ArticleSectionList}/>
        <Resource name="Article" list={ArticleList}/>
        {/*<Resource name="Video" list={ArticleList}/>
        <Resource name="Serie" list={ArticleList}/>*/}
        {/*<Resource name="Service" list={ServiceList} edit={ServiceEdit} create={ServiceCreate}/>*/}
      </Admin>
    );
  }
}

export default App;
