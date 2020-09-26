<template>
    <div>
        <div class="search-card p-4">
            <div class="search-head">
                <h4>Search Receiver</h4>
                <div class="input-group">
                    <i class="fa fa-lg fa-search" aria-hidden="true"></i>
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="search-body my-5">
                <div class="receiver-info d-flex my-3 p-3" v-for="(receiver, index) in receivers" :key="index">
                    <div class="img-wrapper pointer" @click="select">
                        <img src="../../../assets/Rectangle 33.svg">
                    </div>
                    <div class="info-wrapper ml-3">
                        <h6 class="pointer">{{receiver.name}}</h6>
                        <p class="pointer">{{receiver.phone}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      receivers: 'get_receiver'
    })
  },
  methods: {
    select () {
      this.$router.push('/transfer/input')
    }
  }
}
</script>

<style scoped>
.search-card {
    border: 1px solid black;
    height: 678px;
    width: 850px;
    margin: auto;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
.input-group input[type=text] {
    background: rgba(58, 61, 66, 0.1);
    border-radius: 12px;
    padding-left: 40px;
}
.input-group i {
    margin: 13px 10px;
    color: rgba(58, 61, 66, 0.4);
    position: absolute;
}
.receiver-info {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}
.pointer {
    cursor: pointer;
}
</style>
