<script setup>
    import {
        RouterLink
    } from 'vue-router';
</script>

<template>
    <nav class="navbar">
        <div class="pageLinkArea">
            <div class="item">
                <RouterLink class="pagelink" to="/about">關於我們</RouterLink>
            </div>
            <div class="item">
                <RouterLink class="pagelink" to="/Adoption">領養專區</RouterLink>
            </div>
            <div class="item">
                <RouterLink class="pagelink" to="/findPet">尋寵啟事</RouterLink>
            </div>
            <div class="item">
                <RouterLink class="pagelink" to="/">回首頁</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .navbar {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        position: fixed;
        top: 0%;
        left: 0%;
        margin: 0;
        padding: 0;
        background-color: #fff;
        z-index: 999;
    }

    .pageLinkArea {
        display: flex;
        width: 60%;
        justify-content: flex-end;
    }

    .pageLinkArea .item {
        width: calc(60% / 4);
        height: 52px;
        text-align: center;
    }

    .pageLinkArea .item .pagelink {
        font-size: .95rem;
        color: #333;
        line-height: 52px;
    }

    .pageLinkArea .item .pagelink::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 15%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        background-image: url(/images/link_icon.svg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        opacity: 0;
        transition: opacity .5s ease-in-out;
    }

    .pageLinkArea .item .pagelink:hover::before {
        opacity: 1;
        transition: opacity .5s ease-in-out;
    }

    @media screen and (max-width:1560px){
        .pageLinkArea .item .pagelink::before {
            left: 10%;
            width: 15px;
            height: 15px;
        }
    }

    @media screen and (max-width:768px) {
        .pageLinkArea {
            width: 100%;
            justify-content: flex-start;
        }

        .pageLinkArea .item {
            width: calc(100% / 4);
        }

        .pageLinkArea .item .pagelink::before {
            left: 5%;
            width: 15px;
            height: 15px;
        }
    }
</style>