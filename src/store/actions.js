import * as types from './mutation-types';

export const setToken = function ({commit}, query) {
  commit(types.SET_TOKEN, query);
};
