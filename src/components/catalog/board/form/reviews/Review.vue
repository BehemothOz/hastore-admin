<template lang="pug">

  div.feedback-item
    div.item-info
      h3.title {{ review.brand }}
      div.rating {{ review.model }}
        div(class="star-rating")
          span(class="star" v-bind:class="{ selected: review.rating == 5 }")
          span(class="star" v-bind:class="{ selected: review.rating == 4 }")
          span(class="star" v-bind:class="{ selected: review.rating == 3 }")
          span(class="star" v-bind:class="{ selected: review.rating == 2 }")
          span(class="star" v-bind:class="{ selected: review.rating == 1 }")

      div.desc {{ review.desc }}
      div.recommend
        span(v-if="review.recommend").rec-desc.like Да, я рекомендую эту модель!
        span(v-else).rec-desc.dislike Нет, я не рекомендую эту модель!
      div.author-date
        span.author {{ review.author }}, 
        span.date {{ review.date }}

    div.item-actions
      button(v-on:click="showEditPopup").btn.btn-white.btn-edit Редактировать
      button(v-on:click="deleteReview").trash-btn

</template>

<script>
  export default {
    name: 'review',
    props: ['review'],

    data() {
      return {
      };
    },

    methods: {
      showEditPopup() {
        this.$emit('showEditPopup', this.review);
      },

      deleteReview() {
        this.$emit('deleteReview', this.review.id);
      },
    },
  };

</script>

<style lang="scss" scoped>

  .feedback-item {
    padding: 35px 30px 35px;
    border-top: 1px solid #d5d5d5;

    &::after {
      content: '';
      display: table;
      clear: both;
    }

    .item-info {
      float: left;
      width: 760px;
    }

    .item-actions {
      float: right;
      width: calc(100% - 760px);
      text-align: right;
    }

    .title {
      margin: 0;
      margin-bottom: 5px;
      font-size: 20px;
      color: #0e1824;
    }

    .rating {
      font-size: 14px;
      line-height: 16px;
      font-weight: bold;
      color: #0e1824;
    }

    .desc {
      margin: 15px 0 20px;
      font-size: 14px;
      line-height: 1.43;
      color: #000000;
    }

    .recommend {
      margin-bottom: 5px;
      padding-left: 30px;
      font-size: 16px;
      color: #000000;

      .rec-desc {
        position: relative;

        &::before {
          content: '';
          position: absolute;
          width: 18px;
          height: 18px;
          left: -30px;
          background: url('~@/assets/img/icons/ic_like.png') no-repeat center;
        }

        &.like {
          &::before {
            top: 1px;
          }
        }

        &.dislike {
          &::before {
            top: 4px;
            transform: rotate(180deg);
          }
        }
      }
    }

    .author-date {
      padding-left: 30px;
      font-size: 12px;
      color: #808080;
    }

    .btn-edit {
      margin-right: 4px;
      vertical-align: top;
    }

    .trash-btn {
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

        .tooltip-text {
          top: 47px;
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }

  .star-rating{
    display: inline-block;
    vertical-align: top;
    padding-left: 5px;
  }

  .star-rating::after{
    content: "";
    display: table;
    clear: both;
  }

  .star {
    float: right;
  }

  .star::before {
    content: "★";
    font-size: 13px;
    line-height: 15px;
    color: #bfbfbf;
  }

  .star.selected::before,
  .star.selected ~ .star::before {
    color: #f6a623;
  }

</style>