<template>
    <div class="wrapper d-flex">
            <div class="one">
                <h5 class="color" style="margin-left:80px">Zwallet</h5>
                <div class="img-wrapper">
                    <img src="../../../assets/Group 57.svg">
                </div>
                <div class="text-container" style="margin-left:80px;">
                    <h5 class="color mb-3">App that Covering Banking Needs.</h5>
                    <p style="color: rgba(255, 255, 255, 0.8);">Zwallet is an application that focussing in banking needs for all users
                        in the world. Always updated and always following world trends.
                        5000+ users registered in Zwallet everyday with worldwide
                        users coverage.
                    </p>
                </div>
            </div>
            <div class="two pt-2 px-4">
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
                            <i class="satu far fa-user fa-lg fa-fw" aria-hidden="true"></i>
                            <input type="text" class="name" placeholder="Enter your name" v-model="$v.username.$model">
                            <span v-if="$v.username.$error" class="validation">Username required</span>
                        </div>
                        <div class="form-group d-flex flex-column">
                            <i class="satu far fa-envelope fa-lg fa-fw"></i>
                            <!-- <input type="email" placeholder="Enter your email" v-model="email"> -->
                            <input type="email" placeholder="Enter your email" v-model="$v.email.$model">
                            <span v-if="$v.email.$error" class="validation">Email required</span>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <i class="satu fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                                <input :type="type" placeholder="Create your password" v-model="password">
                                <div class="input-group-append" style="margin-left:-40px">
                                    <div @click="show">
                                        <i v-show="display" class="fa fa-eye"></i>
                                        <i v-show="!display" class="dua fa fa-eye-slash"></i>
                                    </div>
                                </div>
                                <span class="validation" v-if="password.length >= 1 && password.length < 6">The password min 6 characters</span>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary" @click.prevent="submit">Sign Up</button>
                    </form>
                    <div style="width: 80%"><p class="text-center my-4">Already have an account?<router-link to="/login"><strong>Let's Login</strong></router-link></p></div>
            </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      type: 'password',
      active: false,
      display: true,
      username: '',
      email: '',
      password: ''
    }
  },
  /* vuelidate */
  validations: {
    username: {
      required
    },
    email: {
      required
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    ...mapActions(['register']),
    submit() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.register(data)
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
  /* margin: auto; */
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
    margin: 50px 0px;
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
