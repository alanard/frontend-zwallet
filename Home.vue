<template>
  <div>
    <div class="header">
      <Navbar />
    </div>
    <div class="content">
      <AsideLeft />
      <div class="main-content">
        <!-- DropDown Order By Name || Price-->
        <div class="filter">
          <div class="dropdown">
            <a
              class="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Order By</a
            >

            <div
              class="dropdown-menu"
              aria-labelledby="dropdownMenuLink"
              v-custom="dropdown"
            >
              <a class="dropdown-item" @click="OrderName">A - Z</a>
              <a class="dropdown-item" @click="OrderNameDesc">Z - A</a>
              <a class="dropdown-item" @click="OrderPriceMin">cheapest price</a>
              <a class="dropdown-item" @click="OrderPricePlus"
                >expensive price</a
              >
            </div>
          </div>
        </div>
        <div class="card" v-for="product in products" :key="product.id">
          <Card
            :id="product.id"
            :image="product.image"
            :name="product.name"
            :price="product.price"
            :active="checkProductActive(product.id)"
            @select-product="setAddToCart(product)"
          />
        </div>
      </div>
      <AsideRight :dataCart="dataCart" :activ="activ" />
    </div>
  </div>
</template>

<script>
// import navbar from '../../../components/_base/Navbar'
import Navbar from '../../../components/_base/Navbar'
import AsideLeft from '../../../components/_base/Aside-left'
import AsideRight from '../../../components/_base/Aside-right'
import Card from '../../../components/_base/Card'
// import axios from 'axios'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
    AsideLeft,
    AsideRight,
    Card,
    Navbar
  },
  data () {
    return {
      // products: [],
      dropdown: 'ThisIsDropdown',
      id: '',
      name: '',
      image: '',
      price: '',
      dataCart: [],
      activ: false
    }
  },
  methods: {
    checkProductActive (id) {
      return this.getCart.find((item) => {
        return item.id === id
      })
    },
    ...mapActions([
      'login',
      'getProducts',
      'getProductsByName',
      'getProductsByPriceMin',
      'getProductsByPricePlus',
      'getProductsByNameDesc'
    ]),
    // Langsung saja diextraks karena tidak akan diolah lai jdi tidak perlu buat function lagi
    ...mapMutations(['setAddToCart']),
    OrderName (e) {
      e.preventDefault()
      this.getProductsByName()
        .then((res) => {
          console.log(res)
          // this.products = res.data.result
        })
        .catch((err) => {
          console.log(err)
        })
    },
    OrderNameDesc (e) {
      e.preventDefault()
      this.getProductsByNameDesc()
        .then((res) => {
          console.log(res)
          // this.products = res.data.result
        })
        .catch((err) => {
          console.log(err)
        })
    },
    OrderPriceMin (e) {
      e.preventDefault()
      this.getProductsByPriceMin()
        .then((res) => {
          console.log(res)
          // this.products = res.data.result
        })
        .catch((err) => {
          console.log(err)
        })
    },
    OrderPricePlus (e) {
      e.preventDefault()
      this.getProductsByPricePlus()
        .then((res) => {
          console.log(res)
          // this.products = res.data.result
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    ...mapGetters({
      products: 'products',
      getCart: 'getCart'
    })
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
.navbar {
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
}

.content {
  /* border: 1px solid black; */
  display: flex;
  height: 100vh;
}

.main-content {
  /* border: 1px solid black; */
  background: rgba(190, 195, 202, 0.3);
  flex: 3.3;
  overflow-x: hidden;
}

.main-content::-webkit-scrollbar {
  display: none;
}

.main-content .card {
  border: 1px solid black;
  border: none;
  border-radius: 10px 10px 0 0;
  margin: 20px 30px 10px 30px;
  background: none;
  display: inline-block;
}

.filter {
  position: relative;
  left: 700px;
  margin-top: 10px;
}

/* Tampilan Tablet */
@media screen and (max-width: 768px) {
  .main-content .card {
    border: 1px solid black;
    border: none;
    border-radius: 10px 10px 0 0;
    margin-left: 10px;
    margin-right: 10px;
    background: none;
    display: inline-block;
  }
  .main-content {
    border: 1px solid black;
  }
  .filter {
    position: relative;
    left: 22px;
    margin-top: 15px;
  }
}

/* Tampilan Mobile */
@media screen and (max-width: 576px) {
  .main-content {
    /* border: 1px solid black; */
    background: rgba(190, 195, 202, 0.3);
    flex: 3.3;
    overflow-x: hidden;
  }
  .main-content .card {
    /* border: 1px solid black; */
    border: none;
    border-radius: 10px 10px 0 0;
    margin: 20px 30px 10px 60px;
    background: none;
    display: inline-block;
  }

  .filter {
    /* border: 1px solid black; */
    position: relative;
    left: 0;
    margin-top: 0;
    width: 305px;
    height: 40px;
  }
  .dropdown .btn {
    /* border: 1px solid black; */
    width: 305px;
    height: 40px;
  }
}
</style>
