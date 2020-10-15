<template>
  <div class="modal-notification">
    <div class="title">Income</div>
    <div class="income1">
      <div class="income" v-for="history in getTransactionIn" :key="history.transactionId">
        <div class="image">
          <i class="fas fa-arrow-down"></i>
        </div>
        <div class="content">
          <div class="transfer-to">Transfered from {{history.senderName}}</div>
          <div class="count-money">Rp {{history.amount}}</div>
        </div>
      </div>
    </div>
    <!-- ============================================================================ -->
    <!-- this week -->
    <div class="title">Expense</div>
    <div class="expense">
      <div class="income" v-for="(history, index) in getTransactionOut" :key="index">
        <div class="image">
          <i class="fas fa-arrow-up"></i>
        </div>
        <div class="content">
          <div class="transfer-to">Transfer to {{history.receiverName}}</div>
          <div class="count-money">Rp {{history.amount}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ModalNotification',
  computed: {
    ...mapGetters({
      getTransactionIn: 'get_transaction_in',
      getTransactionOut: 'get_transaction_out'
    })
  },
  methods: {
    ...mapActions(['getTransactionInById', 'getTransactionOutById'])
  },
  mounted() {
    this.getTransactionInById()
    this.getTransactionOutById()
  }
}
</script>

<style scoped>
.income1 {
  overflow: auto;
  width: 100%;
  height: 250px;
}
.expense {
  overflow: auto;
  width: 100%;
  height: 250px;
}
.modal-notification {
  /* border: 1px solid black; */
  height: inherit;
  width: 420px;
  z-index: 10;
  background: #ffffff;
  box-shadow: 0px 0px 70px rgba(99, 99, 99, 0.15);
  border-radius: 20px;
  padding-bottom: 40px;

  position: absolute;
  right: 115px;
  top: 120px;
}

.modal-notification .title {
  /* border: 1px solid black; */

  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  /* identical to box height, or 169% */

  color: #7a7886;
  margin: 20px 30px 0px 30px;
}

.modal-notification .income {
  /* border: 1px solid black; */
  margin: 20px 30px 0px 30px;
  height: 80px;

  display: flex;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

.income .image {
  /* border: 1px solid black; */
  flex: 1;
  margin-top: 15px;
}

.income .image i {
  font-size: 25px;
  margin-left: 30px;
  margin-top: 3px;
}

.income .image .fa-arrow-down {
  color: #4cedb3;
}

.income .image .fa-arrow-up {
  color: #ff5b37;
}

.income .content {
  /* border: 1px solid black; */
  flex: 4.5;
  margin: auto;
}

.income .content .transfer-to {
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #7a7a7a;

  margin-bottom: 8px;
}

.income .content .count-money {
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  color: #43484f;
}
</style>
