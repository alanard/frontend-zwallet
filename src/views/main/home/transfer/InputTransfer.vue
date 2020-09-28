<template>
  <div class="input-transfer">
    <div class="title">Transfer Money</div>
    <div class="content">
      <div class="item-content" @click="linkToTransfer">
        <div class="image">
          <img src="../../../../assets/User/user2.png" alt="" />
        </div>
        <div class="bio">
          <div class="name">Samuel Suhi</div>
          <div class="phone-number">+62 813-8492-9994</div>
        </div>
      </div>
      <div class="title-content">
        Type the amount you want to transfer and then <br />
        press continue to the next steps.
      </div>
      <div class="transfer-total"><input type="text" placeholder="0.00" /></div>
      <div class="available-transfer">Rp120.000 Available</div>
      <div class="notes">
        <i class="fas fa-pen"></i
        ><input type="text" placeholder="Add some notes" />
        <hr />
      </div>
      <div class="button btn btn-primary" @click="linkConfirmationtransfer">
        Continue
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputTransfer',
  data() {
    return {}
  },
  methods: {
    linkConfirmationtransfer() {
      this.$router.push({ path: '/home/confirmationtransfer' })
    }
  }
}
</script>

<style scoped>
.input-transfer {
  border: 1px solid #ffffff;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  height: 130vh;
  font-family: 'Nunito Sans', sans-serif;
}

.input-transfer .title {
  /* border: 1px solid black; */
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3a3d42;

  margin: 30px 20px 40px 20px;
}

.input-transfer .content {
  /* border: 1px solid black; */

  margin: 25px 25px 25px 25px;
}

.input-transfer .item-content {
  /* border: 1px solid black; */
  height: 90px;

  display: flex;
  align-items: center;
  padding: 0px 20px 0px 20px;
  margin-bottom: 20px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

.input-transfer .item-content .image {
  /* border: 1px solid black; */
  flex: 0.4;
}

.input-transfer .item-content .bio {
  /* border: 1px solid black; */
  flex: 4;

  display: flex;
  flex-direction: column;
  margin: 2px 0px 2px 15px;
  justify-content: space-between;
}

.input-transfer .item-content .bio .name {
  /* border: 1px solid black; */

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  color: #4d4b57;
}

.input-transfer .item-content .bio .phone-number {
  /* border: 1px solid black; */

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  color: #7a7886;
}

/* ============================================================ */
/* Content input */
.input-transfer .content .title-content {
  /* border: 1px solid black; */
  margin-top: 50px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  color: #7a7886;
}

.input-transfer .content .transfer-total input {
  border: none;
  outline: none;
  margin-top: 60px;
  height: 100px;
  width: 100%;

  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 56px;

  color: #b5bdcc;
}

.input-transfer .content .available-transfer {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #3a3d42;
  margin-top: 10px;

  text-align: center;
}

.input-transfer .content .notes input {
  border: none;
  margin-top: 30px;
  margin-left: 40%;
  transform: translateX(-50%);

  padding-left: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  /* identical to box height, or 144% */

  color: rgba(169, 169, 169, 0.8);
}

.input-transfer .content .notes input:focus {
  outline: none;
}

.input-transfer .content .notes hr {
  width: 43%;
  border: 1.5px solid rgba(169, 169, 169, 0.6);
}

.input-transfer .content .notes i {
  position: relative;
  left: 220px;

  z-index: 10;
  font-size: 16px;
  color: rgba(172, 165, 165, 0.8);
}

.input-transfer .content .button {
  position: relative;
  top: 30px;
  left: 630px;
  width: 130px;
  height: 46px;
  padding: 10px;

  background: #6379f4;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
}
</style>
