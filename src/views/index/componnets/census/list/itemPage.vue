<template>
    <div class="item">
        <slot>
            
        </slot>
    </div>
</template>

<style scoped lang="less">
.item {
    height: 24rem;
    
    border: 1px solid blue;
    margin: .25rem;
    background: rgba(rgb(247, 218, 218), rgb(85, 221, 85), rgb(18, 18, 143), .5);
}
</style>