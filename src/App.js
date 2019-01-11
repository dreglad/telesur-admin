// in App.js
import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import { ArticleIcon, ArticleList, ArticleShow, SectionIcon, SectionList } from './components/news';
import { ClipIcon, ClipList, ClipEdit, } from './components/clips/Clip';
import { SerieIcon, SerieList } from './components/clips/Serie';
import { GenreIcon, GenreList } from './components/clips/Genre';
import { TopicIcon, TopicList } from './components/clips/Topic';
import { CorrespondentIcon, CorrespondentList } from './components/clips/Correspondent';
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
        <Resource name="Article" list={ArticleList} show={ArticleShow} icon={ArticleIcon} />
        <Resource name="ArticleSection" list={SectionList} icon={SectionIcon}/>
        <Resource name="Clip" list={ClipList} edit={ClipEdit} icon={ClipIcon} />
        <Resource name="Serie" list={SerieList} icon={SerieIcon} />
        <Resource name="Correspondent" list={CorrespondentList} icon={CorrespondentIcon} />
        <Resource name="Genre" list={GenreList} icon={GenreIcon} />
        <Resource name="Topic" list={TopicList} icon={TopicIcon} />
        {/*<Resource name="Video" list={VideoList} icon={VideoIcon} />*/}
      </Admin>
    );
  }
}

export default App;
