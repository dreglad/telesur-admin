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
import buildProvider from './dataProvider';
import { i18nProvider, defaultLocale } from './i18n';
import customRoutes from './customRoutes';
import Menu from './layout/Menu';
import theme from './layout/theme';
import LoginPage from './layout/LoginPage';
import Loading from './layout/Loading';

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
      return <Loading />;
    }

    return (
      <Admin
        title="teleSUR Admin"
        dataProvider={dataProvider}
        authProvider={authProvider}
        customRoutes={customRoutes}
        i18nProvider={i18nProvider}
        locale={defaultLocale}
        loginPage={LoginPage}
        menu={Menu}
        theme={theme}
        history={history}
      >
        <Resource name="Clip" list={ClipList} edit={ClipEdit} icon={ClipIcon} />
        <Resource name="Serie" list={SerieList} edit={SerieEdit} icon={SerieIcon} />
        <Resource name="Correspondent" list={CorrespondentList} icon={CorrespondentIcon} />
        <Resource name="Genre" list={GenreList} icon={GenreIcon} />
        <Resource name="Topic" list={TopicList} icon={TopicIcon} />
        <Resource name="Article" list={ArticleList} show={ArticleShow} icon={ArticleIcon} />
        <Resource name="ArticleSection" list={SectionList} icon={SectionIcon}/>
      </Admin>
    );
  }
}

export default App;
