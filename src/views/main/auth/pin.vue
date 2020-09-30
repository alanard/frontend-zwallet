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
                            <!-- <div class="input-wrapper">
                                    <div class="input-group d-flex justify-content-between my-5">
                                        <input type="number" onKeyPress="if(this.value.length==1) return false;">
                                        <input type="number" onKeyPress="if(this.value.length==1) return false;">
                                        <input type="number" onKeyPress="if(this.value.length==1) return false;">
                                        <input type="number" onKeyPress="if(this.value.length==1) return false;">
                                        <input type="number" onKeyPress="if(this.value.length==1) return false;">
                                        <input type="number" onKeyPress="if(this.value.length==1) return false;">
                                    </div>
                            </div> -->
                            <div class="input-wrapper">
                                <PincodeInput v-model="code" :length="length" />
                            </div>
                        </div>
                        <button type="submit" class="btn" v-show="showing" @click.prevent="createPin">Confirm</button>
                        <button type="submit" class="btn mt-5" v-show="!showing" style="background:#6379F4;color:#fff">Login Now</button>
                    </form>
            </div>
    </div>
</template>

<script>
import leftSide from './side'
import PincodeInput from 'vue-pincode-input'
import axios from 'axios'
export default {
  components: {
    leftSide,
    PincodeInput
  },
  data() {
    return {
      showing: true,
      code: '',
      length: 6
    }
  },
  methods: {
    createPin() {
      axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/pin`, { pin: this.code, userId: localStorage.getItem('registerId') })
        .then(() => {
          this.showing = !this.showing
          localStorage.removeItem('registerId')
          this.$router.push('/login')
        })
        .catch(err => console.log(err))
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

/* Vue Pin */
div.vue-pincode-input-wrapper {
   /* any styles you want for wrapper */
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
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
.form-group {
    width: 75%;
    margin: 60px 0px;
}

/* button {
    width: 80%;
    background: #DADADA;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
    color: #88888F;
} */
/* PIN */
.input-wrapper {
    margin: auto;
    width: 100%;
    margin-top: 100px;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
}
input[type=number] {
    height: 65px;
    width: 13%;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    border: 1px solid rgba(169, 169, 169, 0.6);
    box-sizing: border-box;
    box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
    border-radius: 10px;
    outline-color: cadetblue;
}
.btn {
    text-align: center;
    background: #DADADA;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
    width: 75%;
    height: 57px;
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
