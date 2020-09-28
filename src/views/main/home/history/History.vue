<template>
    <div>
        <div class="container">
            <div class="card-head pt-4">
                <h4 class="mx-3">Transaction History</h4>
            </div>
            <div class="card-body">
                <div class="transaction d-flex my-4">
                    <div class="img-wrapper">
                        <img src="../../../../assets/Rectangle 33.svg">
                    </div>
                    <div class="info-wrapper mx-3">
                        <h6>Netflix</h6>
                        <div class="subinfo d-flex justify-content-between">
                            <p>Subscription</p>
                            <span>-Rp149.000</span>
                        </div>
                    </div>
                </div>
                <div class="transaction d-flex">
                    <div class="img-wrapper">
                        <img src="../../../../assets/Rectangle 33.svg">
                    </div>
                    <div class="info-wrapper mx-3">
                        <h6>Netflix</h6>
                        <div class="subinfo d-flex justify-content-between">
                            <p>Subscription</p>
                            <span>-Rp149.000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
.info-wrapper {
    flex-grow: 2;
}
</style>
