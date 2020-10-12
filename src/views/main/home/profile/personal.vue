<template>
  <div>
    <div class="container">
      <div class="card-head pt-4 pl-4">
        <h5>Personal Information</h5>
        <p class="text-wrapper">
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, ctextontact our support.
        </p>
      </div>
      <div class="card-body" v-for="(user, index) in users" :key="index">
        <div class="user-info">
          <h6 style="color: #7a7886">First Name</h6>
          <h5>{{ user.firstName }}</h5>
        </div>
        <div class="user-info">
          <h6 style="color: #7a7886">Last Name</h6>
          <h5>{{ user.lastName }}</h5>
        </div>
        <div class="user-info">
          <h6 style="color: #7a7886">Verified Email</h6>
          <h5>{{ user.email }}</h5>
        </div>
        <div class="user-info">
          <h6 style="color: #7a7886">Phone Number</h6>
          <div class="phone-group d-flex justify-content-between">
            <h5>{{ user.phone }}</h5>
            <span>
              <router-link to="/home/profile/phone">Manage</router-link></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'personal',
  mounted() {
    this.getUserLogin()
  },
  computed: {
    ...mapGetters({
      users: 'get_user_login'
    })
  },
  methods: {
    ...mapActions(['getUserLogin'])
  }
}
</script>

<style scoped>
.container {
  /* width: 100%; */
  height: 100vh;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
}
.text-wrapper {
  width: 45%;
}
.user-info {
  width: 100%;
  /* height: 92px; */
  margin: 20px 0;
  padding: 9px 15px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
</style>
