<script setup>
    import {
        ref,
        reactive
    } from 'vue'
    import {
        useRoute,
        useRouter
    } from 'vue-router';
    import bannerSwiper from '../components/bannerSwiper.vue'

    const router = useRouter()
    const linkOneHandler = () => {
        setTimeout(() => {
            router.push({
                path: '/about'
            })
        }, 100);
    }
    const linkTwoHandler = () => {
        setTimeout(() => {
            router.push({
                path: '/Adoption'
            })
        }, 100);
    }
    const linkThirdHandler = () => {
        setTimeout(() => {
            router.push({path:'/findPet'})
        }, 100);
    }
</script>

<template>
    <section class="banner">
        <bannerSwiper />
    </section>
    <section class="page page01">
        <div class="pageBox">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="innerImg"></div>
                    </div>
                    <div class="col-lg-4">
                        <div class="textArea">
                            <h1 class="title">我們的宗旨</h1>
                            <p class="content">
                                我們的使命是為無家可歸的動物提供一個安全和愛的避風港，並找到合適的領養家庭。我們相信每一個生命都值得被珍惜，因此我們精心管理每一個領養過程，確保每一隻寵物都能找到最適合他們的新家。我們提供詳細的寵物資訊、專業的領養建議和後續支持服務，致力於讓每一個領養故事都成為一個幸福的開始。
                            </p>
                        </div>
                        <div class="buttonArea Btn01" @click="linkOneHandler">
                            Read More
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="page page02">
        <div class="pageBox">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="innerImg"></div>
                    </div>
                    <div class="col-lg-4">
                        <div class="textArea">
                            <h1 class="title">協助寵物領養</h1>
                            <p class="content">
                                在幸福家園寵物領養平台，我們的使命是為無家可歸的動物提供一個安全和愛的避風港，並找到合適的領養家庭。我們相信每一個生命都值得被珍惜，因此我們精心管理每一個領養過程，確保每一隻寵物都能找到最適合他們的新家。我們提供詳細的寵物資訊、專業的領養建議和後續支持服務，致力於讓每一個領養故事都成為一個幸福的開始。
                            </p>
                        </div>
                        <div class="buttonArea Btn02" @click="linkTwoHandler">
                            Read More
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="page page03">
        <div class="pageBox">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="imgBox">
                            <div class="innerImg">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="textArea">
                            <h1 class="title">毛小孩我們幫你們找</h1>
                            <p class="content">
                                寵愛無限尋寵啟事網是一個專門幫助飼主找回走失寵物的專業平台。我們理解走失寵物對飼主的痛苦和焦慮，因此我們提供快速高效的尋寵服務。我們的平台集合了最新的走失寵物資訊，並設有詳細的搜尋和發布工具，讓您可以最大限度地擴大尋找範圍。我們的社群分享功能讓更多愛心人士參與到尋寵行動中，幫助更多家庭重聚。
                            </p>
                        </div>
                        <div class="buttonArea Btn03" @click="linkThirdHandler">
                            Read More
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .pageBox {
        width: 85%;
        margin: 0% auto;
    }

    .page .row {
        min-height: 100vh;
        justify-content: center;
        align-items: center;
    }

    .page:nth-child(odd) .row {
        flex-direction: row-reverse;
    }

    .page01 .innerImg {
        width: 60%;
        margin: 0 auto;
        padding-top: 70%;
        background-image: url(/images/img/index/page01_item01.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .page01 .innerImg::after {
        content: '';
        position: absolute;
        bottom: -5%;
        left: -5%;
        width: 45%;
        height: 45vh;
        background-color: rgb(32, 118, 139);
        z-index: -1;
    }

    .page02 .innerImg {
        width: 80%;
        margin: 0 auto;
        padding-top: 50%;
        background-image: url(/images/img/index/page02_item01.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .page03 .imgBox {
        width: 70%;
        margin: 0 auto;
        overflow: hidden;
        border-radius: 50% 50% 0px 0px;
        box-shadow: 3px 5px 5px rgba(0, 0, 0, .6);
    }

    .page03 .imgBox .innerImg {
        width: 100%;
        padding-top: 100%;
        background-image: url(/images/img/index/page03_item01.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
    }

    .buttonArea {
        width: 200px;
        border: 2px solid #333;
        text-align: center;
        padding: 2% 0%;
        margin-top: 5%;
        cursor: pointer;
        transition: all .5s ease-in-out;
    }

    .buttonArea::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -30px;
        transform: translateY(-50%);
        width: 40px;
        height: 2px;
        background-color: #333;
        transition: all .5s ease-in-out;
    }

    .buttonArea::after {
        content: '';
        position: absolute;
        top: 0%;
        left: 0%;
        width: 0%;
        height: 100%;
        background-color: rgb(32, 118, 139);
        z-index: -1;
        transition: all .5s ease-in-out;
    }

    .buttonArea:hover {
        color: #fff;
        transition: all .5s ease-in-out;
    }

    .buttonArea:hover::before {
        left: -20px;
        transition: all .5s ease-in-out;
    }

    .buttonArea:hover::after {
        width: 100%;
        transition: all .5s ease-in-out;
    }

    @media screen and (max-width:768px) {
        .page {
            padding: 15% 0%;
        }

        .page .row {
            min-height: auto;
            align-content: flex-start;
        }

        .page .textArea {
            margin-top: 10%;
        }

        .page01 .innerImg {
            width: 100%;
            padding-top: 100%;
        }

        .page01 .innerImg::after {
            left: -10%;
            width: 45%;
            height: 20vh;
        }

        .page02 .innerImg {
            width: 100%;
            padding-top: 100%;
        }

        .buttonArea {
            width: 150px;
            font-size: .95rem;
        }

        .buttonArea::before {
            left: -10px;
            width: 20px;
        }

        .buttonArea:hover::before {
            left: -5px;
        }
    }
</style>