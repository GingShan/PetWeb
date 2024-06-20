<script setup>
    import {
        ref,
        reactive,
        onMounted
    } from 'vue'

    const adoptionInfo = ref([])

    const fetchAPI = async () => {
        try {
            const response = await fetch(
                'https://data.moa.gov.tw/api/v1/AnimalRecognition/?%24top=100&Page=1&api_key=C0RO8X4UOU49J4UA4PX15UF5F0J0FM'
            )
            const data = await response.json();
            console.log(data);
            adoptionInfo.value = data
        } catch (error) {
            console.log(error);
        }
    };

    onMounted(() => {
        fetchAPI();
    })
</script>

<template>
    <section class="banner">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-7">
                    <div class="bannerTxt">
                        <h1 class="title">
                            Adoption
                        </h1>
                        <p class="content">
                            Until one has loved an animal, a part of one's soul remains unawakened.
                            <br />Animals are such agreeable friends - they ask no questions; they pass no criticisms.
                            <br />The purity of a person's heart can be quickly measured by how they regard animals.
                        </p>
                    </div>
                </div>
                <div class="col-lg-5"></div>
            </div>
        </div>
    </section>
    <section class="page page01">
        <div class="pageBox">
            <div class="pageTxt">
                <h1 class="title">寵物領養</h1>
                <p class="content">
                    我們的使命是為無家可歸的動物提供一個安全和愛的避風港，並找到合適的領養家庭。我們相信每一個生命都值得被珍惜，因此我們精心管理每一個領養過程，確保每一隻寵物都能找到最適合他們的新家。
                </p>
            </div>
            <div class="AdoptionArea">
                <div class="adoptionBox" v-for="item in adoptionInfo.Data" :key="item">
                    <div class="adoptionImg" :style="{ backgroundImage: `url(${item.album_file})` }"></div>
                    <div class="petInfo">
                        <p class="adoptionId">
                            流水編號：{{ item.animal_id }}
                        </p>
                        <p class="adoptionSubid">
                            收容編號：{{ item.animal_subid }}
                        </p>
                        <p class="adoptionFoundPlace">
                            尋獲地：{{ item.animal_foundplace }}
                        </p>
                        <p class="adoptionPlace">
                            實際所在地：{{ item.animal_place }}
                        </p>
                        <p class="adoptionKind">
                            類型：{{ item.animal_kind }}
                        </p>
                        <p class="adoptionSex">
                            性別：{{ item.animal_sex }}
                        </p>
                        <p class="adoptionSterilization">
                            是否絕育：{{ item.animal_sterilization }}
                        </p>
                        <p class="adoptionTime">
                            開放認養時間(起訖)：{{ item.animal_opendate }} ~ {{ item.animal_closeddate }}
                        </p>
                        <p class="adoptionShelterName">
                            收容所名稱：{{ item.shelter_name }}
                        </p>
                        <p class="adoptionAddress">
                            地址：{{ item.shelter_address }}
                        </p>
                        <p class="adoptiontel">
                            連絡電話：<a href="tel:${item.shelter_tel}">{{ item.shelter_tel }}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .banner {
        width: 100%;
        background-image: url(/images/img/Adoption/Adoption_banner.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .banner .row {
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, .7);
    }

    .bannerTxt {
        margin-left: 5%;
    }

    .bannerTxt .title,
    .bannerTxt .content {
        color: #fff;
    }

    .bannerTxt .title {
        font-size: 5rem;
        font-family: 'Times New Roman', Times, serif;
    }

    .page01 {
        display: block;
        padding-bottom: 3%;
    }

    .page01 .pageBox {
        width: 85%;
        margin: 0 auto;
        min-height: 100vh;
        padding-top: 3%;
    }

    .page01 .pageBox .pageTxt {
        padding-bottom: 5%;
    }

    .page01 .pageBox .pageTxt .title {
        padding-bottom: 1%;
    }

    .AdoptionArea {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 15px;
        width: 100%;
    }

    .adoptionBox {
        padding: 20px;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, .5);
        border-radius: 15px;
    }

    .adoptionBox .adoptionImg {
        width: 100%;
        padding-top: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-color: #333;
    }

    .adoptionBox .petInfo {
        padding-top: 5%;
    }

    .adoptionBox p {
        font-size: .95rem;
        line-height: 180%;
    }

    .adoptionBox a {
        display: inline-block;
    }

    @media screen and (max-width:1560px) {
        .AdoptionArea {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (max-width:1366px) {
        .AdoptionArea {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width:768px) {
        .AdoptionArea {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>