<template>
    <div>
        <div class="profile-wrapper">
            <!-- <div class="profile" v-for="user in users" :key="user.id"> -->
            <div class="profile">
                <div class="profile-head">
                    <div class="img-wrapper">
                        <img :src="users.image">
                    </div>
                    <div class="edit my-2">
                        <img src="../../../../assets/edit-2.png">
                        <span class="ml-1 pointer" @click="edit(users)">Edit</span>
                    </div>
                    <div class="profile-user">
                        <h4>{{users.firstName}} {{users.lastName}}</h4>
                        <span>{{users.phone}}</span>
                    </div>
                </div>
                <div class="profile-body">
                    <div class="manage pointer d-flex justify-content-between" @click="toPersonal">
                        <h5 class="pointer">Personal Information</h5>
                        <img class="pointer" src="../../../../assets/arrow-left.svg">
                    </div>
                    <div class="manage pointer d-flex justify-content-between" @click="toChangePw">
                        <h5 class="pointer">Change Password</h5>
                        <img class="pointer" src="../../../../assets/arrow-left.svg">
                    </div>
                    <div class="manage pointer d-flex justify-content-between" @click="toChangePIN">
                        <h5 class="pointer">Change PIN</h5>
                        <img class="pointer" src="../../../../assets/arrow-left.svg">
                    </div>
                    <div class="manage pointer d-flex justify-content-between" @click="logout">
                        <h5 class="pointer">Logout</h5>
                    </div>
                </div>
            </div>
            <modal :data="userData" v-show="active" @close="toggle" @fire-event="updateData" />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import mixins from '../../components/mixins/swal'
import modal from './modal'
export default {
  components: {
    modal
  },
  mixins: [mixins],
  data() {
    return {
      active: false,
      userData: {
        id: null,
        username: '',
        firstName: '',
        lastName: '',
        image: null
      }
    }
  },
  mounted() {
    this.getUserLogin()
    this.getPhoneNumber()
  },
  computed: {
    ...mapGetters({
      users: 'get_user_login',
      get_user_phone_number: 'get_user_phone_number'
    })
  },
  methods: {
    ...mapActions(['logout', 'getUserLogin', 'updateUser', 'getPhoneNumber']),
    toPersonal() {
      this.$router.push('/home/profile/personal')
    },
    toChangePw() {
      this.$router.push('/home/profile/password')
    },
    toChangePIN() {
      this.$router.push('/home/profile/pin')
    },
    edit(users) {
      console.log(users)
      this.userData.id = users.userId
      this.userData.username = users.username
      this.userData.firstName = users.firstName
      this.userData.lastName = users.lastName
      this.userData.image = users.image
      this.active = !this.active
    },
    updateData() {
      const fd = new FormData()
      fd.append('username', this.userData.username)
      fd.append('firstName', this.userData.firstName)
      fd.append('lastName', this.userData.lastName)
      fd.append('image', this.userData.image)
      const data = { id: this.userData.id, data: fd }
      this.updateUser(data)
        .then(res => {
          this.clearData()
          this.getUserLogin()
          this.success('center', 'success', 'Data successfully updated')
        })
    },
    clearData() {
      this.userData.id = null
      this.userData.username = ''
      this.userData.firstName = ''
      this.userData.Lastname = ''
      this.userData.phone = ''
      this.userData.image = null
      this.active = !this.active
    },
    toggle() {
      this.active = false
    }
  }
}
</script>

<style scoped>
.profile-wrapper {
    width: 100%;
    height: 130vh;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
.profile {
    padding: 30px 0;
    text-align: center;
}
.profile-body {
    margin-top: 40px;
}
.manage {
    /* width: 433px; */
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 54%;
    height: 64px;
    padding: 18px;
    background: #E5E8ED;
    border-radius: 10px;
}
.pointer {
    cursor: pointer;
}
.img-wrapper img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
}
</style>
