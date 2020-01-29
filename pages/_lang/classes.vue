<template>
    <div>
        <h2>{{ $t('links.classes')}}</h2>
        <div >
            <h3>{{ $t('global.languageClass') }}</h3>
            <class-info v-for="c in classes" :key="c.id" :classInfo="c" :classType="`L`"></class-info>
        </div>
        <div >
            <h3>{{ $t('global.cultureClass') }}</h3>
            <class-info v-for="c in cultures" :key="c.id" :classInfo="c" :classType="`C`"></class-info>
        </div>
    </div>
</template>

<script>
import ClassInfo from '~/components/ClassInfo.vue';
import axios from 'axios'

const classUrl = 'https://jscsnj.org/staffAccess/queryDB/restLanguageClass.php'
const cultureUrl = 'https://jscsnj.org/staffAccess/queryDB/restCultureClass.php'
const apiAuth = {
            username: '',
            password: ''
        }

const classData = []
const cultureData = []

export default {
    components: {
        ClassInfo
    },
    /*
    async asyncData ({ params }) {
        const { data } = await axios.get(classUrl, {
            auth: apiAuth
        })
        return { classes: data }
    },
    */
    data() {
        return {
            classes: classData,
            cultures: cultureData
        }
    }
}
</script>
