<template lang="pug">

  ul.cat-menu
    category(
      v-for="category in categories"
      :key="category.id"
      :category="category"
    )


</template>

<script>
  import Category from '@/components/catalog/categories/Category-item';

  export default {
    name: 'category-list',
    components: { Category },
    props: ['categories'],

    data() {
      return {
      };
    },
  };
</script>

<style lang="scss" scoped>

  .cat-menu {
    padding: 10px 0;
  }

</style>
