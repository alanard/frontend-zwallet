<template>
    <div>
        <div class="pin-wrapper">
            <div class="pin-head pt-5 pl-3">
                <h5>Change PIN</h5>
                <p class="text-wrapper">
                    Enter your current 6 digits Zwallet PIN below to continue to the next steps.
                </p>
            </div>
            <div class="pin-body">
                <div class="input-wrapper">
                    <form>
                        <div class="input-group d-flex justify-content-around my-5">
                            <input type="number" onKeyPress="if(this.value.length==1) return false;">
                            <input type="number" onKeyPress="if(this.value.length==1) return false;">
                            <input type="number" onKeyPress="if(this.value.length==1) return false;">
                            <input type="number" onKeyPress="if(this.value.length==1) return false;">
                            <input type="number" onKeyPress="if(this.value.length==1) return false;">
                            <input type="number" onKeyPress="if(this.value.length==1) return false;">
                        </div>
                        <div class="submit mx-3">
                            <button type="submit" class="btn">Continue</button>
                        </div>
                    </form>
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
.pin-wrapper {
    width: 100%;
    height: 100vh;
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
    margin-top: 100px;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
}
input[type=number] {
    height: 65px;
    width: 10%;
    font-size: 140%;
    font-weight: bold;
    text-align: center;
    border: 1px solid rgba(169, 169, 169, 0.6);
    box-sizing: border-box;
    box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
    border-radius: 10px;
    outline-color: cadetblue;
}
.btn {
    text-align: center;
    background: #DADADA;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
    width: 100%;
    height: 57px;
}
</style>
