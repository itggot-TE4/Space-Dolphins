<template>
    <div>
        <v-card class="mx-auto mt-8 text-center" width="300px">
            <h2>{{ getAllLogs[0].log[1].week }}</h2>
            <h3>{{ getAllLogs[0].name }}</h3>
            <div>
                <v-icon>mdi-less-than</v-icon>
                <span>{{ getAllLogs[0].log[1].day }}</span>
                <v-icon>mdi-greater-than</v-icon>
            </div>
        </v-card>
        <LogTemplateTeacher
            :oneLog="getAllLogs[0].log[1]" 
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LogTemplateTeacher from "@/components/LogTemplateTeacher.vue"
import Store from '@/store'
export default Vue.extend({
    name: "ShowLogsForOneStudent",
    components: { LogTemplateTeacher },
    computed: {
        getAllLogs(){
            return Store.getters.getLogs;
        }
    }
})
</script>