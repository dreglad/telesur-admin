import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK, AUTH_GET_PERMISSIONS } from 'react-admin';
import { checkSession, setSession, deleteSession } from './auth0';

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    // Token received
    return setSession(params);
  }

  if (type === AUTH_CHECK) {
    // Check or renew token
    return checkSession();
  }

  if (type === AUTH_GET_PERMISSIONS) {
    // TODO: Implement permissions
    return Promise.resolve();
  }

  if (type === AUTH_LOGOUT) {
    deleteSession();
    return Promise.resolve();
  }

  if (type === AUTH_ERROR) {
    return Promise.resolve();
  }

  return Promise.reject('Uknkown method');
};
