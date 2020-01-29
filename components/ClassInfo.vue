<template>
  <div v-if="classInfo.classId != 'X'">
    <div >{{classInfo.classId}} {{classInfo.classNameChinese}} {{classInfo.className}} <button type="button" v-on:click="getRoster(classInfo.classId);">Get Student Roster</button></div>
    
    <div v-for="s in students" :key="s.studentId">
      {{ s.studentId }} {{ s.firstName }} {{ s.lastName }}
    </div>
  </div>
</template>

<script>
const testRoster = []

import axios from 'axios'

const classUrl = 'https://jscsnj.org/staffAccess/queryDB/restClassRoster.php'
const apiAuth = {
            username: '',
            password: ''
        }

export default {
  props: {
    classInfo: {
      type: Object,
      default: function () {
        return {  }
      }
    },
    classType: {
      type: String,
      default: 'L',
      validator: function (value) {
        // The value must match one of these strings
        return ['L', 'C'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      students: []
    }
  },
  methods: {
    getRoster(classId) {
      /*
      let param = new FormData();
      param.append("LORC", this.classType);
      param.append("CLASS", classId);
      axios.post(classUrl, {
        params: param,
        auth: apiAuth
      }).then(response => {
        this.students = response
      }).catch(function (error) {
        console.log(error);
      });
      */
      this.students = testRoster;
    }
  }
}
</script>
<style scoped>
</style>