/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import Vue from 'vue';
import store from '@/store';
import * as types from './mutation-types';

export default {
	uploadProduct: ({commit, state}, payload) => {
		let fd = new FormData();
		fd.append('product', JSON.stringify(payload.item));
		// images.forEach((image: File) => {
			fd.append('cover', payload.cover);
		// });

		Vue.$http.post('http://localhost:8081/api/products', fd).then((res) => {
			console.log(res)
		},
			(err)=> console.log(err));
	},
	loadProducts: ({commit, state}, payload) => {
		Vue.$http.get('http://localhost:8081/api/products').then((res) => {
			console.log(res)
			commit('loadProducts', res.data.data)
		},
			(err)=> console.log(err));
	},
  createOrder: ({commit, state}, payload) => new Promise((resolve, reject) => {
    console.log('asda')
		Vue.$http.post('http://localhost:8081/api/orders', payload)
      .then(() => resolve())
      .catch(() => reject());
	}),
};
