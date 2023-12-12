<template>
    <div class="body">
        <header>
            <h1>gb可视化</h1>
        </header>
        <section class="container">
            <section class="itemLeft">
                <itemPage>
                    <item-one></item-one>
                </itemPage>
                <itemPage>
                    <item-two></item-two>
                </itemPage>
            </section>
            <section class="itemCenter">
                <h1></h1>
                <map-page></map-page>
            </section>
            <section class="itemRight">
                <itemPage>
                    <item-three></item-three>
                </itemPage>
                <itemPage>
                    <item-four></item-four>
                </itemPage>
            </section>
        </section>
    </div>
</template>
<script setup>
import { ref, onMounted ,inject} from 'vue';
import itemPage from './itemPage.vue';
import itemOne from './itemOne.vue'
import itemTwo from './itemTwo.vue'
import itemThree from './itemThree.vue'
import itemFour from './itemFour.vue'
import itemOneVue from './itemOne.vue';
import mapPage from './mapPage.vue';

const echarts = inject('echarts')
onMounted(()=>{

})
</script>
<style scoped lang="less">
.body {
    background: linear-gradient(135deg, #c7e9fb, #a6defa, #80d4f9, #5bc9f8, #35bef7);
    height: 50em;
}

header {
    height: 1rem;
    width: 100%;
    background-color: rgba(0, 0, 255, 0.2);

    h1 {
        font-size: 0.375rem;
        color: white;
        text-align: center;
        line-height: 1rem;
    }
}

.container {
    // 自适应
    min-width: 1200px;
    max-width: 2048px;
    margin: 0 auto;
    border: 1px solid red;
    padding: .125rem .125rem 0;
    // height: 500px;
    display: flex;

    .itemLeft,
    .itemRight {
        flex: 3;
    }
    .itemCenter {
        flex: 5;
        height: 48rem;
        border: 1px solid blue;
        margin: 0.25rem;
        padding: .125rem;
    }
}</style>