<template>
  <div>
    <!-- Button trigger modal -->
    <!-- Tombol nya cuman buat test aja mang, nanti bisa bisa disambungin ke page yang bersangkutan pake emit -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Launch demo modal
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Enter PIN to Transfer
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="title-body">
              Enter your 6 digits PIN for confirmation to <br />
              continue transferring money.
            </div>
            <div class="content-body">
              <!-- ========================== -->
              <!-- Disini Tempat Input Pin nya, Tolong diisi ya mang biar sama kaya punya mamang di login -->
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Continue</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalPin'
}
</script>

<style scoped>
.modal-dialog {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  overflow: hidden;

  margin-top: 160px;
}

.modal-body .title-body {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  /* or 187% */

  color: rgba(58, 61, 66, 0.6);
}

.modal-footer .btn {
  background: #6379f4;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;

  width: 120px;
  height: 45px;
}
</style>
