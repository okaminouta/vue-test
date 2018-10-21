/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import Vue from 'vue';
import {
  CHECK,
  REGISTER,
  LOGIN,
  LOGOUT,
} from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
    createProduct: (state, payload) => {
        // Vue.set(state.products.items, "loading", true);
        state.goods.items.push(payload);
    },
    loadProducts: (state, payload) => {
      Vue.set(state.goods, "items", payload);
    },

};
