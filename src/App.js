import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import createHistory from 'history/createBrowserHistory';
import authProvider from './authProvider';
import { ArticleIcon, ArticleList, ArticleShow, SectionIcon, SectionList } from './news';
import { ClipIcon, ClipList, ClipEdit, } from './clips/Clip';
import { SerieIcon, SerieList, SerieEdit } from './clips/Serie';
import { GenreIcon, GenreList } from './clips/Genre';
import { TopicIcon, TopicList } from './clips/Topic';
import { CorrespondentIcon, CorrespondentList } from './clips/Correspondent';
import { ServiceList, ServiceIcon } from './services';
import { PlaylistList, PlaylistIcon } from './videos/playlist';
import { VideoList, VideoIcon } from './videos/video';
import Menu from './Menu';
import buildProvider from './dataProvider';
import { i18nProvider } from './i18n';
import theme from './theme';

const history = createHistory();

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
        authProvider={authProvider}
        customRoutes={customRoutes}
        i18nProvider={i18nProvider}
        loginPage={LoginPage}
        menu={Menu}
        theme={theme}
        locale="es"
        title="teleSUR Admin"
        history={history}
      >
        <Resource name="Service" list={ServiceList} icon={ServiceIcon} />
        <Resource name="Article" list={ArticleList} show={ArticleShow} icon={ArticleIcon} />
        <Resource name="ArticleSection" list={SectionList} icon={SectionIcon}/>
        <Resource name="Clip" list={ClipList} edit={ClipEdit} icon={ClipIcon} />
        <Resource name="Serie" list={SerieList} edit={SerieEdit} icon={SerieIcon} />
        <Resource name="Correspondent" list={CorrespondentList} icon={CorrespondentIcon} />
        <Resource name="Genre" list={GenreList} icon={GenreIcon} />
        <Resource name="Topic" list={TopicList} icon={TopicIcon} />
        {/*<Resource name="Video" list={VideoList} icon={VideoIcon} />*/}
      </Admin>
    );
  }
}

export default App;
