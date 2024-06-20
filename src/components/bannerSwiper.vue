<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Autoplay, EffectFade } from 'swiper/modules'
    import 'swiper/css';
    import 'swiper/css/effect-fade';
</script>

<template>
    <swiper :modules="[Autoplay, EffectFade]" :slides-per-view="1" loop autoplay effect="fade"
        fadeEffect="{ crossFade: true }">
        <swiper-slide>
            <div class="item">
                <div class="swiper01 innerImg"></div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="item">
                <div class="swiper02 innerImg"></div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="item">
                <div class="swiper03 innerImg"></div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="item">
                <div class="swiper04 innerImg"></div>
            </div>
        </swiper-slide>
    </swiper>
    <div class="bannnerText">
        <h1 class="title">
            Pet Web
        </h1>
        <p class="content">
            Until one has loved an animal, a part of one's soul remains unawakened.
            <br />Animals are such agreeable friends - they ask no questions; they pass no criticisms.
            <br />The purity of a person's heart can be quickly measured by how they regard animals.
        </p>
    </div>
</template>

<style scoped>
    .item .innerImg {
        width: 100%;
        padding-top: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-color: #1c1c1c;
    }

    .swiper01{
        background-image: url(/images/img/index/index_banner01.jpg);
    }

    .swiper02{
        background-image: url(/images/img/index/index_banner02.jpg);
    }

    .swiper03{
        background-image: url(/images/img/index/index_banner03.jpg);
    }

    .swiper04{
        background-image: url(/images/img/index/index_banner04.jpg);
    }

    .bannnerText {
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        background-color: rgba(49, 49, 49, 0.8);
        z-index: 10;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;
    }

    .bannnerText h1,
    .bannnerText p {
        color: #fff;
    }

    .bannnerText h1 {
        font-size: 5rem;
        font-family: 'Times New Roman', Times, serif;
    }

    .bannnerText h1::after {
        content: '';
        position: absolute;
        bottom: 20%;
        left: 50%;
        transform: translateX(-50%);
        width: 2.5%;
        height: 2px;
        background-color: #fff;
    }

    @media screen and (max-width:768px) {
        .bannnerText h1 {
            font-size: 4rem;
        }

        .bannnerText h1::after {
            bottom: 10%;
            width: 25px;
        }

        .bannnerText p{
            font-size: .85rem;
        }
    }
</style>