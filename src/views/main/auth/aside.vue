<template>
    <div>
        <h5 class="color" style="margin-left:80px">Zwallet</h5>
            <div class="img-wrapper">
                    <img src="../../../assets/Group 57.svg">
            </div>
            <div class="text-container" style="margin-left:80px;">
                <h5 class="color mb-3">App that Covering Banking Needs.</h5>
                <p style="color: rgba(255, 255, 255, 0.8);">Zwallet is an application that focussing in banking needs for all users
                        in the world. Always updated and always following world trends.
                        5000+ users registered in Zwallet everyday with worldwide
                        users coverage.
                </p>
            </div>
    </div>
</template>

<script>
export default {
  name: 'aside'
}
</script>

<style scoped>
.color { color: white;}
.img-wrapper {
    margin: auto;
    object-fit: cover;
}
.img-wrapper img {
    width: 80%;
    height: 500px;
}
@media screen and (max-width: 992px) {
  .text-container {
      width: 60%;
  }
}
@media screen and (min-width: 992px) {
  .text-container {
      width: 400px;
  }
}
</style>
