<template>
    <div>
        <div class="container">
            <div class="card-head pt-5 pl-4">
                <h5>Change Password</h5>
                <p class="text-wrapper">
                    You must enter your current password and then type your new password twice.
                </p>
            </div>
            <div class="card-body">
                <div class="input-wrapper">
                    <!-- <form v-for="(user, index) in users" :key="index"> -->
                    <form>
                        <div class="form-group">
                            <div class="input-group">
                                <i class="satu fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                                <input :type="type" placeholder="Current password">
                                <div class="input-group-append" style="margin-left:-20px">
                                    <div @click="show">
                                        <i class="dua fa fa-eye" v-show="display"></i>
                                        <i v-show="!display" class="dua fa fa-eye-slash"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <i class="satu fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                                <input :type="type2" placeholder="New password" v-model="password">
                                <div class="input-group-append" style="margin-left:-20px">
                                    <div @click="show2">
                                        <i class="dua fa fa-eye" v-show="display2"></i>
                                        <i v-show="!display2" class="dua fa fa-eye-slash"></i>
                                    </div>
                                </div>
                                <span class="validation" v-if="password.length >= 1 && password.length < 6">The password min 6 characters</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <i class="satu fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                                <input :type="type3" placeholder="Repeat password" v-model="$v.repeatPassword.$model">
                                <div class="input-group-append" style="margin-left:-20px">
                                    <div @click="show3">
                                        <i class="dua fa fa-eye" v-show="display3"></i>
                                        <i v-show="!display3" class="dua fa fa-eye-slash"></i>
                                    </div>
                                </div>
                                <span class="validation" v-if="!$v.repeatPassword.sameAsPassword">Password not same</span>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block" @click.prevent="updatePassword">Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import mixins from '../../components/mixins/swal'
import axios from 'axios'
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  name: 'changePw',
  mixins: [mixins],
  data() {
    return {
      type: 'password',
      type2: 'password',
      type3: 'password',
      pw: true,
      display: true,
      display2: true,
      display3: true,
      /* User update */
      //   userData: {
      //     password: '',
      //     repeatPassword: ''
      //   }
      password: '',
      repeatPassword: ''
    }
  },
  validations: {
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      minLength: minLength(6),
      sameAsPassword: sameAs('password')
    }
  },
  mounted() {
    this.getUserLogin()
  },
  computed: {
    ...mapGetters({
      users: 'get_user_login'
    })
  },
  methods: {
    ...mapActions(['getUserLogin']),
    show() {
      this.type = this.type === 'password' ? 'text' : 'password'
      this.display = !this.display
    },
    show2() {
      this.type2 = this.type2 === 'password' ? 'text' : 'password'
      this.display2 = !this.display2
    },
    show3() {
      this.type3 = this.type3 === 'password' ? 'text' : 'password'
      this.display3 = !this.display3
    },
    updatePassword() {
      const id = localStorage.getItem('id')
      axios.patch(`${process.env.VUE_APP_BASE_URL}/api/v1/user/password/${id}`, { password: this.password })
        .then(res => {
          this.active = !this.active
          this.success('center', 'success', 'Password changed')
        })
        .catch(err => {
          if (err.response.status === 403) {
            this.failed('Dont use old password')
          }
        })
    }
  }

}
</script>

<style scoped>
.container {
    width: 100%;
    height: 130vh;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
.text-wrapper {
    width: 45%;
}

/* Validation */
.validation {
  width: 100%;
  text-align: center;
  color: red;
}

.input-wrapper {
  margin: auto;
  width: 70%;
  padding: 10px;
}
.form-group {
    margin: 70px 0;
}
input:focus {
    outline: none;
}
input {
    width: 100%;
    padding-left: 30px;
}
i.satu {
    position: absolute;
    color:  rgba(169, 169, 169, 0.6);
}
i.dua {
    float: right;
    cursor: pointer;
}
input[type=text] {
  border: none;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
}
input[type=text]:focus + i {
  border: none;
  color: dodgerblue;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
}
input[type=password] {
  border: none;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
}
.btn {
    height: 57px;
    /* background: #DADADA; */
    /* box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05); */
    border-radius: 12px;
}
</style>
