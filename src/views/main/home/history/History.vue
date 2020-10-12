<template>
  <div>
    <div class="container">
      <div class="card-head pt-4">
        <h4 class="mx-3">Transaction History</h4>
      </div>
      <div class="card-body">
        <div
          class="transaction d-flex"
          v-for="(history, index) in getTransaction"
          :key="index"
        >
          <div class="img-wrapper">
            <img src="../../../../assets/User/user1.png" />
          </div>
          <div class="info-wrapper mx-3">
            <h6 v-if="getTransactionByUserId === history.senderid">
              {{ history.senderName }}
            </h6>
            <h6 v-else>{{ history.receiverName }}</h6>
            <div class="subinfo d-flex justify-content-between">
              <p>{{ history.notes }}</p>
              <span>{{ history.amount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'History',
  computed: {
    ...mapGetters({
      getTransaction: 'get_transaction'
    })
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
}
.info-wrapper {
  flex-grow: 2;
}
</style>
