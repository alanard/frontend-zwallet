<template>
    <div>
        <div class="container">
            <div class="card-head pt-4 pl-4">
                <h5>Personal Information</h5>
                <p class="text-wrapper">
                    We got your personal information from the sign up proccess.
                    If you want to make changes on your information, ctextontact our support.
                </p>
            </div>
            <div class="card-body">
                <div class="personal">
                    <div class="user-info">
                        <h6 style="color: #7A7886;">First Name</h6>
                        <h5>{{users.firstName}}</h5>
                    </div>
                    <div class="user-info">
                        <h6 style="color: #7A7886;">Last Name</h6>
                        <h5>{{users.lastName}}</h5>
                    </div>
                    <div class="user-info">
                        <h6 style="color: #7A7886;">Verified Email</h6>
                        <h5>{{users.email}}</h5>
                    </div>
                </div>
                <div class="user-info">
                    <h6 style="color: #7A7886;">Phone Number</h6>
                    <div class="phone-group d-flex justify-content-between">
                        <h5>{{setPhone}}</h5>
                        <span> <router-link to="/home/profile/phone">Manage</router-link></span>
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
  async mounted() {
    this.getUserLogin()
    await this.getPhoneNumber()
  },
  computed: {
    ...mapGetters({
      users: 'get_user_login',
      phones: 'get_user_phone_number'
    }),
    setPhone() {
      if (this.phones.length === 0) {
        return 'Not Set'
      } else {
        return this.phones
      }
    }
  },
  methods: {
    ...mapActions(['getUserLogin', 'getPhoneNumber'])
  }
}
</script>

<style scoped>
.container {
    height: 130vh;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
.text-wrapper {
    width: 45%;
}
.user-info {
    width: 100%;
    margin: 20px 0;
    padding: 9px 15px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}
</style>
