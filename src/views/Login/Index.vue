<template>
  <!--<v-layout>-->
    <!--<v-card contextual-style="dark">-->
      <!--<span slot="header">-->
        <!--Login-->
      <!--</span>-->
      <!--<div slot="body">-->
  <div class="p-5">
    <div class="col-12 pb-3 p-0 modal-header" >
      <h5 class="modal-title font-weight-bold">Login</h5>
        <button type="button" class="font-weight-bold close" @click="$emit('close')">
        <span aria-hidden="true">&times;</span>
      </button>

    </div>
        <form @submit.prevent="login(user)" class="px-3 pt-4">
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-envelope fa-fw"/>
                </span>
              </div>
              <input
                v-model="user.email"
                type="email"
                placeholder="Email"
                class="form-control"
              >
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock fa-fw"/>
                </span>
              </div>
              <div class="input-group-prepend position-absolute password-icon" @click="showPass('pass')">
                <span class="input-group-text">
                 <eye-icon class="md-icon" v-if="visiblePass"/>
                  <eye-off-icon class="md-icon" v-else/>
                </span>
              </div>
              <input
                v-model="user.password"
                :type="visiblePass ? 'text':'password'"
                placeholder="Password"
                class="form-control"
              >
            </div>
          </div>
          <div class="form-group px-4 pt-3">
            <button class="btn btn-outline-primary w-100">
              Login
            </button>
          </div>
        </form>
      <!--</div>-->
      <div slot="footer" class="text-center pt-2">
        No account?
        <a href="#" @click.prevent="register">Register</a>
      </div>
    <!--</v-card>-->
  <!--</v-layout>-->
  </div>
</template>

<script>
/* ============
 * Login Index Page
 * ============
 *
 * Page where the user can login.
 */

import Register from '@/views/Register/Index.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'LoginIndex',

  /**
   * The components the page can use.
   */
  components: {
  },

  /**
   * The data that can be used by the page.
   *
   * @returns {Object} The view-model data.
   */
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      visiblePass: false,
    };
  },

  /**
   * The methods the page can use.
   */
  methods: {
    /**
     * Will log the user in.
     *
     * @param {Object} user The user to be logged in.
     */
    login(user) {
      this.$store.dispatch('auth/login', user);
    },
    showPass(val) {
      if (val === 'pass') this.visiblePass = !this.visiblePass;
      if (val === 'conf' )this.visibleConfPass = !this.visibleConfPass;
    },
    register() {

      this.$modal.show(Register, {}, {
        draggable: false,
        height: 'auto',
        name: 'register'
      })
      this.$modal.hide('login')
    }
  },
};
</script>


<style>
  .close{
    font-size: 30px;
  }
</style>
