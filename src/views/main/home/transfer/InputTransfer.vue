<template>
  <div class="input-transfer">
    <div class="title">Transfer Money</div>
    <div class="content">
      <div class="item-content">
        <div class="image">
          <img :src="getReceiver[0].image" alt="" />
        </div>
        <div class="bio">
          <div class="name">{{ getReceiver[0].username}}</div>
          <div class="phone-number">{{ getReceiver[0].phoneNumber }}</div>
        </div>
      </div>
      <div class="title-content">
        Type the amount you want to transfer and then <br />
        press continue to the next steps.
      </div>
      <div class="transfer-total"><input type="number" v-model="amount" placeholder="0.00" /></div>
      <div class="available-transfer">{{ get_user_login.balance }} Available</div>
      <div class="notes">
        <i class="fas fa-pen"></i
        ><input type="text" v-model="notes" placeholder="Add some notes" />
        <hr />
      </div>
      <div class="button btn btn-primary" @click="showModalPin">
        Continue
      </div>
    </div>
    <ModalPin @send="Transfer" @close-modal="showModalPin" v-show="isShow"/>
  </div>
</template>

<script>
import axios from 'axios'
import ModalPin from '../../../../components/_base/ModalPin'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'InputTransfer',
  data() {
    return {
      notes: '',
      amount: '',
      isShow: false
    }
  },
  components: {
    ModalPin
  },
  methods: {
    ...mapActions(['getUserLogin']),
    showModalPin() {
      this.isShow = !this.isShow
    },
    linkConfirmationtransfer() {
      this.$router.push({ path: '/home/confirmationtransfer' })
    },
    Transfer() {
      this.TransactionIn()
      this.TransactionOut()
      this.balanceIn()
      this.balanceOut()
    },
    TransactionOut() {
      axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/transaction`, {
        userId: this.get_user_login.userId,
        senderId: this.get_user_login.userId,
        senderName: this.get_user_login.username,
        receiverId: this.getReceiver[0].userId,
        receiverName: this.getReceiver[0].username,
        amount: this.amount,
        statusId: '1',
        notes: this.notes
      })
        .then((res) => {
          console.log(res.data.result)
        }).catch((err) => {
          console.log(err)
        })
    },
    TransactionIn() {
      axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/transaction`, {
        userId: this.getReceiver[0].userId,
        senderId: this.get_user_login.userId,
        senderName: this.get_user_login.username,
        receiverId: this.getReceiver[0].userId,
        receiverName: this.getReceiver[0].username,
        amount: this.amount,
        statusId: '1',
        notes: this.notes
      })
        .then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
    },
    balanceSender() {
      return this.get_user_login.balance - this.amount
    },
    balanceReceiver() {
      const balanceReceiver = parseInt(this.getReceiver[0].balance) + parseInt(this.amount)
      console.log(balanceReceiver)
      return balanceReceiver
    },
    balanceIn() {
      axios.patch(`${process.env.VUE_APP_BASE_URL}/api/v1/user/balance/${this.getReceiver[0].userId}`, {
        balance: this.balanceReceiver()
      })
    },
    balanceOut() {
      axios.patch(`${process.env.VUE_APP_BASE_URL}/api/v1/user/balance/${this.get_user_login.userId}`, {
        balance: this.balanceSender()
      })
    }
  },
  computed: {
    ...mapGetters(['getReceiver', 'get_user_login'])
  },
  mounted() {
    this.getUserLogin()
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

.input-transfer .item-content .image img {
  /* border: 1px solid black; */
  height: 60px;
  width: 60px;

  border-radius: 10px;
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
