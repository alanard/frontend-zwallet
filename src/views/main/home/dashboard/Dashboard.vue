<template>
  <div class="dashboard">
    <!-- ========================================================================= -->
    <!-- Navbar Dashboard -->
    <div class="nav-dashboard">
      <div class="item-left">
        <div class="status">Balance</div>
        <div class="saldo">Rp. {{ setBalance }}</div>
        <div class="phone-number">{{ get_user_phone_number }}</div>
      </div>
      <div class="item-right">
        <button class="btn btn-primary" @click="linkToTransfer">
          <i class="fas fa-arrow-up"></i> Transfer
        </button>
        <button class="btn btn-primary">
          <i class="fas fa-plus"></i> Top Up
        </button>
      </div>
    </div>
    <!-- ========================================================================= -->
    <!-- Main Dashboard -->
    <div class="main-dashboard">
      <!-- ================= -->
      <!-- Main Left -->
      <div class="main-left">
        <div class="income">
          <div class="item">
            <div><i class="fas fa-arrow-down"></i></div>
            <div class="title">Income</div>
            <!-- <div class="money">Rp2.120.000</div> -->
            <div class="money">Rp. {{setIncome}}</div>
          </div>
          <div class="item">
            <div><i class="fas fa-arrow-up"></i></div>
            <div class="title">Expense</div>
            <!-- <div class="money">Rp2.120.000</div> -->
            <div class="money">Rp {{setExpense}}</div>
          </div>
        </div>
        <div class="chart">
          <LineChart v-if="loaded" :chartData="chartData" :options="chartOptions" />
        </div>
      </div>
      <!-- ================= -->
      <!-- Main right -->
      <div class="main-right">
        <div class="transaction-history-title">
          <div class="title">Transaction History</div>
          <div class="see-all" @click="linkHistory">See all</div>
        </div>
        <h5>Transaction In</h5>
        <div class="transaction-wrapper">
          <div
            class="transaction-history"
            v-for="history in getTransactionIn"
            :key="history.transactionId"
          >
            <div class="people">
              <img :src="history.image" alt="" />
              <div class="bio">
                <div class="name">
                  {{ history.senderName }}
                </div>
                <div class="method">Transfer</div>
              </div>
            </div>
            <div class="total-method">
              <div class="method">{{ history.amount }}</div>
            </div>
          </div>
        </div>
        <h5>Transaction Out</h5>
        <div class="transaction-wrapper">
          <div
            class="transaction-history"
            v-for="(history, index) in getTransactionOut"
            :key="index"
          >
            <div class="people">
              <img :src="history.image" alt="" />
              <div class="bio">
                <div class="name">
                  {{ history.receiverName }}
                </div>
                <div class="method">Transfer</div>
              </div>
            </div>
            <div class="total-method">
              <div class="out">{{ history.amount }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LineChart from '../../../../components/_base/lineChart'
import axios from 'axios'
export default {
  name: 'Dashboard',
  components: {
    LineChart
  },
  data() {
    return {
      chartData: null,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      date: [],
      amount: [],
      loaded: false
    }
  },
  methods: {
    ...mapActions(['getTransactionInById', 'getTransactionOutById', 'getUserLogin', 'getPhoneNumber', 'incomeThisWeek', 'expenseThisWeek']),
    linkToTransfer() {
      this.$router.push({ path: '/home/transfer' })
    },
    linkHistory() {
      this.$router.push({ path: '/home/history' })
    }
  },
  computed: {
    ...mapGetters({
      getTransactionIn: 'get_transaction_in',
      getTransactionOut: 'get_transaction_out',
      getTransactionByUserId: 'get_user_login',
      getUserlogin: 'get_user_login',
      get_user_phone_number: 'get_user_phone_number',
      income: 'get_income',
      expense: 'get_expense'
    }),
    setIncome() {
      if (this.income.income === null) {
        return 0
      } else {
        return this.income.income
      }
    },
    setExpense() {
      if (this.expense.expense === null) {
        return 0
      } else {
        return this.expense.expense
      }
    },
    setBalance() {
      if (this.getUserlogin.balance === 0) {
        return 0
      } else {
        return this.getUserlogin.balance
      }
    }
  },
  mounted() {
    this.getTransactionInById()
    this.getTransactionOutById()
    this.getPhoneNumber()
    this.incomeThisWeek()
    this.expenseThisWeek()
    this.getUserLogin()
    const setChartData = () => {
      this.chartData = {
        labels: this.date,
        datasets: [
          {
            label: 'Amount',
            backgroundColor: '#6379F4',
            borderColor: '#6379F4',
            pointBackgroundColor: '#6379F4',
            borderWidth: 3,
            pointBorderColor: '#6379F4',
            data: this.amount
          }
        ]
      }
    }
    setChartData()
  },
  async created() {
    const { data } = await axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/transaction/week/${localStorage.getItem('id')}`)
    data.result.forEach(d => {
      console.log(d)
      this.date.push(d.days)
      this.amount.push(d.amount)
    })
    this.loaded = true
  }
}
</script>

<style scoped>
.transaction-wrapper {
  width: 100%;
  height: 250px;
  overflow: auto;
}

.total-method .out {
  color: red;
}
/* .dashboard {
  border: 1px solid black;
} */

/* ============================================================================= */
/* Nav-dashboard */
.dashboard .nav-dashboard {
  /* border: 1px solid black; */
  background: #6379f4;
  border-radius: 20px;

  display: flex;
}

/* Item left */
.nav-dashboard .item-left {
  /* border: 1px solid black; */
  flex: 3.2;

  margin: 20px 0px 20px 0px;
}
.status {
  /* border: 1px solid black; */
  font-weight: normal;
  font-size: 18px;
  margin-bottom: 10px;
  margin-left: 20px;

  color: #e0e0e0;
}
.saldo {
  /* border: 1px solid black; */
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 10px;
  margin-left: 20px;

  color: #ffffff;
}
.phone-number {
  /* border: 1px solid black; */
  font-weight: 600;
  font-size: 14px;
  margin-left: 20px;

  color: #dfdcdc;
}

/* Item right */
.nav-dashboard .item-right {
  /* border: 1px solid black; */
  flex: 1;
  margin: 30px 0px 30px 0px;

  display: flex;
  flex-direction: column;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item-right .btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;

  height: 50px;
  width: 160px;
}

/* ============================================================================= */
/* Main-dashboard */
.main-dashboard {
  /* border: 1px solid black; */
  margin-top: 20px;

  display: flex;
  box-sizing: border-box;
}

/* ============================================== */
/* Main-dashboard left */
.main-dashboard .main-left {
  /* border: 1px solid black; */
  flex: 1;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  margin-right: 20px;

  height: 100vh;
  display: flex;
  flex-direction: column;
}
/* Arrow money */
.main-left .income {
  /* border: 1px solid black; */
  flex: 1;

  display: flex;
}
.income .item {
  /* border: 1px solid black; */
  flex: 1;

  margin-left: 30px;
}
.income .item .title {
  font-weight: normal;
  font-size: 14px;
  margin-bottom: 10px;

  color: #6a6a6a;
}

.income .item .money {
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;

  color: #3a3d42;
}

.income .item .fa-arrow-down {
  color: #1ec15f;
  font-size: 25px;
  margin-bottom: 10px;
  margin-top: 25px;
}

.income .item .fa-arrow-up {
  color: #ff5b37;
  font-size: 25px;
  margin-bottom: 10px;
  margin-top: 25px;
}

/* Chart */
.main-left .chart {
  flex: 2;
}

/* ============================================== */
/* Main-dashboard right */
.main-dashboard .main-right {
  /* border: 1px solid black; */
  flex: 1;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 40px;
  height: 100vh;
}

.main-right .transaction-history-title {
  /* border: 1px solid black; */
  display: flex;

  margin-top: 30px;
  align-items: center;
}
.transaction-history-title .title {
  /* border: 1px solid black; */
  flex: 3;

  font-weight: bold;
  font-size: 18px;
  margin-left: 30px;
}
.transaction-history-title .see-all {
  /* border: 1px solid black; */
  flex: 1;

  font-weight: 600;
  font-size: 14px;
  color: #6379f4;
  cursor: pointer;
}

.main-right .transaction-history {
  /* border: 1px solid black; */
  margin-top: 40px;

  display: flex;
  box-sizing: border-box;
}

.transaction-history .people {
  /* border: 1px solid black; */

  flex: 2;

  display: flex;
  box-sizing: border-box;
}

.transaction-history img {
  /* border: 1px solid black; */
  width: 60px;
  height: 60px;
  margin-left: 25px;
}

.transaction-history .bio {
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 6px 0px 6px 20px;
}

.transaction-history .bio .name {
  font-weight: bold;
  font-size: 16px;

  color: #4d4b57;
}

.transaction-history .bio .method {
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  margin-top: 7px;

  color: #7a7886;
}

.transaction-history .total-method {
  /* border: 1px solid black; */

  flex: 1;
  font-weight: bold;
  font-size: 16px;

  color: #1ec15f;
  display: flex;
  align-items: center;
}
</style>
