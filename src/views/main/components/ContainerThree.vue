<template>
  <div class="container-three">
    <!-- ================================================================= -->
    <!-- Content -->
    <div class="content">
      <div class="content-image">
        <img src="../../../assets/phone.png" alt="" />
      </div>
      <div class="content-item">
        <div class="slogan">All The <span>Great</span> Zwallet Features.</div>
        <div class="slogan-content">
          <div class="item-content">
            <div class="title"><span>1.</span> Small Fee</div>
            <div class="content">
              We only charge 5% of every success transaction done in Zwallet
              app.
            </div>
          </div>
          <div class="item-content">
            <div class="title"><span>2.</span> Data Secured</div>
            <div class="content">
              We only charge 5% of every success transaction done in Zwallet
              app.
            </div>
          </div>
          <div class="item-content">
            <div class="title"><span>3.</span> User Friendly</div>
            <div class="content">
              We only charge 5% of every success transaction done in Zwallet
              app.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContainerOne'
}
</script>

<style scoped>
.container-three {
  /* border: 2px solid red; */
  height: inherit;

  background: rgba(71, 58, 209, 0.06);
}

/* =============================================================================== */
/* Content */
.container-three .content {
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
  margin-top: 80px;
  margin-bottom: 50px;
}

/* Content item */
.content .content-item {
  /* border: 1px solid black; */
  flex: 1;
}

.content .content-item .slogan {
  /* border: 1px solid black; */
  margin-top: 220px;

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

.slogan-content .item-content {
  /* border: 1px solid black; */
  margin-bottom: 20px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 15px 0px 15px 0px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
}

.slogan-content .item-content .title {
  /* border: 1px solid black; */
  width: 90%;
  margin-left: 20px;

  font-weight: bold;
  font-size: 20px;
}

.slogan-content .item-content .title span {
  color: #6379f4;
}

.slogan-content .item-content .content {
  /* border: 1px solid black; */
  width: 90%;
  margin-left: 20px;

  font-weight: normal;
  font-size: 18px;
  color: rgba(58, 61, 66, 0.9);
}
</style>
