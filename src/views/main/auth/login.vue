<template>
    <div class="wrapper d-flex">
            <div class="one">
               <leftSide />
            </div>
            <div class="two p-5">
                    <div class="container-text">
                        <h5>Start Accessing Banking Needs
                            With All Devices and All Platforms
                            With 30.000+ Users
                        </h5>
                    </div>
                    <p style="color: rgba(58, 61, 66, 0.6); width: 75%;">Transfering money is eassier than ever,
                        you can access Zwallet wherever you are.
                        Desktop, laptop, mobile phone? we cover
                        all of that for you!
                    </p>
                    <form>
                        <div class="form-group d-flex flex-column">
                            <i class="satu far fa-envelope fa-lg fa-fw"></i>
                            <!-- <input type="email" placeholder="Enter your email" v-model="email"> -->
                            <input type="email" placeholder="Enter your email" v-model="$v.email.$model">
                            <span v-if="$v.email.$error" class="validation">Email required</span>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <i class="satu fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                                <!-- <input :type="type" placeholder="Enter your password" v-model="password"> -->
                                <input :type="type" placeholder="Enter your password" v-model="$v.password.$model">
                                <div class="input-group-append" style="margin-left:-40px">
                                    <div @click="show">
                                        <i v-show="display" class="fa fa-eye"></i>
                                        <i v-show="!display" class="dua fa fa-eye-slash"></i>
                                    </div>
                                </div>
                                <span v-if="$v.password.$error" class="validation">Password required</span>
                            </div>
                            <p class="text-right mt-3" style="width:80%"><router-link to="/forgot">Forgot password?</router-link></p>
                        </div>
                        <button type="submit" class="btn btn-primary" @click.prevent="submit">Login</button>
                    </form>
                    <div style="width: 80%"><p class="text-center mt-2">Don't have an account?<router-link to="/register"><strong>Sign Up</strong></router-link></p></div>
            </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import leftSide from './side'
export default {
  components: {
    leftSide
  },
  data() {
    return {
      type: 'password',
      active: false,
      display: true,
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    ...mapActions(['login']),
    submit() {
      const data = {
        email: this.email,
        password: this.password
      }
      this.login(data)
    },
    show() {
      this.type = this.type === 'password' ? 'text' : 'password'
      this.active = !this.active
      this.display = !this.display
    }
  }
}
</script>

<style scoped>
.wrapper {
    width: 100%;
    height: 100vh;
}
.color { color: white;}
/* Validation */
.validation {
  width: 80%;
  text-align: center;
  color: red;
}

/* ONE */
.one {
    background: #6379F4;
    width: 50%;
}
.img-wrapper {
    margin: auto;
    object-fit: cover;
}
.img-wrapper img {
    width: 80%;
    height: 500px;
}

/* TWO */
.two {
    width: 50%;
}

.container-text {
    width: 70%;
    margin-top: 30px;
    margin-bottom: 20px;
}

input:focus {
    outline: none;
}
input {
    width: 80%;
    padding-left: 40px;
}
i.satu {
    position: absolute;
    color:  rgba(169, 169, 169, 0.6);
}
input[type=text] {
  border: none;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
}
input[type=email] {
  border: none;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
}
input[type=password] {
  border: none;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
}
.form-group {
    margin: 60px 0px;
}
.input-group-append {
    cursor: pointer;
}

button {
    width: 80%;
    height: 57px;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
}
@media screen and (max-width: 992px) {
  .wrapper {
      display: flex;
      flex-direction: column;
  }
  .one, .two {
      width: 100%;
  }
  .text-container {
      width: 60%;
  }
}
@media screen and (min-width: 992px) {
  .text-container {
      width: 400px;
  }
}
</style>
