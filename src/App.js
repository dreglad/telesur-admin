// in App.js
import React, { Component } from 'react';
import { Admin, Resource, Delete, ListGuesser, EditGuesser } from 'react-admin';
import { ArticleList, ArticleIcon } from './components/articles/article';
import { ArticleSectionList, ArticleSectionIcon } from './components/articles/section';
import { ClipList, ClipIcon } from './components/clips';
import { ServiceList, ServiceIcon } from './components/services';
import { PlaylistList, PlaylistIcon } from './components/videos/playlist';
import { VideoList, VideoIcon } from './components/videos/video';
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
        <Resource name="Service" list={ServiceList} icon={ServiceIcon} />
        <Resource name="ArticleSection" list={ArticleSectionList} icon={ArticleSectionIcon}/>
        <Resource name="Article" list={ArticleList} icon={ArticleIcon} />
        <Resource name="Clip" list={ClipList} icon={ClipIcon} />
        <Resource name="Video" list={VideoList} icon={VideoIcon} />
        <Resource name="Playlist" list={PlaylistList} icon={PlaylistIcon} />
      </Admin>
    );
  }
}

export default App;
