import Auth0Lock from 'auth0-lock';

const ACCESS_TOKEN = 'accessToken';
const ID_TOKEN = 'idToken';
const EXPIRATION = 'expiration';
const PROFILE = 'profile';

export const lock = new Auth0Lock(
  process.env.REACT_APP_AUTH0_CLIENT_ID,
  process.env.REACT_APP_AUTH0_DOMAIN,
  {
    autoclose: true,
    allowPasswordAutocomplete: true,
    auth: {
      responseType: 'token id_token',
      params: {
        scope: 'openid profile email'
      }
    }
  }
);

export const getSession = () => ({
  accessToken: localStorage.getItem(ACCESS_TOKEN),
  idToken: localStorage.getItem(ID_TOKEN),
  expiration: localStorage.getItem(EXPIRATION),
  profile: JSON.parse(localStorage.getItem(PROFILE))
});

export const setSession = authResult => {
  return getUserProfile(authResult)
    .then(profile => {
      localStorage.setItem(ACCESS_TOKEN, authResult.accessToken);
      localStorage.setItem(ID_TOKEN, authResult.accessToken);
      localStorage.setItem(EXPIRATION, new Date().getTime() + authResult.expiresIn * 1000);
      localStorage.setItem(PROFILE, JSON.stringify(profile));
      return getSession();
    })
    .catch(e => { console.log('error', e) });
};

export const deleteSession = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(ID_TOKEN);
  localStorage.removeItem(EXPIRATION);
  localStorage.removeItem(PROFILE);
};

export const getUserProfile = ({ accessToken }) => {
  return new Promise((resolve, reject) => {
    lock.getUserInfo(accessToken, (error, profile) => {
      error ? reject() : resolve(profile);
    });
  });
};

export const checkSession = () => {
  return new Promise((resolve, reject) => {
    const session = getSession();

    // Not authenticated
    if (!session.accessToken) {
      reject('Login required');
    }

    // Token valid
    else if (session.expiration >= new Date().getTime()) {
      resolve(session);
    }

    // Token expired
    else {
      lock.checkSession({}, (error, authResult) => {
        error
          ? reject()
          : setSession(authResult).then(resolve).catch(reject);
      });
    }
  });
}
