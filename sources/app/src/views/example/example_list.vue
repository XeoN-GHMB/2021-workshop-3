<template>
    EXAMPLE
  {{state.skellist}}
  {{skellist}}
  {{cursor}}
  {{request_status}}
</template>

<script>
import {reactive, onMounted} from 'vue'
import {useRoute} from "vue-router";

export default {
    components: {},
    props:{
        skellist:Object,
        structure:Object,
        cursor:Object,
        request_status:Object
    },
    setup(props, context) {
        const route = useRoute()
        const state = reactive({
            skellist: props.skellist
        })

        return {
            route,
            state
        }
    }
}
</script>
