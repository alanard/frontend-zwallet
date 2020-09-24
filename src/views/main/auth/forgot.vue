<template>
    <div class="wrapper d-flex">
            <div class="one">
                <leftSide />
            </div>
            <div class="two p-5">
                    <div class="container-text">
                        <h5>
                            Did You Forgot Your Password?
                            Don’t Worry, You Can Reset Your
                            Password In a Minutes.
                        </h5>
                    </div>
                    <p v-show="showing" style="color: rgba(58, 61, 66, 0.6); width: 75%;">
                        To reset your password,
                        you must type your e-mail and we will send a link to your email
                        and you will be directed to the reset password screens.
                    </p>
                    <p v-show="!showing" style="color: rgba(58, 61, 66, 0.6); width: 75%;">
                        Now you can create a new password for your Zwallet account.
                        Type your password twice so we can confirm your new passsword.
                    </p>
                    <form>
                        <div class="form-group" v-show="showing">
                            <i class="satu far fa-envelope fa-lg fa-fw"></i>
                            <input type="email" placeholder="Enter your email">
                        </div>
                        <div class="form-group" v-show="!showing">
                            <div class="input-group">
                                <i class="satu fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                                <input :type="type" placeholder="Enter your password">
                                <div class="input-group-append" style="margin-left:-40px">
                                    <div :class="{active:active}" @click="show"><i class="fa fa-eye"></i></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group" v-show="!showing">
                            <div class="input-group">
                                <i class="satu fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                                <input :type="type" placeholder="Enter your password">
                                <div class="input-group-append" style="margin-left:-40px">
                                    <div :class="{active:active}" @click="show"><i class="fa fa-eye"></i></div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn" @click.prevent="showing = !showing" v-show="showing">Confirm</button>
                        <button type="submit" class="btn" v-show="!showing">Reset Password</button>
                    </form>
            </div>
    </div>
</template>

<script>
import leftSide from './side'
export default {
  components: {
    leftSide
  },
  data () {
    return {
      type: 'password',
      active: false,
      showing: true
    }
  },
  methods: {
    show () {
      this.type = this.type === 'password' ? 'text' : 'password'
      this.active = !this.active
    }
  }
}
</script>

<style scoped>
.wrapper {
    width: 100%;
    height: 100vh;
}

/* ONE */
.one {
    background: #6379F4;
    width: 50%;
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
    padding-left: 30px;
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
.active {
    height: 15px;
    line-height: 15px;
    border-radius: 18px;
    background: #A9A9A9;
}

button {
    width: 80%;
    background: #DADADA;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
    color: #88888F;
}
@media screen and (max-width: 992px) {
  .wrapper {
      display: flex;
      flex-direction: column;
  }
  .one, .two {
      width: 100%;
  }
}
</style>
