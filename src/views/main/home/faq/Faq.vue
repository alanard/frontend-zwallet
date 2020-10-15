<template>
  <div class="faq">
    <div class="title">How To Top Up</div>
    <div class="content">
      <div class="number-content">1</div>
      <div class="item-content">
        Go to the nearest ATM or you can use E-Banking.
      </div>
    </div>
    <div class="content">
      <div class="number-content">2</div>
      <div class="item-content">
        Type your security number on the ATM or E-Banking.
      </div>
    </div>
    <div class="content">
      <div class="number-content">3</div>
      <div class="item-content">Select “Transfer” in the menu</div>
    </div>
    <div class="content">
      <div class="number-content">4</div>
      <div class="item-content">
        Type the virtual account number that we provide you at the top.
      </div>
    </div>
    <div class="content">
      <div class="number-content">5</div>
      <div class="item-content">
        Type the amount of the money you want to top up.
      </div>
    </div>
    <div class="content">
      <div class="number-content">6</div>
      <div class="item-content">Read the summary details</div>
    </div>
    <div class="content">
      <div class="number-content">7</div>
      <div class="item-content">Press transfer / top up</div>
    </div>
    <div class="content">
      <div class="number-content">8</div>
      <div class="item-content">
        You can see your money in Zwallet within 3 hours.
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Faq',
  methods: {
    ...mapActions(['getPhoneNumber', 'getUserLogin'])
  },
  mounted() {
    this.getPhoneNumber()
    this.getUserLogin()
  }
}
</script>

<style scoped>
.faq {
  /* border: 1px solid black; */
  font-family: 'Nunito Sans', sans-serif;

  height: 130vh;
  overflow: scroll;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
}

.faq::-webkit-scrollbar {
  display: none;
}

.faq .title {
  /* border: 1px solid black; */
  font-weight: bold;
  font-size: 18px;
  margin: 25px 25px 30px 25px;
}

.faq .content {
  /* border: 1px solid black; */
  margin: 25px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  display: flex;
  align-items: center;
}

.faq .content .number-content {
  /* border: 1px solid black; */
  flex: 0.2;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  /* Zwallet/Primary */

  color: #6379f4;

  margin-left: 20px;
}

.faq .content .item-content {
  /* border: 1px solid black; */
  flex: 4;
  font-weight: normal;
  font-size: 16px;

  color: #7a7886;
}
</style>
