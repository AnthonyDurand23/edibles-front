import axios from 'axios';
import { push } from 'react-router';

import {
  SIGNUP_USER, connectUser, LOGIN_USER, LOGOUT_USER, reportError, SEND_MESSAGE_CONTACT, setSignupSuccess, GET_USER_WITH_TOKEN, REQUEST_RESET_PASSWORD, setUserField, RESET_PASSWORD, UPDATE_PROFILE, toggleEditProfile, clearUserChanges,
} from '../redux/actions/user';
import { getUserStocks, setDefaultStock, setCurrentStock } from '../redux/actions/stock';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_EDIBLES_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = token || '';
  return config;
});

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNUP_USER: {
      const {
        user: {
          email, password, repeatPassword, firstname, lastname,
        },
      } = store.getState();

      axiosInstance.post('/signup',
        {
          email, password, repeatPassword, firstname, lastname,
        })
        .then(() => {
          store.dispatch(setSignupSuccess('Votre compte a été créé avec succès\u00A0!'));
        })
        .catch((error) => {
          const { data } = error.response;
          if (/(already exists)/gi.test(data)) store.dispatch(reportError('Cette adresse email est déjà utilisée !'));
          else if (/(lastname|firstname|empty)/gi.test(data)) store.dispatch(reportError('Les champs Nom et Prénom doivent être renseignés !'));
          else store.dispatch(reportError("Une erreur inattendue s'est produite."));
        });
      next(action);
      break;
    }
    case LOGIN_USER: {
      const { user: { email, password } } = store.getState();

      axiosInstance.post('/login', { email, password })
        .then((response) => {
          console.log(response.data);
          store.dispatch(connectUser(response.data));
          axiosInstance.defaults.headers.common.Authorization = response.headers.authorization;
          localStorage.setItem('token', response.headers.authorization);
          // subscribe();
          store.dispatch(getUserStocks());
        })
        .catch(() => store.dispatch(reportError('Oups ! Email ou mot de passe invalide...')));
      next(action);
      break;
    }
    case LOGOUT_USER: {
      delete axiosInstance.defaults.headers.common.authorization;
      localStorage.removeItem('token');
      next(action);
      break;
    }
    case GET_USER_WITH_TOKEN: {
      axiosInstance.get('/user')
        .then((response) => {
          store.dispatch(connectUser(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case SEND_MESSAGE_CONTACT: {
      // TODO add post call to edibles api
      const { user: { email, firstname, messageContact } } = store.getState();
      console.log(`email : ${email}, firstname : ${firstname}, message : ${messageContact}`);
      next(action);
      break;
    }
    case UPDATE_PROFILE: {
      const { user: { userChanges } } = store.getState();
      const { user: { user } } = store.getState();
      const options = {
        firstname: userChanges.firstname || user.firstname,
        lastname: userChanges.lastname || user.lastname,
        email: userChanges.email || user.email,
        default_stock: userChanges.default_stock || user.default_stock,
        expiration_date_notification: typeof userChanges.expiration_date_notification === 'undefined' ? user.expiration_date_notification : userChanges.expiration_date_notification,
      };
      axiosInstance.patch('/user', options)
        .then((response) => {
          store.dispatch(connectUser(response.data));
          const { stock: { userStocks } } = store.getState();
          const foundStock = userStocks.find((stock) => stock.name === response.data.default_stock);
          store.dispatch(setDefaultStock(foundStock));
          store.dispatch(setCurrentStock(foundStock));
          store.dispatch(toggleEditProfile());
          store.dispatch(clearUserChanges());
        })
        .catch((error) => console.log(error));
      next(action);
      break;
    }
    case REQUEST_RESET_PASSWORD: {
      axiosInstance.post('/forgotPassword', { email: action.email })
        .then((response) => {
          console.log(response);
          store.dispatch(setUserField(`Un email a été envoyé à l'adresse ${action.email}`, 'successMessage'));
        })
        .catch(() => store.dispatch(reportError('Oups ! Une erreur est survenue, veuillez ré-essayer plus tard.')));
      next(action);
      break;
    }
    case RESET_PASSWORD: {
      const { user: { password, repeatPassword } } = store.getState();
      console.log('sending reset');
      axiosInstance.post(`/resetPassword/${action.token}`,
        {
          password,
          repeatPassword,
        })
        .then(() => {
          store.dispatch(setUserField('Votre changement a bien été pris en compte! Vous pouvez maintenant vous connecter.', 'successMessage'));
          store.dispatch(setUserField('', 'password'));
          store.dispatch(setUserField('', 'repeatPassword'));
          // setTimeout(() => {
          //   store.push('/login');
          // }, 1000);
        })
        .catch(() => store.dispatch(reportError('Oups ! Une erreur est survenue, veuillez ré-essayer plus tard.')));
      next(action);
      break;
    }
    default:
      next(action);
  }
};
