import axios from 'axios';

import errorHandler from './errorHandler';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'X-CSRF-TOKEN': document.head
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute('content'),
    'Access-Control-Allow-Origin': '*'
  }
});

instance.interceptors.response.use(response => response, errorHandler);

export { default as setAuthorizationHeader } from './setAuthorizationHeader';

export default instance;
