<template>
    <div>
        <div class="container">
            <div class="card-head pt-5 pl-4">
                <h5>Change Password</h5>
                <p class="text-wrapper">
                    You must enter your current password and then type your new password twice.
                </p>
            </div>
            <div class="card-body">
                <div class="input-wrapper">
                    <form>
                        <div class="form-group">
                            <div class="input-group">
                                <i class="satu fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                                <input :type="type" placeholder="Current password" required>
                                <div class="input-group-append" style="margin-left:-20px">
                                    <div :class="{active:active}" @click="show">
                                        <i class="dua fa fa-eye" v-show="display"></i>
                                        <i v-show="!display" class="dua fa fa-eye-slash"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <i class="satu fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                                <input :type="type2" placeholder="New password" required>
                                <div class="input-group-append" style="margin-left:-20px">
                                    <div @click="show2">
                                        <i class="dua fa fa-eye" v-show="display2"></i>
                                        <i v-show="!display2" class="dua fa fa-eye-slash"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <i class="satu fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                                <input :type="type3" placeholder="Repeat password" required>
                                <div class="input-group-append" style="margin-left:-20px">
                                    <div @click="show3">
                                        <i class="dua fa fa-eye" v-show="display3"></i>
                                        <i v-show="!display3" class="dua fa fa-eye-slash"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-block">Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'changePw',
  data() {
    return {
      type: 'password',
      type2: 'password',
      type3: 'password',
      active: false,
      pw: true,
      display: true,
      display2: true,
      display3: true
    }
  },
  methods: {
    show() {
      this.type = this.type === 'password' ? 'text' : 'password'
      this.active = !this.active
      this.display = !this.display
    },
    show2() {
      this.type2 = this.type2 === 'password' ? 'text' : 'password'
      this.active = !this.active
      this.display2 = !this.display2
    },
    show3() {
      this.type3 = this.type3 === 'password' ? 'text' : 'password'
      this.active = !this.active
      this.display3 = !this.display3
    }
  }

}
</script>

<style scoped>
.container {
    width: 100%;
    height: 130vh;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
.text-wrapper {
    width: 45%;
}

.input-wrapper {
  margin: auto;
  width: 70%;
  padding: 10px;
}
.form-group {
    margin: 70px 0;
}
input:focus {
    outline: none;
}
input {
    width: 100%;
    padding-left: 30px;
}
i.satu {
    position: absolute;
    color:  rgba(169, 169, 169, 0.6);
}
i.dua {
    float: right;
    cursor: pointer;
}
input[type=text] {
  border: none;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
}
input[type=text]:focus + i {
  border: none;
  color: dodgerblue;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
}
input[type=password] {
  border: none;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
}
.btn {
    height: 57px;
    background: #DADADA;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
}
</style>
