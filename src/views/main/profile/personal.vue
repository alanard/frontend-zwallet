<template>
    <div>
        <div class="container">
            <div class="card-head pt-5 pl-3">
                <h5>Personal Information</h5>
                <p class="text-wrapper">
                    We got your personal information from the sign up proccess.
                    If you want to make changes on your information, ctextontact our support.
                </p>
            </div>
            <div class="card-body">
                <div class="user-info">
                    <h6 style="color: #7A7886;">First Name</h6>
                    <h5>Robert</h5>
                </div>
                <div class="user-info">
                    <h6 style="color: #7A7886;">Last Name</h6>
                    <h5>Chandler</h5>
                </div>
                <div class="user-info">
                    <h6 style="color: #7A7886;">Verified Email</h6>
                    <h5>pewdiepie1@gmail.com</h5>
                </div>
                <div class="user-info">
                    <h6 style="color: #7A7886;">Phone Number</h6>
                    <div class="phone-group d-flex justify-content-between">
                        <h5>+62 813-9387-7946</h5>
                        <span>Manage</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'personal'

}
</script>

<style scoped>
.container {
    /* height: 678px; */
    width: 850px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
.text-wrapper {
    width: 45%;
}
.user-info {
    width: 100%;
    height: 92px;
    margin: 30px 0;
    padding: 9px 15px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}
</style>
