<template>
    <div class="global-preloader">
        <div class="load">
            <hr/><hr/><hr/><hr/>
        </div>
    </div>
</template>

<script>
export default {

};
</script>


<style lang="scss" scoped>
    .global-preloader{
        background: #fff;
        opacity: 1;
        overflow: hidden;
        position: fixed;
        z-index: 9999;
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        right:0;
        bottom:0;
    }
    .load{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);
        /*change these sizes to fit into your project*/
        width:100px;
        height:100px;
    }
    .load hr{border:0;margin:0;width:40%;height:40%;position:absolute;border-radius:50%;animation:spin 2s ease infinite}

    .load :first-child{background:#232323;animation-delay:-1.5s}
    .load :nth-child(2){background:#727272;animation-delay:-1s}
    .load :nth-child(3){background:#F2EDE3;animation-delay:-0.5s}
    .load :last-child{background:#000}

    @keyframes spin{
        0%,100%{transform:translate(0)}
        25%{transform:translate(160%)}
        50%{transform:translate(160%, 160%)}
        75%{transform:translate(0, 160%)}
    }
</style>
