<template>
  <div class="container-fluid">
    <div class="row">
      <!-- ============================================================================ -->
      <!-- Navbar -->
      <div class="col-md-12 navbar">
        <div class="brand">Zwallet</div>
        <div class="myprofile">
          <div class="image">
            <img src="../../../assets/myprofile.png" />
          </div>
          <div class="bio">
            <div class="name">Robert Ard Junior</div>
            <div class="phoneNumber">+62 87789 9988 7733</div>
          </div>
        </div>
      </div>
    </div>
    <!-- ============================================================================ -->
    <!-- main content -->
    <div class="row content">
      <!-- ==================================== -->
      <!-- aside left -->
      <div class="col-md-3 aside-left">
        <div class="row">
          <div class="item">
            <i class="fas fa-border-none"></i><span>Dashboard</span>
          </div>
          <div class="item">
            <i class="fas fa-arrow-up"></i><span>Transfer</span>
          </div>
          <div class="item"><i class="fas fa-plus"></i><span>Top Up</span></div>
          <div class="item">
            <i class="far fa-user"></i><span>Profile</span>
          </div>
        </div>
      </div>
      <!-- ==================================== -->
      <!-- content item -->
      <div class="col-md-8 content-item">Main</div>
    </div>
    <!-- ============================================================================ -->
    <!-- Footer -->
    <div class="row">
      <div class="col-md-12 footer">
        <div class="copyright">&copy; 2020 Zwallet. All right reserved.</div>
        <div class="contact-info">
          <span>+62 5637 8882 9901</span> &nbsp;&nbsp;&nbsp;
          <span>contact@zwallet.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.container-fluid {
  background: rgba(135, 150, 238, 0.2);
}

/* ========================================================================= */
/* Content */
.navbar {
  /* border: 1px solid black; */
  height: 110px;
  background: #ffffff;
  border-radius: 0px 0px 20px 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
}

.navbar .brand {
  /* border: 1px solid black; */
  margin-left: 140px;
  font-weight: bold;
  font-size: 29px;
  color: #6379f4;
}

/* Myprofile */
.navbar .myprofile {
  /* border: 1px solid black; */
  margin-right: 140px;
  display: flex;
}

.myprofile .image {
  /* border: 1px solid black; */
  display: inline-block;
}

.myprofile .image img {
  width: 55px;
  height: 55px;
}

.myprofile .bio {
  /* border: 1px solid black; */
  display: inline-block;
  margin-left: 10px;
}

.myprofile .bio .name {
  font-weight: 500;
  font-size: 18px;
}

.myprofile .bio .phoneNumber {
  font-size: 13px;
}

/* ========================================================================= */
/* Sedangkan ini setingan Content yang membungkus navbar dan content-item */
.content {
  /* border: 1px solid black; */
  margin: 40px auto;
  width: 90%;
}

/* aside Left */
.aside-left {
  /* border: 1px solid black; */
  border-radius: 15px;

  height: 100vh;
  background: #ffffff;
  margin-left: 36px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}

.aside-left .item {
  /* border: 1px solid black; */
  width: 100%;
  margin-top: 40px;
  padding-left: 40px;
  cursor: pointer;
  font-weight: 500;

  font-size: 18px;
}

.aside-left .item i {
  /* border: 1px solid black; */
  width: 50px;
  font-size: 21px;
}

.aside-left .item:hover {
  border-left: 4px solid #6379f4;
  color: #6379f4;
}

/* Ini settingan untuk content yang sebelah navbar */
.content-item {
  /* border: 1px solid black; */
  border-radius: 15px;
  height: 100vh;
  background: #ffffff;
  margin-left: 30px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}

/* ===================================================================== */
/* Footer */
.footer {
  background: #6379f4;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer .copyright {
  /* border: 1px solid black; */
  display: inline-block;
  margin-left: 60px;
  font-size: 16px;
  color: rgba(239, 239, 239, 0.9);
  cursor: pointer;
}

.footer .contact-info {
  /* border: 1px solid black; */
  margin-right: 60px;
  font-size: 16px;
  color: rgba(239, 239, 239, 0.9);
  width: 400px;

  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
</style>
