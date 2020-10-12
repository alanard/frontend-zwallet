<template>
  <div class="container-one">
    <!-- ================================================================= -->
    <!-- Navbar -->
    <div class="navbar">
      <div class="brand">Zwallet</div>
      <div class="join">
        <button class="btn btn-primary login" @click="LinkLogin">Login</button>
        <button class="btn btn-primary signup" @click="LinkRegister">
          Sign Up
        </button>
      </div>
    </div>
    <!-- ================================================================= -->
    <!-- Content -->
    <div class="content">
      <div class="content-image">
        <img src="../../../assets/phone.png" alt="" />
      </div>
      <div class="content-item">
        <div class="slogan">Awesome App For Saving <span>Time.</span></div>
        <div class="slogan-content">
          We bring you a mobile app for banking problems that oftenly wasting
          much of your times.
        </div>
        <button class="btn btn-primary">Try It Free</button>
        <div class="available">Available on</div>
        <div class="available-image">
          <img src="../../../assets/Available-app-playstore.png" alt="" />
          <img src="../../../assets/Available-app-store.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContainerOne',
  methods: {
    LinkLogin() {
      this.$router.push({ path: '/login' })
    },
    LinkRegister() {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>

<style scoped>
.container-one {
  /* border: 2px solid red; */
  height: inherit;
}

/* =============================================================================== */
/* Navbar */
.container-one .navbar {
  /* border: 1px solid black; */
  margin: 0px 60px 0px 60px;
  height: 80px;
  padding: 20px 0px 0px 0px;
}

.container-one .navbar .brand {
  /* border: 1px solid black; */
  font-weight: bold;
  font-size: 29px;
  color: #6379f4;
}

.container-one .navbar .join {
  /* border: 1px solid black; */
}

.container-one .navbar .join .login {
  width: 100px;
  font-size: 18px;
  font-weight: bold;
  color: #6379f4;
  background: #ffffff;

  width: 120px;
  height: 48px;
  border-radius: 12px;
}

.container-one .navbar .join .login:hover {
  color: #ffffff;
  background: #6379f4;
}

.container-one .navbar .join .signup {
  width: 100px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  background: #6379f4;

  width: 120px;
  height: 48px;
  border-radius: 12px;
}

.container-one .navbar .join .signup:hover {
  color: #6379f4;
  background: #ffffff;
}

/* =============================================================================== */
/* Navbar */
.container-one .content {
  /* border: 1px solid blue; */
  height: max-content;
  margin: 0px 60px 0px 60px;

  display: flex;
}

.content .content-image {
  /* border: 1px solid black; */
  flex: 1;
}

.content .content-image img {
  /* border: 1px solid black; */
  margin-bottom: 80px;
}

/* Content item */
.content .content-item {
  /* border: 1px solid black; */
  flex: 1;
}

.content .content-item .slogan {
  /* border: 1px solid black; */
  margin-top: 180px;

  font-weight: 800;
  font-size: 60px;
}

.content .content-item .slogan span {
  color: #6379f4;
}

.content .content-item .slogan-content {
  /* border: 1px solid black; */
  margin-top: 40px;

  font-weight: normal;
  font-size: 18px;
}

.content .content-item .btn {
  /* border: 1px solid black; */
  background: #6379f4;
  margin-top: 50px;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  width: 150px;
  height: 50px;
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
}

/* Available */
.content .content-item .available {
  /* border: 1px solid black; */
  font-size: 18px;
  margin-top: 50px;
}

.content .content-item .available-image {
  /* border: 1px solid black; */
  margin-top: 20px;
}

.content .content-item .available-image img {
  padding: 0px 20px 0px 20px;
}
</style>
