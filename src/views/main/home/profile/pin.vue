<template>
  <div>
    <div class="pin-wrapper">
            <div class="pin-head pt-5 pl-5">
                <h5>Change PIN</h5>
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
                            <button type="submit" class="btn btn-primary" @click.prevent="changePin">Continue</button>
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
import mixins from '../../components/mixins/swal'
import { mapActions } from 'vuex'
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
  methods: {
    ...mapActions(['getPhoneNumber', 'getUserLogin']),
    changePin() {
      const id = localStorage.getItem('id')
      axios.patch(`${process.env.VUE_APP_BASE_URL}/api/v1/pin/${id}`, { pin: this.code })
        .then(() => {
          this.success('center', 'success', 'Change Pin Success')
          this.code = ''
          this.$router.push('/home/profile')
        })
        .catch(err => console.log(err))
    }
  },
  mounted() {
    this.getPhoneNumber()
    this.getUserLogin()
  }
}
</script>

<style scoped>
.pin-wrapper {
    width: 100%;
    height: 130vh;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
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
