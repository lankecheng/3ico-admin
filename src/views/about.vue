<template>
    <div>

    <top/>
    <headerComp/>
    <mTop title="关于我们"/>

        <div class="info">
            <div class="View container">
                <div class="hd">ABOUT US</div>
                <div class="left">
                    <div class="title">公司简介</div>
                    <div class="content">
                        在李易峰看来，2015年他感受到的最大变化便是，
                        面对移动互联网企业从过去几年满怀激情地、充满
                        希望地想向互联网转型，到现在转型之后开始碰壁，
                        开始害怕向移动互联网转型。近年来，企业互联网
                        化的进程迅速加快。一开始，很多企业都是下定决
                        心要拥抱互联网的变化，要开始实施转型。但经过
                        一番尝试之后，很多企业的转型都没有成功，甚至
                        碰了很多壁，还遭受了不少损失。这让企业开始害
                        怕向互联网转型，原先的热情再迅速消退，甚至对
                        互联网转型产生了恐慌情绪。他们开始退缩到自己
                        熟悉的领域，而后想尽一切办法守住自己的核心业务……
                    </div>
                </div>
                <div class="right">
                    <div class="title">关于我们</div>
                    <div class="content">
                        <img src="../assets/img/demo/us.jpg">
                    </div>
                </div>
            </div>
        </div>
        <div class="advantage">
            <div class="bg"></div>
            <div class="View container">
                <div class="hd">ADVANTAGE</div>
                <div class="sub">公司优势</div>
                <div class="bd">
                    <div class="item">
                        <i class="ico-safe"></i><br/><br/>
                        <span>安全</span>
                    </div>
                    <div class="item">
                        <i class="ico-credit"></i><br/><br/>
                        <span>诚信</span>
                    </div>
                    <div class="item">
                        <i class="ico-fair"></i><br/><br/>
                        <span>公平</span>
                    </div>
                    <div class="item">
                        <i class="ico-transparent"></i><br/><br/>
                        <span>透明</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="group1">
            <div class="View container">
                <ul class="bd">
                    <li>
                        <div class="ico group"></div>
                        <div class="content">
                            <div class="title">专业团队</div>
                            <div class="desc">我们由一支熟悉数字货币、区块链、互联网金融运作方式的团队开发并运营。</div>
                        </div>
                    </li>
                    <li>
                        <div class="ico cloud"></div>
                        <div class="content">
                            <div class="title">投资资源</div>
                            <div class="desc">我们拥有一批来自于数字货币、区块链、金融、科技、基金领域的投资资源。</div>
                        </div>
                    </li>
                    <li>
                        <div class="ico idea"></div>
                        <div class="content">
                            <div class="title">用户体验</div>
                            <div class="desc">我们提供客服在线及技术支持，确保产品每一环节使用流畅。</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="group2">
            <div class="View container">
                <div class="hd">我们的团队</div>
                <div class="bd">
                    <div class="item">
                        <img class="avatar" src="../assets/img/demo/ceo1.jpg">
                        <div class="name">张立成 <span class="title">- CEO</span></div>
                        <div class="desc">
                            互联网金融创业者， 拥有6 年以上的金融产品设计与运营，以及团队管理经验，熟悉互联网金融的各种运作模式，进入数字货币行业三年多，对区块链有比较深的理解，较强的市场敏锐感，坚持产品设计必须与市场需求相结合
                        </div>
                    </div>
                    <div class="item">
                        <img class="avatar" src="../assets/img/demo/ceo2.jpg">
                        <div class="name">张立成 <span class="title">- CEO</span></div>
                        <div class="desc">
                            互联网金融创业者， 拥有6 年以上的金融产品设计与运营，以及团队管理经验，熟悉互联网金融的各种运作模式，进入数字货币行业三年多，对区块链有比较深的理解，较强的市场敏锐感，坚持产品设计必须与市场需求相结合
                        </div>
                    </div>
                    <div class="item">
                        <img class="avatar" src="../assets/img/demo/ceo3.jpg">
                        <div class="name">张立成 <span class="title">- CEO</span></div>
                        <div class="desc">
                            互联网金融创业者， 拥有6 年以上的金融产品设计与运营，以及团队管理经验，熟悉互联网金融的各种运作模式，进入数字货币行业三年多，对区块链有比较深的理解，较强的市场敏锐感，坚持产品设计必须与市场需求相结合
                        </div>
                    </div>
                    <div class="item">
                        <img class="avatar" src="../assets/img/demo/ceo4.jpg">
                        <div class="name">张立成 <span class="title">- CEO</span></div>
                        <div class="desc">
                            互联网金融创业者， 拥有6 年以上的金融产品设计与运营，以及团队管理经验，熟悉互联网金融的各种运作模式，进入数字货币行业三年多，对区块链有比较深的理解，较强的市场敏锐感，坚持产品设计必须与市场需求相结合
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <bottom/>
    </div>
</template>

<script type="text/babel">
import {
    mapState,
    mapActions,
} from 'vuex';

import top from './layout/top.vue';
import headerComp from './layout/header.vue';
import bottom from './layout/bottom.vue';
import mTop from './module/top.vue';

export default{
    // title: '注册',
    components: {
        top,
        headerComp,
        bottom,
        mTop,
    },

};
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';
.container{

}
.info{
    margin-top: 60px;
    @include clearfix;
    .hd{
        margin-bottom: 30px;
        font-size: 34px;
        color: #22a875;
        text-align: center;
    }
    .left{
        float: left;
        width: 490px;
        line-height: 1.8;
        color: #333;
        .title{
            margin-bottom: 20px;
            font-size: 20px;
        }
    }
    .right {
        float: right;
        width: 490px;
        .title{
            margin-bottom: 20px;
            font-size: 20px;
        }
        img{
            width: 100%;
        }
    }
}
.advantage{
    position: relative;
    margin-top: 90px;
    .hd{
        font-size: 34px;
        color: #22a875;
    }
    .sub{
        font-size: 30px;
        color: #1d1d1d;
    }
    .bg{
        position: absolute;
        top: 130px;
        width: 100%;
        height: 120px;
        background-color: #f2f2f2;
    }
    .bd{
        padding: 60px 0 0;
        background-color: #fff;
        .item{
            display: inline-block;
            width: 24%;
            text-align: center;
            font-size: 24px;
            color: #333;
        }
        .ico-safe, .ico-credit, .ico-fair, .ico-transparent{
            display: inline-block;
            width: 150px;
            height: 150px;
            background-image: url(../assets/img/ico-about2.png);
            background-repeat: no-repeat;
        }
        .ico-safe{
            background-position: 0 0;
        }
        .ico-credit{
            background-position: -150px 0;
        }
        .ico-fair{
            background-position: -300px 0;
        }
        .ico-transparent{
            background-position: -450px 0;
        }
    }
}
.group1{
    margin-top: 100px;
    .bd{
        margin: 0;
        padding: 0;
        list-style: none;
        li{
            position: relative;
            margin-top: 50px;
            padding-left: 120px;
            .title{
                font-size: 24px;
                color: #22a875;
            }
            .desc{
                margin-top: 20px;
                font-size: 14px;
            }
        }
        .ico{
            position: absolute;
            top: 0;
            left: 0;
            width: 70px;
            height: 70px;
            background-image: url(../assets/img/ico-about.png);
            background-repeat: no-repeat;
            background-size: 210px;
            &.group{
                background-position: 0 0;
            }
            &.cloud{
                background-position: -70px 0;
            }
            &.idea{
                background-position: -140px 0;
            }
        }
    }
}
.group2{
    margin-top: 80px;
    padding-bottom: 80px;
    .hd{
        font-size: 30px;
        color: #1d1d1d;
    }
    .bd{
        margin-top: 50px;
        margin-left: -20px;
        .item{
            float: left;
            margin-left: 20px;
            width: 233px;
            .avatar{
                display: block;
                width: 100%;
            }
            .name{
                margin-top: 20px;
                font-size: 18px;
                font-weight: bold;
                .title{
                    font-size: 14px;
                    color: #666;
                    font-weight: normal;
                }
            }
            .desc{
                margin-top: 20px;
                font-size: 14px;
                color: #666;
                line-height: 2;
            }
        }
    }
}
</style>
