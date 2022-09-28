const HOST = 'https://j7b209.p.ssafy.io:80/api/';

const AUTH = 'auth/';
const USER = 'user/';
const MARKERS = 'markers/';
const MYPAGE = 'mypage/';
const ROUTE = 'route/';
const CONTACT = 'contact/';

const apiPath = {
  auth: {
    login: () => HOST + AUTH + 'login/',
    logout: () => HOST + AUTH + 'logout/',
  },
  markers: {
    get: (lat, lng) => HOST + MARKERS + `${lat}/` + `${lng}/`,
  },
};

export default apiPath;