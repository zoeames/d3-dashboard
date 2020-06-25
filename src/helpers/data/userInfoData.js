import axios from 'axios';
import apiKeys from '../apiKeys.json';

const { blizzardKeys } = apiKeys;

const getProfile = (accessToken, battleTag) => {
  const tag = battleTag.replace('#', '-');
  return axios.get(`${blizzardKeys.apiBaseUrl}/d3/profile/${tag}/?locale=en_US&access_token=${accessToken}`);
};

export default {
  getProfile,
};
