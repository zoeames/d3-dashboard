import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const herokuApiBaseUrl = firebaseConfig.blizzardAuthKeys.baseUrl;

const getBattleNetAuth = () => axios.get(`${herokuApiBaseUrl}/auth/bnet`);

const getGithubAuth = () => axios.get(`${herokuApiBaseUrl}/auth/github`);

export default {
  getBattleNetAuth,
  getGithubAuth,
};