// in App.js
import React, { Component } from 'react';
import { Admin, Resource, Delete, ListGuesser, EditGuesser } from 'react-admin';

import { ArticleList, ArticleSectionList } from './components/articles';
import { ServiceList } from './components/services';

import buildProvider from './dataProvider';

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
      <Admin dataProvider={dataProvider}>
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
