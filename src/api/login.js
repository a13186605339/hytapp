import api from 'axios';

// 登录接口
const loginApi = '/api/login';

const login = function (loginName, password) {
  const params = {
    loginName,
    password
  };
  return api.post(loginApi, null, {params});
};

export default {
  login,
};
