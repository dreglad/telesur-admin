import React, { Component } from 'react';
import { translate } from 'react-admin';
import { connect } from 'react-redux';
import { userLogin } from 'react-admin';
import { lock } from '../auth0';
import Loading from './Loading';

class LoginPage extends Component {
  componentDidMount() {
    lock.on('authenticated', this.props.userLogin)

    if (window.location.hash) {
      lock.resumeAuth(window.location.hash, error => {
        error && this.showLock();
      });
    } else {
      this.showLock();
    }
  }

  showLock () {
    lock.show({
      language: this.props.locale
    })
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
