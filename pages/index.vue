<template>
  <div>
    <h1 class="red">Events: Hello {{ name }}!</h1>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: 'world'
    }
  }
}
</script>

<style>
.red {
    color: red;
}
</style>