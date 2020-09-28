<template>
  <div class="transfer">
    <div class="title">Search Receiver</div>
    <div class="content">
      <div class="search-content">
        <i class="fas fa-search"></i
        ><input type="text" placeholder="Search receiver here" />
      </div>
      <div class="item-content" @click="linkToTransfer">
        <div class="image">
          <img src="../../../../assets/User/user2.png" alt="" />
        </div>
        <div class="bio">
          <div class="name">Samuel Suhi</div>
          <div class="phone-number">+62 813-8492-9994</div>
        </div>
      </div>
      <div class="item-content" @click="linkToTransfer">
        <div class="image">
          <img src="../../../../assets/User/user2.png" alt="" />
        </div>
        <div class="bio">
          <div class="name">Samuel Suhi</div>
          <div class="phone-number">+62 813-8492-9994</div>
        </div>
      </div>
      <div class="item-content" @click="linkToTransfer">
        <div class="image">
          <img src="../../../../assets/User/user2.png" alt="" />
        </div>
        <div class="bio">
          <div class="name">Samuel Suhi</div>
          <div class="phone-number">+62 813-8492-9994</div>
        </div>
      </div>
      <div class="item-content" @click="linkToTransfer">
        <div class="image">
          <img src="../../../../assets/User/user2.png" alt="" />
        </div>
        <div class="bio">
          <div class="name">Samuel Suhi</div>
          <div class="phone-number">+62 813-8492-9994</div>
        </div>
      </div>
      <div class="item-content" @click="linkToTransfer">
        <div class="image">
          <img src="../../../../assets/User/user2.png" alt="" />
        </div>
        <div class="bio">
          <div class="name">Samuel Suhi</div>
          <div class="phone-number">+62 813-8492-9994</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Transfer',
  data() {
    return {}
  },
  methods: {
    linkToTransfer() {
      this.$router.push({ path: '/home/InputTransfer' })
    }
  }
}
</script>

<style scoped>
.transfer {
  border: 1px solid #ffffff;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  height: 130vh;
  font-family: 'Nunito Sans', sans-serif;
}

.transfer .title {
  /* border: 1px solid black; */
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3a3d42;

  margin: 30px 20px 20px 20px;
}

.transfer .content {
  /* border: 1px solid black; */

  margin: 25px 25px 25px 25px;
}

.transfer .search-content {
  border: none;
  width: 100%;
  height: 80px;

  margin-bottom: 20px;
}

.transfer .search-content i {
  position: absolute;
  top: 100px;
  margin-left: 20px;
  font-size: 20px;
  color: #a9a9a9;
}

.transfer .search-content input {
  border: none;
  width: 100%;
  height: 55px;
  background: rgba(58, 61, 66, 0.1);
  border-radius: 12px;

  padding-left: 50px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  /* identical to box height, or 144% */

  color: rgba(58, 61, 66, 0.4);
}

.transfer .item-content {
  /* border: 1px solid black; */
  height: 90px;

  display: flex;
  align-items: center;
  padding: 0px 20px 0px 20px;
  margin-bottom: 20px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  cursor: pointer;
}

.transfer .item-content:hover {
  background: rgba(0, 0, 0, 0.05);
}

.transfer .item-content .image {
  /* border: 1px solid black; */
  flex: 0.4;
}

.transfer .item-content .bio {
  /* border: 1px solid black; */
  flex: 4;

  display: flex;
  flex-direction: column;
  margin: 2px 0px 2px 15px;
  justify-content: space-between;
}

.transfer .item-content .bio .name {
  /* border: 1px solid black; */

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  color: #4d4b57;
}

.transfer .item-content .bio .phone-number {
  /* border: 1px solid black; */

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  color: #7a7886;
}
</style>
