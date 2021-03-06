import Auth0Lock from 'auth0-lock';

const ACCESS_TOKEN = 'accessToken';
const ID_TOKEN = 'idToken';
const EXPIRATION = 'expiration';
const PROFILE = 'profile';

export const lock = new Auth0Lock(
  process.env.REACT_APP_AUTH0_CLIENT_ID,
  process.env.REACT_APP_AUTH0_DOMAIN,
  {
    auth: {
      redirectUrl: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      autoParseHash: false,
      responseType: 'token id_token',
      params: {
        scope: 'openid profile email'
      }
    },
    allowSignUp: !!process.env.REACT_APP_AUTH0_ALLOW_SIGN_UP,
    allowPasswordAutocomplete: true,
    closable: false,
    theme: {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/TeleSur.png'
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
      localStorage.setItem(ID_TOKEN, authResult.idToken);
      localStorage.setItem(EXPIRATION, new Date().getTime() + authResult.expiresIn * 1000);
      localStorage.setItem(PROFILE, JSON.stringify(profile));
      lock.hide();
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
