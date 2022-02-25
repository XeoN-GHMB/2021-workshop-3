<template>
    <div>
        default view <br>
        {{skel}}<br>
        To disable default views for views and lists use createRouterInstance(routes,false)
    </div>
</template>

<script>
// @ is an alias to /src
import {reactive} from 'vue'

export default {
    components: {},
    props:{
        skel:Object,
        structure:Object,
        request_status:Number
    },
    setup(props, context) {
        const state = reactive({})

        return {
            state
        }
    }
}
</script>
