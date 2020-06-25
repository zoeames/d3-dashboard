import axios from 'axios';
import apiKeys from '../apiKeys.json';

const { blizzardKeys } = apiKeys;

const getBattleNetAuthCode = () => {
  const CLIENT_ID = blizzardKeys.client_id;
  const REDIRECT_URI = blizzardKeys.redirect_uri;
  const CODE = 'code';
  const SCOPES = 'd3.profile';
  const url = `${blizzardKeys.authorizationBaseUrl}/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${CODE}&scope=${SCOPES}`;
  return url;
};

const getBattleNetToken = () => axios.request({
  url: `${blizzardKeys.authorizationBaseUrl}/oauth/token?grant_type=authorization_code&code=${localStorage.bnetAuth}&redirect_uri=${blizzardKeys.redirect_uri}`,
  method: 'POST',
  auth: {
    username: blizzardKeys.client_id,
    password: blizzardKeys.client_secret,
  },
});

const getBattleTag = (bearerToken) => axios.request({
  url: `${blizzardKeys.authorizationBaseUrl}/oauth/userinfo`,
  method: 'GET',
  headers: {
    Authorization: `Bearer ${bearerToken}`,
  },
});

export default {
  getBattleNetAuthCode,
  getBattleNetToken,
  getBattleTag,
};
