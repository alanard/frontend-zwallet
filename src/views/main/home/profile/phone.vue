<template>
    <div>
        <div class="phone-wrapper">
            <div class="phone-head pt-5 pl-4">
                <div class="one" v-show="active">
                    <h5>Add Phone Number</h5>
                    <p class="text-wrapper my-4">
                        Add at least one phone number
                        for the transfer ID so you can
                        start transfering your money to another user.
                    </p>
                </div>
                <div class="two" v-show="!active">
                    <h5>Manage Phone Number</h5>
                    <p class="text-wrapper my-4">
                       You can only delete the phone number and then you must add another phone number.
                    </p>
                </div>
            </div>
            <div class="phone-body">
                <div class="one" v-show="!active">
                    <form>
                        <div class="input-group">
                            <i class="fas fa-phone-alt satu"></i>
                            <input type="number" onKeyPress="if(this.value.length==13) return false;"
                            placeholder="Enter your phone number" v-model="phone">
                        </div>
                        <div class="submit">
                            <button type="submit" class="btn btn-primary" @click.prevent="addPhone">Add Phone Number</button>
                        </div>
                    </form>
                </div>
                <div class="two" v-show="active">
                    <button class="btn-sm btn-primary" @click="addBtn" style="margin-left:40px">Add phone number</button>
                    <div class="phone-card" v-for="(phone, index) in phones" :key="index">
                        <div class="content-group d-flex justify-content-between">
                            <h5>{{phone.phoneNumber}}</h5>
                            <i class="far fa-trash-alt dua" @click="del(phone);deletePhone()"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import mixins from '../../components/mixins/swal'
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      active: true,
      phoneId: '',
      phone: null
    }
  },
  mixins: [mixins],
  methods: {
    ...mapActions(['getPhones']),
    addBtn() {
      this.active = !this.active
    },
    addPhone() {
      axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/phone`, {
        userId: localStorage.getItem('id'),
        phoneNumber: this.phone
      })
        .then(() => {
          this.active = !this.active
          this.getPhones()
          this.success('center', 'success', 'add phone number success')
        })
        .catch(err => console.log(err))
    },
    del(phone) {
      this.phoneId = phone.phoneId
    },
    deletePhone() {
      this.confirmDel(() => {
        const phoneId = this.phoneId
        axios.delete(`${process.env.VUE_APP_BASE_URL}/api/v1/phone/${phoneId}`)
          .then(res => {
            this.getPhones()
          })
          .catch(err => console.log(err))
      })
    }
  },
  mounted() {
    this.getPhones()
  },
  computed: {
    ...mapGetters({
      phones: 'get_user_phones'
    })
  }
}
</script>

<style scoped>
.phone-wrapper {
    width: 100%;
    height: 130vh;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
.text-wrapper {
    width: 45%;
}
i.satu {
    position: absolute;
}
i.dua {
    cursor: pointer;
}
.input-group, .submit {
    margin: auto;
    margin-top: 100px;
    padding-left: 120px;
    padding-right: 100px;
}
input:focus {
    outline: none;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
}
input[type=number] {
    width: 90%;
    padding-left: 40px;
    border: none;
    border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
}
.btn {
    width: 90%;
    height: 50px;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
}
.phone-card {
    width: 90%;
    margin: auto;
    margin-top: 50px;
    height: 92px;
    padding: 33px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}
</style>
