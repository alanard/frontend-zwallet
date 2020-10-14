<template>
  <div>
    <div class="item-content" @click="pushDataReceiver">
        <div class="image">
          <img :src="image" alt="" />
        </div>
        <div class="bio">
          <div class="name">{{ username }}</div>
          <div class="phone-number">{{ phoneNumber }}</div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['username', 'image', 'userId', 'phoneNumber', 'balance'],
  methods: {
    ...mapMutations(['setReceiver', 'setReceiverNull']),
    pushDataReceiver() {
      this.setReceiverNull()
      this.setReceiver({
        username: this.username,
        image: this.image,
        balance: this.balance,
        userId: this.userId,
        phoneNumber: this.phoneNumber
      })
      this.$router.push({ path: '/home/InputTransfer' })
    }
  }
}
</script>

<style scoped>
.item-content {
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

.item-content:hover {
  background: rgba(0, 0, 0, 0.05);
}

.item-content .image {
  /* border: 1px solid black; */
  flex: 0.4;
}

.item-content .image img {
  width: 50px;
  height: 50px;
}

.item-content .bio {
  /* border: 1px solid black; */
  flex: 4;

  display: flex;
  flex-direction: column;
  margin: 2px 0px 2px 15px;
  justify-content: space-between;
}

.item-content .bio .name {
  /* border: 1px solid black; */

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  color: #4d4b57;
}

.item-content .bio .phone-number {
  /* border: 1px solid black; */

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  color: #7a7886;
}
</style>
