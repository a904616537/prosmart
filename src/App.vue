<template>
    <div id="app">
        <v-nav />
        <router-view />
    </div>
</template>

<script>
import Vue                    from 'vue';
import axios                  from 'axios';
import {mapState, mapActions} from 'vuex';


export default {
    name: 'App',
    data () {
        return {
            value1 : 25
        }
    },
    methods : {
        ...mapActions([
            'onLogin',
        ]),
        onRefresh(code) {
            console.log('微信登陆 code', code)

            axios.post(Vue.setting.api + '/wechat/oauth/login?code=' + code)
            .then((response) => {
                console.log('code登陆', response);
                this.onLogin({user : response.user})
            })
            .catch((error) => {
                console.log('error', error)
            });
        },
        login(openid) {
            console.log(Vue.setting.api + '/login')
            axios.post(Vue.setting.api + '/login', {openid})
            .then(result => result.data)
            .then(result => {
                console.log('登陆', result);
                this.onLogin({user : result.user})
            })
            .catch(err => {
                console.log('error', err)
            })
        }
    },
    computed : mapState({
    }),
    created() {
        //获取url中的参数
        function getUrlParam(name) {
            const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            const r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }

        const code = getUrlParam('code');
        const openid = getUrlParam('openid');
        console.log('code', code)
        if(code) {
            console.log('code 登陆')
            this.onRefresh(code);
        } else if(openid) {
            console.log('卡片玩家登陆', openid);
            this.login(openid);
        } else {
            console.log('测试玩家登陆');
            this.login('oJegnv-RgdwmlinNILZxWsUap8Og')
        }
    }
    
}
</script>

<style>
@font-face{
    font-family: fontM;
    src: url('/static/fonts/Rubik-Medium.ttf');
}
@font-face{
    font-family: fontR;
    src: url('/static/fonts/Rubik-Regular.ttf');
}
#app {
    -webkit-font-smoothing  : antialiased;
    -moz-osx-font-smoothing : grayscale;
    text-align              : center;
    color                   : #313131;
    font-family: fontR; 
}
a,a:hover,a:visited,a:active{
    color: #313131;
}
li{
    list-style-type: none;
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: #AAAAAA;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color: #AAAAAA;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color: #AAAAAA;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: #AAAAAA;
}
.puplic-btn{
    width: 100%;
    font-size: 15px;
    background-color: #212436;
    color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,.35);
    line-height: 40px;
    font-family: fontM;
}
.puplic-popbtn{
    background-color: #212436;
    color: #fff;
    border-radius: 8px;
    line-height: 36px;
    padding: 0 20px;
    font-family: fontM;
    font-size: 15px;
    display: inline-block;
}
.title,.lesson .content .title,.profile .user-name,.profile .profile-btn,.profileEditor .profile-btn,.profileEditor .profile-input,.search .result .title,.video .video-bottom,.video .content{
    font-family: fontM;
}
.button {
    color: #fff;
    background-color: #212436;
}
.link {
    color           : #212436;
    border          : none;
    text-decoration : underline;
    margin          : 10px 0;
}

.spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}

</style>
