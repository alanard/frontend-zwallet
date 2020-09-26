<template>
  <div class="container-four">
    <!-- ================================================================================== -->
    <!-- Slogan -->
    <div class="slogan">
      <div class="slogan-title">What Users are <span>Saying.</span></div>
      <div class="slogan-content">
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
          <img src="../../../assets/User/user2.png" alt="" />
        </div>
        <div class="title">Sherina Chaw</div>
        <div class="content">
          “I use this app since 2 years ago and <br />
          this is the best app that I’ve ever use <br />
          in my entire life”
        </div>
      </div>
      <div class="fitur-item">
        <div class="image">
          <img src="../../../assets/User/friend.png" alt="" />
        </div>
        <div class="title">Jessica Mera</div>
        <div class="content">
          “I use Zwallet to manage all financial <br />
          needs. It’s super easy to use and it’s <br />
          100% free app”
        </div>
      </div>
      <div class="fitur-item">
        <div class="image">
          <img src="../../../assets/User/user1.png" alt="" />
        </div>
        <div class="title">Robert Chandler</div>
        <div class="content">
          “Since I’m using this app, I’m not <br />
          going to move to another similar app. <br />
          Thank you Zwallet!”
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContainerFour'
}
</script>

<style scoped>
.container-four {
  /* border: 1px solid green; */
  height: inherit;
}

.container-four .slogan {
  /* border: 1px solid black; */
  width: 60%;
  margin: auto;
  text-align: center;

  margin-top: 120px;
}

.container-four .slogan .slogan-title {
  /* border: 1px solid black; */
  font-weight: 800;
  font-size: 60px;
}

.container-four .slogan .slogan-title span {
  color: #6379f4;
}

.container-four .slogan .slogan-content {
  /* border: 1px solid black; */
  margin-top: 40px;

  font-weight: normal;
  font-size: 18px;
}

/* ================================================================== */
/* Fitur */
.container-four .fitur {
  /* border: 1px solid black; */
  width: 90%;
  margin-top: 70px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 70px;
  display: flex;
}

.container-four .fitur .fitur-item {
  /* border: 1px solid black; */
  flex: 1;
  height: 344px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 80px;
  background: #ffffff;
  box-shadow: 0px 4px 250px rgba(172, 172, 172, 0.15);
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
}

.fitur .fitur-item .image {
  margin-top: 30px;
}

.fitur .fitur-item .title {
  /* border: 1px solid black; */
  font-weight: bold;
  font-size: 24px;
  margin-top: 30px;
}

.fitur .fitur-item .content {
  /* border: 1px solid black; */
  font-weight: normal;
  font-size: 18px;
  color: rgba(58, 61, 66, 0.9);

  margin-top: 40px;
}
</style>
