<template lang="pug">

  section.board-item
    label.it-select
      input(type="checkbox").input-select
      span.dual-select
    //- img(src="~@/assets/img/mask.jpg").it-img
    img(v-if="card.cover.src" :src="card.cover.src").it-img
    img(v-else src="~@/assets/img/mask.jpg").it-img

    div.it-info
      div.col-one
        span.title {{ card.meta.brand }} {{ card.meta.model }}
        span.price {{ card.meta.price }} р.

      div.col-two
        span.art-number {{ card.code }}
        span.art-title Артикул

      div.col-three
        button(v-on:click="showEditForm").btn.btn-white.edit-btn Редактировать
        button(v-on:click="deleteCard").trash-btn

</template>

<script>
  export default {
    name: 'board-item',
    props: ['card'],

    data() {
      return {
      };
    },

    methods: {
      showEditForm() {
        this.$emit('showEditForm', this.card);
      },

      deleteCard() {
        this.$emit('deleteCard', this.card.id);
      },
    },
  };
</script>

<style lang="scss" scoped>

  .board-item {
    border-top: 1px solid #e8e8e8;
    padding: 20px;
    position: relative;

    &::after {
      content: '';
      display: table;
      clear: both;
    }

    .it-select {
      position: relative;
      float: left;
      width: 20px;
      height: 20px;
      margin-top: 40px;
      margin-right: 15px;
      cursor: pointer;

      .input-select {
        display: none;

        &:checked + .dual-select {
          background: url('~@/assets/img/icons/ic_check.svg') no-repeat center;
          background-color: #54a5e0;
          background-size: 80%;
          border-color: #54a5e0;
        }
      }

      .dual-select {
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        background-color: transparent;
        border: solid 1px #c7cacd;
        border-radius: 4px;
      }
    }

    .it-img {
      float: left;
      width: 98px;
      height: 98px;
    }
  }

  .it-info {
    float: left;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: calc(100% - 25px - 15px - 98px);
    padding-top: 10px;
    padding-left: 15px;
  }

  .col-one {
    min-width: 200px;
    max-width: 200px;

    .title {
      display: block;
      color: #555459;
      font-size: 15px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .price {
      display: block;
      color: #555459;
      font-size: 17px;
      font-weight: bold;
      margin-top: 4px;
    }
  }

  .col-two {
    min-width: 200px;
    max-width: 200px;

    .art-number {
      display: block;
      color: #555459;
      font-size: 15px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .art-title {
      color: #9c9c9c;
      font-size: 12px;
    }
  }

  .col-three {
    position: relative;
    max-width: 240px;

    &::after {
      content: '';
      display: table;
      clear: both;
    }

    .edit-btn {
      float: left;
      margin-right: 4px;
      cursor: pointer;
    }

    .trash-btn {
      float: right;
      width: 48px;
      height: 36px;
      padding: 0;

      background-color: #fbfbfa;
      border: solid 1px #c7cacd;
      border-radius: 4px;
      background-image: url('~@/assets/img/icons/trash.svg');
      background-repeat: no-repeat;
      background-size: auto;
      background-position: center;
      cursor: pointer;

      &:hover {
        background-image: url('~@/assets/img/icons/trash-active.svg');
      }
    }
  }

</style>
