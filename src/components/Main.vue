<template>
  <div class="main-page">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'main',
  data() {
    return {
      msg: 'Главная страница',
    };
  },
};
</script>

<style scoped>

  .main-page {
    height: 110vh;
  }

  h1, h2 {
    font-weight: normal;
    text-align: center;
  }

</style>
