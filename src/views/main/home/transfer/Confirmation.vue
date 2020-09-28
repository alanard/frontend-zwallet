<template>
  <div class="confirmation-transfer">
    <div class="title">Transfer To</div>
    <div class="content">
      <div class="item-content">
        <div class="image">
          <img src="../../../../assets/User/user2.png" alt="" />
        </div>
        <div class="bio">
          <div class="name">Samuel Suhi</div>
          <div class="phone-number">+62 813-8492-9994</div>
        </div>
      </div>
      <!-- Body -->
      <div class="title-detail">Details</div>
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
      <div class="button btn btn-primary" @click="ToggleModalPin">Continue</div>
    </div>
    <!-- Modal Pin -->
    <ModalPin v-show="isShowModalPin" @close-modal="ToggleModalPin" />
  </div>
</template>

<script>
import ModalPin from '../../../../components/_base/ModalPin'
export default {
  name: 'Confirmation',
  data() {
    return {
      isShowModalPin: false
    }
  },
  components: {
    ModalPin
  },
  methods: {
    ToggleModalPin() {
      this.isShowModalPin = !this.isShowModalPin
    }
  }
}
</script>

<style scoped>
.confirmation-transfer {
  border: 1px solid #ffffff;
  height: 130vh;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
}

.confirmation-transfer .title {
  /* border: 1px solid black; */
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3a3d42;

  margin: 30px 20px 20px 20px;
}

.confirmation-transfer .content {
  /* border: 1px solid black; */

  margin: 25px 25px 25px 25px;
}

.confirmation-transfer .content .title-content {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 30px;
  /* identical to box height */

  /* Zwallet/Dark */

  color: #3a3d42;
}

.confirmation-transfer .item-content {
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

.confirmation-transfer .item-content .image {
  /* border: 1px solid black; */
  flex: 0.4;
}

.confirmation-transfer .item-content .bio {
  /* border: 1px solid black; */
  flex: 4;

  display: flex;
  flex-direction: column;
  margin: 2px 0px 2px 15px;
  justify-content: space-between;
}

.confirmation-transfer .item-content .bio .name {
  /* border: 1px solid black; */

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  color: #4d4b57;
}

.confirmation-transfer .item-content .bio .phone-number {
  /* border: 1px solid black; */

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  color: #7a7886;
}

/* ============================================================ */
/* Content Detail */
.confirmation-transfer .title-detail {
  /* border: 1px solid black; */
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 20px;

  color: #3a3d42;
}

.confirmation-transfer .item-body {
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

.confirmation-transfer .item-body .detail-body {
  /* border: 1px solid black; */
  flex: 4;

  display: flex;
  flex-direction: column;
  margin: 2px 0px 2px 15px;
  justify-content: space-between;
}

.confirmation-transfer .item-body .detail-body .title-body {
  /* border: 1px solid black; */

  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  color: #7a7886;
}

.confirmation-transfer .item-body .detail-body .total {
  /* border: 1px solid black; */
  margin-top: 5px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height */

  color: #514f5b;
}

/* Button */
.confirmation-transfer .content .button {
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
