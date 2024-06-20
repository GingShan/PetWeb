<script setup>

</script>

<template>
    <section class="banner">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-7">
                    <div class="bannerTxt">
                        <h1 class="title">
                            About Us
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
        <div class="leftBox">
            <div class="stickyPic"></div>
        </div>
        <div class="rightBox">
            <div class="contentList">
                <div class="contentBox">
                    <h1 class="title">熱愛之家寵物領養中心</h1>
                    <p class="content">
                        熱愛之家致力於為每一隻被遺棄或無家可歸的動物找到溫暖的家。我們的網站提供詳細的寵物資料，包括照片、性格描述和健康狀況，讓潛在領養者可以全面了解每一隻寵物。我們還提供領養指南和後續支持，確保每個領養家庭和寵物都能夠幸福和諧地生活在一起。加入我們的行列，給這些可愛的生命一個新的開始！
                    </p>
                </div>
                <div class="contentBox">
                    <h1 class="title">幸福家園寵物領養平台</h1>
                    <p class="content">
                        在幸福家園，我們相信每個生命都值得擁有一個安全和愛的家。我們的網站每天更新最新的可領養寵物資訊，並提供詳細的篩選功能，幫助您找到最適合的毛孩子。我們的志工團隊會在每一步都給予您支持和指導，讓您的領養過程變得簡單且愉快。快來探索我們的領養故事，為寵物們開啟新的幸福篇章。
                    </p>
                </div>
                <div class="contentBox">
                    <h1 class="title">寵愛無限尋寵啟事網</h1>
                    <p class="content">
                        寵愛無限專門提供一個方便快捷的平台，幫助飼主尋找走失的寵物。我們的網站設有詳細的走失寵物登記表單和搜尋工具，讓您可以快速發布和查找相關訊息。我們還有專門的社群分享功能，讓更多人關注您的尋寵啟事，共同幫助您找回心愛的夥伴。立即登錄，與我們一起把愛帶回家。
                    </p>
                </div>
                <div class="contentBox">
                    <h1 class="title">永恆守護領養計劃</h1>
                    <p class="content">
                        在永恆守護，我們為每一位有心領養的家庭提供全方位的服務。從了解寵物的需求到匹配合適的領養者，我們的網站致力於促成每一次完美的領養。我們還有專業的獸醫和行為專家，提供領養後的持續支持，確保每一個毛孩子都能得到最好的照顧。來看看我們的領養成功故事，您也可以成為改變寵物命運的一部分。
                    </p>
                </div>
                <div class="contentBox">
                    <h1 class="title">愛的呼喚寵物領養社區</h1>
                    <p class="content">
                        愛的呼喚是一個充滿愛心和責任感的寵物領養社區。我們的網站集合了大量等待領養的貓狗資料，每一隻動物都經過健康檢查並記錄在案。我們還設有專業的志工團隊，幫助您解決領養過程中的任何問題，並提供領養後的支持和指導。我們相信每一個生命都應該被珍惜，來加入我們的行列，讓愛的呼喚響徹每一個角落。
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    .banner {
        width: 100%;
        background-image: url(/images/img/aboutUs/Aboutus_banner.jpg);
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
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .page01 .leftBox,
    .page01 .rightBox {
        width: 50%;
        min-height: 100vh;
    }

    .page01 .leftBox {
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        top: 0;
    }

    .leftBox .stickyPic {
        width: 80%;
        padding-top: 70%;
        background-image: url(/images/img/aboutUs/stickyPic01.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-color: #333;
    }

    .leftBox .stickyPic::after {
        content: '';
        position: absolute;
        bottom: -5%;
        left: -5%;
        width: 100px;
        height: 100px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        background-image: url(/images/link_icon.svg);
        transform-origin: center center;
        transform: rotate(15deg);
        animation-name: shake;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
        animation-timing-function: ease-in-out;
    }

    @keyframes shake {
        0% {
            transform: rotate(15deg);
        }

        50% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(15deg);
        }
    }


    .rightBox .contentBox {
        width: 100%;
        padding: 30% 10%;
        padding-top: 40%;
    }


    @media screen and (max-width:768px) {
        .bannerTxt {
            margin: auto 0;
            text-align: center;
        }
        .page01{
            flex-direction: column;
        }
        .page01 .leftBox{
            min-height: auto;
            padding: 10% 0%;
            background-color: #fff;
            z-index: 2;
        }
        .page01 .leftBox,.page01 .rightBox{
            width: 100%;
        }
        .rightBox .contentBox{
            padding: 10%;
        }

        .leftBox .stickyPic::after{
            width: 50px;
            height: 50px;
        }

    }
</style>