<script setup>

</script>

<template>
    <section class="banner">

    </section>
</template>

<style scoped>
    .banner {
        width: 100%;
        min-height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-image: url(/images/img/findPet/findPet_banner.jpg);
    }

    @media screen and (max-width:768px) {
        .banner {
            background-image: url(/images/img/findPet/findPet_banner_m.jpg);
        }
    }
</style>