<template>
    <transition name="scale">
        <div class="modal" v-if="showingAddModal">
            <div class="modalContainer">
                <div class="modalHeader">
                    <p class="fleft">{{modalHeading}}</p>
                    <div class="clear"></div>
                </div>
                <div class="modalContent">
                    <slot></slot>
                </div>
                <div class="modalFooter">
                    <button class="fright btnClose" @click="$emit('modalClose')">Close</button>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </transition>
</template>

<script type="text/javascript">
export default {
    name: "modal",
    computed:{
        showingAddModal(){
            return this.cond
        },
    },
    props: ["cond", "modalHeading"]
}
</script>