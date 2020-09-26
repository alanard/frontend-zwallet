<template>
  <div class="container-two">
    <!-- ================================================================= -->
    <!-- Patner -->
    <div class="patner">
      <div class="patner-item">
        <img src="../../../assets/patner/patner-microsoft.png" alt="" />
        <img src="../../../assets/patner/patner-dropbox.png" alt="" />
        <img src="../../../assets/patner/patner-h&m.png" alt="" />
        <img src="../../../assets/patner/patner-airbnb.png" alt="" />
        <img src="../../../assets/patner/patner-cannon.png" alt="" />
        <img src="../../../assets/patner/patner-dell.png" alt="" />
      </div>
    </div>
    <!-- ================================================================= -->
    <!-- About -->
    <div class="about">
      <div class="about-title"><span>About</span> the Application.</div>
      <div class="about-content">
        We have some great features from the application and it’s totally free
        <br />
        to use by all users around the world.
      </div>
    </div>
    <!-- ================================================================= -->
    <!-- Fitur -->
    <div class="fitur">
      <div class="fitur-item">
        <div class="image">
          <img src="../../../assets/Logos/suport-logos.png" alt="" />
        </div>
        <div class="title">24/7 Support</div>
        <div class="content">
          We have 24/7 contact support so you <br />
          can contact us whenever you want <br />
          and we will respond it.
        </div>
      </div>
      <div class="fitur-item">
        <div class="image">
          <img src="../../../assets/Logos/privacy-logos.png" alt="" />
        </div>
        <div class="title">Data Privacy</div>
        <div class="content">
          We make sure your data is safe in our <br />
          database and we will encrypt any <br />
          data you submitted to us.
        </div>
      </div>
      <div class="fitur-item">
        <div class="image">
          <img src="../../../assets/Logos/download-logos.png" alt="" />
        </div>
        <div class="title">Easy Download</div>
        <div class="content">
          Zwallet is 100% totally free to use it’s <br />
          now available on Google Play Store <br />and App Store.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContainerTwo'
}
</script>

<style scoped>
.container-two {
  /* border: 2px solid yellow; */
  height: inherit;
  background: rgba(200, 208, 247, 0.2);
}

/* ================================================================== */
/* Patner */
.container-two .patner {
  border: 1px solid rgba(71, 58, 209, 0.06);
  height: 300px;
  background: rgba(71, 58, 209, 0.06);
}

.container-two .patner .patner-item {
  /* border: 1px solid black; */
  display: flex;
  width: 87%;
  margin: 100px auto;
  justify-content: space-between;

  cursor: pointer;
}

/* ================================================================== */
/* About */
.container-two .about {
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 80px;
  text-align: center;
}

.container-two .about .about-title {
  /* border: 1px solid black; */
  font-weight: 800;
  font-size: 60px;
}

.container-two .about .about-title span {
  color: #6379f4;
}

.container-two .about .about-content {
  /* border: 1px solid black; */
  margin-top: 30px;

  font-weight: normal;
  font-size: 18px;
}

/* ================================================================== */
/* Fitur */
.container-two .fitur {
  /* border: 1px solid black; */
  width: 90%;
  margin: auto;
  display: flex;
}

.container-two .fitur .fitur-item {
  /* border: 1px solid black; */
  flex: 1;
  height: 344px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 80px;

  background: rgba(220, 226, 255, 0.2);
  box-shadow: 0px 4px 250px rgba(172, 172, 172, 0.15);
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
}

.container-two .fitur .fitur-item:hover {
  background: #ffffff;
}

.fitur .fitur-item .image {
  margin-top: 30px;
}

.fitur .fitur-item .title {
  /* border: 1px solid black; */
  font-weight: bold;
  font-size: 24px;
}

.fitur .fitur-item .content {
  /* border: 1px solid black; */
  font-weight: normal;
  font-size: 18px;
  color: rgba(58, 61, 66, 0.9);

  margin-top: 40px;
}
</style>
