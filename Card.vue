<template>
  <div>
    <div class="image-card" :class="active ? 'active' : ''">
      <img :src="image" alt @click="$emit('select-product')" />
    </div>
    <div class="container">
      <div class="title-card id">{{ id }}</div>
      <div class="title-card">{{ name }}</div>
      <div class="price-card">Rp. {{ price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['name', 'price', 'id', 'image', 'active']
}
</script>

<style scoped>
.container {
  /* border: 1px solid black; */
  margin-left: -10px;
  width: 230px;
}
.image-card {
  /* border: 1px solid black; */
  width: 200px;
  height: 160px;
  border-radius: 10px 10px 0 0;
  margin-left: 10px;
  cursor: pointer;
  margin-bottom: 20px;
}
.image-card img {
  width: 220px;
  height: 180px;
}
.title-card {
  /* border: 1px solid black; */
  font-family: 'Poppins', sans-serif;
  position: relative;
  font-weight: bold;
  top: 3px;
  font-size: 18px;
  left: 5px;
  width: 220px;
}
.title-card.id {
  display: none;
}
.price-card {
  /* border: 1px solid black; */
  position: relative;
  top: 5px;
  left: 5px;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
}

.active {
  filter: brightness(50%);
  /* background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/logo-img/logout.png'); */
  /* background-repeat: no-repeat; */
  background-size: cover;
}

/* Tampilan tablet */
@media screen and (max-width: 768px) {
  .image-card {
    border: 1px solid black;
    width: 130px;
    height: 100px;
    margin-bottom: 5px;
  }
  .image-card img {
    border: 1px solid black;
    width: 130px;
    height: 100px;
    border-radius: 10px 10px 0 0;
  }
  .price-card {
    top: 6px;
    /* left: -12px; */
    font-size: 18px;
  }
  .title-card {
    top: 6px;
    font-size: 17px;
  }
}

/* Tampilan mobile */

@media screen and (max-width: 576px) {
  .image-card {
    /* border: 1px solid black; */
    width: 180px;
    height: 140px;
    border-radius: 10px 10px 0 0;
    margin-left: 10px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .image-card img {
    width: 180px;
    height: 140px;
  }
  .title-card {
    /* border: 1px solid black; */
    font-family: 'Poppins', sans-serif;
    position: relative;
    font-weight: bold;
    font-size: 18px;
    top: -10px;
    left: 5px;
    width: 180px;
  }
  .title-card.id {
    display: none;
  }
  .price-card {
    /* border: 1px solid black; */
    position: relative;
    top: -8px;
    left: 5px;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    width: 180px;
  }

  .active {
    filter: brightness(50%);
    /* background-repeat: no-repeat; */
    background-size: cover;

    width: 200px;
    height: 160px;
  }
}
</style>
