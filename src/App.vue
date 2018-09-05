<template>
    <div id="app">
        <v-nav />
        <router-view />
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
    name: 'App',
    data () {
        return {
            value1 : 25
        }
    },
    computed : mapState({
        text : state => {
            console.log('state', state)
            return ' ////'
        }
    }),
    created() {
        console.log('mapState', mapState)
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
</style>
