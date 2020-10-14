<template>
         <div class="modal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Update User</h5>
                  <button type="button" class="close" aria-label="Close" data-dismiss="modal">
                    <span aria-hidden="true" @click="$emit('close')">&times;</span>
                  </button>
                </div>
                <div class="modal-body p-4">
                  <form>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-3 col-form-label h6">Username</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control shadow" v-model="data.username">
                        </div>
                    </div>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-3 col-form-label h6">First Name</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control shadow" v-model="data.firstName">
                        </div>
                    </div>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-3 col-form-label h6">Last Name</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control shadow" v-model="data.lastName">
                        </div>
                    </div>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-3 col-form-label h6">Photo</label>
                        <div class="col-sm-9">
                            <input type="file" class="form-control shadow" @change="onFileSelected">
                        </div>
                    </div>
                  </form>
                </div>
                 <div class="modal-footer">
                    <button type="submit" class="btn btn-primary btn-block" @click="$emit('fire-event')">Update</button>
                    <button type="button" class="btn btn-secondary btn-block" @click="$emit('close')">Cancel</button>
                 </div>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    onFileSelected(event) {
      this.data.image = event.target.files[0]
    }
  }
}
</script>

<style scoped>
    .modal {
        display: block;
        background: rgba(0, 0, 0, .6);
    }
</style>
