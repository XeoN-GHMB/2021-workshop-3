<template>
    default list<br>
    Status:{{reqeuest_status}}: {{state.skellist}}<br>
    To disable default views for views and lists use createRouterInstance(routes,false)

</template>

<script>
import {reactive, onMounted} from 'vue'
import {useRoute} from "vue-router";

export default {
    components: {},
    props:{
        skellist:Object,
        structure:Object,
        cursor:String,
        reqeuest_status:Number
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
