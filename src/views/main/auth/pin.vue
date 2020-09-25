<template>
    <div class="wrapper d-flex">
            <div class="one">
               <leftSide />
            </div>
            <div class="two p-5">
                <img src="../../../assets/success.svg" v-show="!showing">
                    <div class="container-text" v-show="showing">
                        <h5>Secure Your Account, Your Wallet,
                            and Your Data With 6 Digits PIN
                            That You Created Yourself.
                        </h5>
                    </div>
                    <div class="container-text" v-show="!showing">
                        <h5>Your PIN Was Successfully Created</h5>
                    </div>
                    <p style="color: rgba(58, 61, 66, 0.6); width: 75%;" v-show="showing">
                        Create 6 digits pin to secure all your money and your data in Zwallet app.
                        Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.
                    </p>
                    <p style="color: rgba(58, 61, 66, 0.6); width: 75%;" v-show="!showing">
                        Your PIN was successfully created and you can now access all the features in Zwallet.
                        Login to your new account and start exploring!
                    </p>
                    <form>
                        <div class="form-group" v-show="showing">
                            <i class="satu far fa-envelope fa-lg fa-fw"></i>
                            <input type="email" placeholder="Enter your email">
                        </div>
                        <button type="submit" class="btn" @click.prevent="showing = !showing" v-show="showing">Confirm</button>
                        <button type="submit" class="btn mt-5" @click.prevent="login" v-show="!showing" style="background:#6379F4;color:#fff">Login Now</button>
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
    },
    login () {
      this.$router.push('/login')
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
