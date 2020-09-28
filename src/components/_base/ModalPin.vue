<template>
  <div class="modal-pin">
    <div class="title">
      Enter PIN to Transfer
      <i class="fas fa-times" @click="$emit('close-modal')"></i>
    </div>
    <div class="title-content">
      Enter your 6 digits PIN for confirmation to <br />
      continue transferring money.
    </div>
    <div class="content">
      <input type="text" placeholder="___" />
      <input type="text" placeholder="___" />
      <input type="text" placeholder="___" />
      <input type="text" placeholder="___" />
      <input type="text" placeholder="___" />
      <input type="text" placeholder="___" />
    </div>
    <button class="btn btn-primary" @click="linkToSuccess">Continue</button>
  </div>
</template>

<script>
export default {
  name: 'ModalPin',
  methods: {
    linkToSuccess() {
      this.$router.push({ path: '/home/transfersuccess' })
    }
  }
}
</script>

<style scoped>
.modal-pin {
  /* border: 1px solid black; */
  font-family: 'Nunito Sans', sans-serif;
  position: fixed;
  top: 100px;
  left: 580px;
  width: 503px;
  height: 417px;

  background: #ffffff;
  box-shadow: 0px 4px 200px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
}

.modal-pin .title {
  /* border: 1px solid black; */
  margin: 30px 30px 30px 30px;

  display: flex;
  justify-content: space-between;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  /* Zwallet/Dark */

  color: #3a3d42;
}

.modal-pin .title-content {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  /* or 187% */

  color: rgba(58, 61, 66, 0.6);
  margin: 30px 30px 30px 30px;
}

.modal-pin .title i {
  font-size: 25px;
}

.modal-pin .content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0px 10px 0px 10px;
}

.modal-pin .content input {
  height: 60px;
  width: 53px;

  background: #ffffff;
  /* Grey/60% */

  border: 1px solid rgba(169, 169, 169, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
  border-radius: 10px;
  text-align: center;
  padding-top: 10px;
  font-size: 40px;

  margin-top: 20px;
}

.modal-pin .btn {
  margin-top: 80px;
  margin-left: 330px;
  width: 140px;
  height: 50px;

  background: #6379f4;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
}
</style>
