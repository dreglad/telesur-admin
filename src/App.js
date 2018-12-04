// in App.js
import React, { Component } from 'react';
import { Admin, Resource, Delete, ListGuesser, EditGuesser } from 'react-admin';
import { ArticleList, ArticleSectionList } from './components/articles';
import { ClipList } from './components/clips';
import { ServiceList } from './components/services';
import { PlaylistList, VideoList } from './components/videos';
import buildProvider from './dataProvider';
import { i18nProvider } from './i18n';

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
      <Admin
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        locale="es"
        title="teleSUR Admin"
      >
        <Resource name="Service" list={ServiceList}/>
        <Resource name="ArticleSection" list={ArticleSectionList}/>
        <Resource name="Article" list={ArticleList}/>
        <Resource name="Clip" list={ClipList}/>
        <Resource name="Video" list={VideoList}/>
        <Resource name="Playlist" list={PlaylistList}/>
      </Admin>
    );
  }
}

export default App;
