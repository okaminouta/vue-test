<template>
  <div class="p-5">
    <div class="col-12 pb-3 p-0 modal-header">
      <h5 class="modal-title font-weight-bold">Register</h5>
      <button type="button" class="font-weight-bold close" @click="$emit('close')">
        <span aria-hidden="true">&times;</span>
      </button>

    </div>
    <form @submit.prevent="register(user)" class="px-3 pt-4">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user fa-fw"/>
                </span>
          </div>
          <input
            v-model="user.name"
            type="text"
            placeholder="First name"
            class="form-control"
          >
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <!--<div class="input-group-prepend">-->
          <!--<span class="input-group-text">-->
          <!--<i class="fa fa-user fa-fw"/>-->
          <!--</span>-->
          <!--</div>-->
          <div class="input-group-prepend">
                <span class="input-group-text">
                  +380
                </span>
          </div>
          <input
            v-model="user.phone"
            type="text"
            placeholder="Номер телефона"
            @keydown="validateInput($event)"
            class="form-control"
          >
        </div>
      </div>
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
      <div class="form-group position-relative">
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
      <div class="form-group position-relative">
        <div class="input-group">
          <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock fa-fw"/>
                </span>
          </div>
          <div class="input-group-prepend position-absolute password-icon" @click="showPass('conf')">
                <span class="input-group-text">
                 <eye-icon class="md-icon" v-if="visibleConfPass"/>
                  <eye-off-icon class="md-icon" v-else/>
                </span>
          </div>
          <input
            v-model="user.passwordConfirm"
            :type="visibleConfPass ? 'text':'password'"
            placeholder="Confirm password"
            class="form-control"
          >
        </div>
        <p v-if="!matchPasswords">not  matching</p>
      </div>
      <div class="form-group px-4 pt-3">
        <button class="btn btn-outline-primary w-100">
          Register
        </button>
      </div>
    </form>
    <!--</div>-->
    <div slot="footer" class="text-center pt-2">
      Already got an account?
      <a href="#" @click.prevent="login">Login</a>
    </div>
    <!--</v-card>-->
    <!--</v-layout>-->
  </div>
</template>

<script>
  import Login from '@/views/Login/Index.vue';

  export default {
    name: 'RegisterIndex',
    components: {},
    data() {
      return {
        user: {
          name: '',
          phone: '',
          email: '',
          passwordConfirm: '',
          password: '',
        },
        visiblePass: false,
        visibleConfPass: false,
      };
    },
    computed: {
      validate (){
        return (this.user.phone.length === 9) &&
          (this.user.passwordConfirm === this.user.password) &&
          (this.user.email.trim().length >= 6) &&
          (this.user.password.trim().length >= 6) &&
          (this.user.name.trim().length > 1);
      },
      matchPasswords(){
        return this.user.passwordConfirm === this.user.password;
      }
    },
    methods: {
      register(user) {
        console.log((this.user.phone.length),
          (this.user.phone.length === 9),
          (this.user.passwordConfirm === this.user.password),
          (this.user.email.trim().length > 6),
          (this.user.password.trim().length > 6),
          (this.user.name.trim().length > 1))
        if (this.validate) {
          console.log('reg')
          this.$store.dispatch('auth/register', user);
        }
      },
      showPass(val) {
        if (val === 'pass') this.visiblePass = !this.visiblePass;
        if (val === 'conf') this.visibleConfPass = !this.visibleConfPass;
      },
      login() {
        this.$modal.show(Login, {}, {
          draggable: false,
          height: 'auto',
          name: 'login'
        })
        this.$modal.hide('register')
      },
      validateInput(e) {
        let key = e.keyCode ? e.keyCode : e.which;
        if ([8, 46].indexOf(key) !== -1) return;
        if (!([8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
          (key === 65 && (e.ctrlKey || e.metaKey)) ||
          (key >= 35 && key <= 40) ||
          (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
          (key >= 96 && key <= 105)
        ) || (this.user.phone && this.user.phone.length >= 9)) e.preventDefault();
      },
    },
  };
</script>

<style>
  .password-icon {
    right: 0;
    z-index: 99;
    height: 100%;
  }
</style>
