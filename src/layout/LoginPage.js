import React, { Component } from 'react';
import { translate } from 'react-admin';
import { connect } from 'react-redux';
import { userLogin } from 'react-admin';
import { lock } from '../auth0';
import Loading from './Loading';

class LoginPage extends Component {
  componentDidMount() {
    const { userLogin, locale } = this.props;

    lock.on('authenticated', userLogin)

    if (!window.location.hash) {
      lock.show({
        language: locale
      });
    }
  }

  render() {
    return (
      <Loading label={this.props.translate('layout.loading')} />
    );
  }
};

const mapStateToProps = state => ({
  locale: state.i18n.locale
});

export default connect(mapStateToProps, { userLogin })(translate(LoginPage));
