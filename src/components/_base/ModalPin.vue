<template>
  <div>
    <div class="pin-wrapper">
            <div class="pin-head pt-5 pl-5">
                <h5>Input PIN</h5>
                <p class="text-wrapper">
                    Enter your current 6 digits Zwallet PIN below to continue to the next steps.
                </p>
            </div>
            <div class="pin-body">
                <div class="input-container">
                    <form>
                        <div class="input-wrapper">
                            <PincodeInput v-model="code" :length="length" />
                        </div>
                        <div class="submit mx-3">
                            <button type="submit" class="btn btn-primary" @click.prevent="comparePin">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import PincodeInput from 'vue-pincode-input'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import mixins from '../../views/main/components/mixins/swal'
import { mapGetters } from 'vuex'
export default {
  components: {
    PincodeInput
  },
  mixins: [mixins],
  data() {
    return {
      code: '',
      length: 6
    }
  },
  props: ['send', 'close-modal'],
  methods: {
    getPin() {

    },
    comparePin() {
      const id = localStorage.getItem('id')
      axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/pin/${id}`)
        .then((res) => {
          const pin = res.data.result[0].pin
          console.log(pin)
          const codeInput = parseInt(this.code)
          console.log(codeInput)
          const pinUser = pin
          console.log(pinUser)
          if (codeInput === pinUser) {
            Swal.fire({
              icon: 'success',
              title: 'Nice',
              text: 'Successfully!'
            })
            console.log('success')
            this.$emit('send')
            this.$emit('close-modal')
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Pin incorrect!'
            })
            console.log('error')
          }
        })
        .catch(err => console.log(err))
    }
  },
  computed: {
    ...mapGetters({
      userPin: 'get_user_pin'
    })
  }
}
</script>

<style scoped>
.pin-wrapper {
    width: 50%;
    height: 70vh;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.452);
    border-radius: 25px;
    position: fixed;
    top: 60px;
    left: 500px;
    z-index: 100;
}
/* Vue Pin */
div.vue-pincode-input-wrapper {
   /* any styles you want for wrapper */
    width: 100%;
    height: 50px;
    display: flex;
    margin-bottom: 50px;
    justify-content: space-around;
}
.text-wrapper {
  width: 45%;
}
.input-container {
    margin: auto;
    width: 70%;
    margin-top: 100px;
}
.btn {
    text-align: center;
    /* background: #DADADA; */
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
    width: 100%;
    height: 57px;
}
</style>
