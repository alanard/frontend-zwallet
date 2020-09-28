<template>
    <div>
        <div class="phone-wrapper">
            <div class="phone-head pt-5 pl-4">
                <div class="one" v-show="active">
                    <h5>Add Phone Number</h5>
                    <p class="text-wrapper my-4">
                        Add at least one phone number
                        for the transfer ID so you can
                        start transfering your money to another user.
                    </p>
                </div>
                <div class="two" v-show="!active">
                    <h5>Manage Phone Number</h5>
                    <p class="text-wrapper my-4">
                       You can only delete the phone number and then you must add another phone number.
                    </p>
                </div>
            </div>
            <div class="phone-body">
                <div class="one" v-show="active">
                    <form>
                        <div class="input-group">
                            <i class="fas fa-phone-alt satu"></i>
                            <input type="number" onKeyPress="if(this.value.length==13) return false;" placeholder="Enter your phone number">
                        </div>
                        <div class="submit">
                            <button type="submit" class="btn" @click.prevent="addPhone">Add Phone Number</button>
                        </div>
                    </form>
                </div>
                <div class="two" v-show="!active">
                    <div class="phone-card" v-for="(user, index) in users" :key="index">
                        <div class="content-group d-flex justify-content-between">
                            <h5>{{user.phone}}</h5>
                            <i class="far fa-trash-alt dua"></i>
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
  data() {
    return {
      active: true
    }
  },
  methods: {
    addPhone() {
      this.active = !this.active
    }
  },
  computed: {
    ...mapGetters({
      users: 'get_user'
    })
  }
}
</script>

<style scoped>
.phone-wrapper {
    width: 100%;
    height: 100vh;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
.text-wrapper {
    width: 45%;
}
i.satu {
    position: absolute;
}
i.dua {
    cursor: pointer;
}
.input-group, .submit {
    margin: auto;
    margin-top: 100px;
    padding-left: 120px;
    padding-right: 100px;
    /* border: 1px solid black; */
}
input:focus {
    outline: none;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
}
input[type=number] {
    width: 90%;
    padding-left: 40px;
    border: none;
    border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
}
.btn {
    width: 90%;
    height: 50px;
    background: #DADADA;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
    color: #88888F;
}
.phone-card {
    width: 90%;
    margin: auto;
    margin-top: 50px;
    height: 92px;
    padding: 33px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}
</style>
