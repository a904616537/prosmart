<template>
    <div id="app">
        <Card style="width:320px">
            <div style="text-align:center">
                <img src="./assets/logo.png">
                <h3>iView 安装测试！</h3>
                
                <Slider v-model="value1"></Slider>
            </div>
        </Card>


        <router-view/>
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
#app {
    font-family             : 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing  : antialiased;
    -moz-osx-font-smoothing : grayscale;
    text-align              : center;
    color                   : #2c3e50;
    margin-top              : 60px;
}
</style>
