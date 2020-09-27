<template>
    <div>
        <div class="profile-wrapper">
            <div class="profile" v-for="(user, index) in users" :key="index">
                <div class="profile-head">
                    <div class="img-wrapper">
                        <img src="../../../../assets/myprofile.png">
                    </div>
                    <div class="edit my-2">
                        <img src="../../../../assets/edit-2.png">
                        <span class="ml-1">Edit</span>
                    </div>
                    <div class="profile-user">
                        <h4>{{user.firstName}} {{user.lastName}}</h4>
                        <span>{{user.phone}}</span>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ users: 'get_user' })
  },
  methods: {
    toPersonal() {
      this.$router.push('/home/profile/personal')
    },
    toChangePw() {
      this.$router.push('/home/profile/password')
    },
    toChangePIN() {
      this.$router.push('/home/profile/pin')
    }
  }
}
</script>

<style scoped>
.profile-wrapper {
    width: 100%;
    height: 100vh;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
.profile {
    padding: 30px 0;
    text-align: center;
    border: 1px solid black;
}
.profile-body {
    border: 1px solid black;
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
</style>
