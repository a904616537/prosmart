<template>
    <div id="app">
        <Card style="width:320px">
            <div style="text-align:center">
                <img src="./assets/logo.png">
                <h3>iView 安装测试！</h3>
                
                <Slider v-model="value1"></Slider>
            </div>
        </Card>

        <transition :name="transitionName">   
            <router-view/>
        </transition>
        
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
    name: 'App',
    data () {
        return {
            transitionName : '',
            value1 : 25
        }
    },
    watch: {
        $route(to, from) {
            if(to.meta.index > from.meta.index){
                this.transitionName = 'slide-left';
            }else{
                this.transitionName = 'slide-right';
            }
        }
    },
    computed : mapState({
        text : state => {
            console.log('state', state)
            return ' ////'
        }
    }),
    methods : {
        toNext() {
            this.$router.push({path : '/two'})
        }
    },
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

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
