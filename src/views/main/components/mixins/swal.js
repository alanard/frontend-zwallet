export default {
  methods: {
    success(position, icon, title) {
      this.$swal({
        position: position,
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1800
      })
    },
    failed(text) {
      this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: text
      })
    },
    confirmSwal(title, desc, icon, cb) {
      this.$swal({
        title: title,
        text: desc,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.value) {
          return cb()
        }
      })
    },
    confirmDel(cb) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(result => {
        if (result.value) {
          this.$swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          return cb()
        }
      })
    }
  }
}
