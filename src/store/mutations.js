import * as types from './mutation-types';

const mutations = {
  [types.SET_TOKEN](state, token) {
    state.token = token;
  },
  [types.SET_COURSE_ORDER_CHANGE](state, courseOrderChange) {
    state.courseOrderChange = courseOrderChange;
  },
  [types.SET_STORE_NUMBER](state, storeNumber) {
    state.storeNumber = storeNumber;
  }
};

export default mutations;
