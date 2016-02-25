// import
import {apiExecutor, POST} from '../../sugar';

// export
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const login = credentials => {
  return apiExecutor({
    verb: POST,
    url: '/auth',
    data: credentials,

    successType: LOGIN_SUCCESS,
    failureType: LOGIN_FAIL
  });
};
