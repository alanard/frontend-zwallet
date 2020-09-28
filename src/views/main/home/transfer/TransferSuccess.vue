<template>
  <div class="transfer-succes">
    <div class="status">
      <div class="image">
        <img src="../../../../assets/Logos/success.png" alt="" />
      </div>
      <div class="title">Transfer Success</div>
    </div>
    <div class="item-body">
      <div class="detail-body">
        <div class="title-body">Amount</div>
        <div class="total">Rp100.000</div>
      </div>
    </div>
    <div class="item-body">
      <div class="detail-body">
        <div class="title-body">Balance Left</div>
        <div class="total">Rp20.000</div>
      </div>
    </div>
    <div class="item-body">
      <div class="detail-body">
        <div class="title-body">Date & Time</div>
        <div class="total">May 11, 2020 - 12.20</div>
      </div>
    </div>
    <div class="item-body">
      <div class="detail-body">
        <div class="title-body">Notes</div>
        <div class="total">For buying some socks</div>
      </div>
    </div>
    <div class="transfer-to">Transfer to</div>
    <!-- User -->
    <div class="user">
      <div class="image">
        <img src="../../../../assets/User/user2.png" alt="" />
      </div>
      <div class="bio">
        <div class="name">Samuel Suhi</div>
        <div class="phone-number">+62 813-8492-9994</div>
      </div>
    </div>
    <div class="button">
      <button class="btn btn-primary share">
        <i class="fas fa-share-alt"></i>
      </button>
      <button class="btn btn-primary download">
        <i class="fas fa-download"></i>Download PDF
      </button>
      <button class="btn btn-primary back" @click="LinkToDashboard">
        Back to Home
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransferSuccess',
  methods: {
    LinkToDashboard() {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style scoped>
.transfer-succes {
  border: 1px solid #ffffff;
  height: 130vh;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  overflow: scroll;
  font-family: 'Nunito Sans', sans-serif;
}

.transfer-succes::-webkit-scrollbar {
  display: none;
}

.transfer-succes .status {
  /* border: 1px solid black; */
  margin-top: 30px;
  margin-bottom: 30px;
}

.transfer-succes .status .image {
  /* border: 1px solid black; */
  margin: auto;
}

.transfer-succes .status .image img {
  /* border: 1px solid black; */
  margin-left: 50%;
  transform: translateX(-50%);
}

.transfer-succes .status .title {
  /* border: 1px solid black; */
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  margin-top: 20px;

  text-align: center;
  color: #4d4b57;
}

/* ========================================================================= */
/* Content */
.transfer-succes .item-body {
  /* border: 1px solid black; */
  height: 90px;

  display: flex;
  align-items: center;
  padding: 0px 20px 0px 20px;
  margin: 20px 30px 20px 30px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

.transfer-succes .item-body .detail-body {
  /* border: 1px solid black; */
  flex: 4;

  display: flex;
  flex-direction: column;
  margin: 2px 0px 2px 15px;
  justify-content: space-between;
}

.transfer-succes .item-body .detail-body .title-body {
  /* border: 1px solid black; */

  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  color: #7a7886;
}

.transfer-succes .item-body .detail-body .total {
  /* border: 1px solid black; */
  margin-top: 5px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height */

  color: #514f5b;
}

/* Tranfer to */
.transfer-succes .transfer-to {
  /* border: 1px solid black; */
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */
  margin: 20px 20px 20px 20px;
  color: #514f5b;
}

/* User */
.transfer-succes .user {
  /* border: 1px solid black; */
  height: 90px;

  display: flex;
  align-items: center;
  padding: 0px 20px 0px 20px;
  margin: 20px 20px 20px 20px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

.transfer-succes .user .image {
  /* border: 1px solid black; */
  flex: 0.4;
}

.transfer-succes .user .bio {
  /* border: 1px solid black; */
  flex: 4;

  display: flex;
  flex-direction: column;
  margin: 2px 0px 2px 15px;
  justify-content: space-between;
}

.transfer-succes .user .bio .name {
  /* border: 1px solid black; */

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  color: #4d4b57;
}

.transfer-succes .user .bio .phone-number {
  /* border: 1px solid black; */

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  color: #7a7886;
}
/* Button */
.transfer-succes .button {
  /* border: 1px solid black; */
  display: flex;
  justify-content: flex-end;
  margin: 60px 20px 40px 20px;
}

.transfer-succes .button .share {
  border: none;
  background: rgba(99, 121, 244, 0.37);
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  font-size: 20px;

  width: 50px;
  height: 50px;
}

.transfer-succes .button .share i {
  color: #3a3d42;
}

.transfer-succes .button .download {
  border: none;
  background: rgba(99, 121, 244, 0.37);
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  margin-left: 15px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  /* Zwallet/Primary */

  color: #6379f4;

  height: 50px;
  width: 200px;
}

.transfer-succes .button .download i {
  font-size: 20px;
}

.transfer-succes .button .back {
  background: #6379f4;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  margin-left: 15px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;

  height: 50px;
  width: 180px;
}
</style>
