<template lang="pug">

  li.cat-menu-item {{ category.name }}

</template>

<script>
  export default {
    name: 'category-item',
    props: ['category'],

    data() {
      return {
      };
    },
  };
</script>

<style lang="scss" scoped>

  .cat-menu-item {
    margin-bottom: 20px;
    padding-left: 12px;
    font-size: 17px;
    line-height: 30px;
    color: #8b8b8b;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: transparent;
    cursor: pointer;
    // -webkit-text-stroke: 1px #979797;

    &:hover {
      color: #3a89bd;
    }

    &.active {
      color: #3a89bd;
      border-left-color: #4990e2;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

</style>