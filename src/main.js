/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */

import Vue from 'vue';

/* ============
 * Plugins
 * ============
 *
 * Import and bootstrap the plugins.
 */

import './plugins/vuex';
import './plugins/axios';
import { i18n } from './plugins/vue-i18n';
import { router } from './plugins/vue-router';
import './plugins/vuex-router-sync';
import './plugins/bootstrap';
import './plugins/font-awesome';
import './plugins/register-service-worker';
import "./plugins/Spinner";

/* ============
 * Styling
 * ============
 *
 * Import the application styling.
 * Stylus is used for this boilerplate.
 *
 * If you don't want to use Stylus, that's fine!
 * Replace the stylus directory with the CSS preprocessor you want.
 * Import the entry point here & install the webpack loader.
 *
 * It's that easy...
 *
 * http://stylus-lang.com/
 */

import './assets/stylus/app.styl';
import 'vue-croppa/dist/vue-croppa.css'
import "./main.scss";
import "vue-material-design-icons/styles.css"

/* ============
 * Main App
 * ============
 *
 * Last but not least, we import the main application.
 */
import Croppa from 'vue-croppa'
import VModal from 'vue-js-modal'

Vue.use(VModal, { dynamic: true })
Vue.use(Croppa)
import Eye from "vue-material-design-icons/Eye.vue"
import EyeOff from "vue-material-design-icons/EyeOff.vue"

Vue.component("eye-off-icon", EyeOff)
Vue.component("eye-icon", Eye)



import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

store.dispatch('auth/check');

/* eslint-disable no-new */
new Vue({
  /**
   * Bind the Vue instance to the HTML.
   */
  el: '#app',

  /**
   * The localization plugin.
   */
  i18n,

  /**
   * The router.
   */
  router,

  /**
   * The Vuex store.
   */
  store,

  /**
   * Will render the application.
   *
   * @param {Function} h Will create an element.
   */
  render: h => h(App),
});
