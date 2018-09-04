<template lang="pug">

  div.popup-overlay
      div.popup
        div.popup-header
          h2.title {{ title }}
          span(v-on:click="hidePopup").popup-close

        div.popup-body
          div.body-line
            div.title Марка автомобиля
            input(v-model.trim="reviewData.brand" type="text").input

          div.body-line
            div.title Модель автомобиля
            input(v-model.trim="reviewData.model" type="text").input

          div.body-line
            div.title Оценка отзыва
            div(class="star-rating")
              input(v-model="reviewData.rating"
                class="star-input" id="rating-5"
                type="radio" name="rating" value="5"
              )
              label(class="star-label" for="rating-5")
              input(v-model="reviewData.rating"
                class="star-input" id="rating-4"
                type="radio" name="rating" value="4"
              )
              label(class="star-label" for="rating-4")
              input(v-model="reviewData.rating"
                class="star-input" id="rating-3"
                type="radio" name="rating" value="3"
              )
              label(class="star-label" for="rating-3")
              input(v-model="reviewData.rating"
                class="star-input" id="rating-2"
                type="radio" name="rating" value="2"
              )
              label(class="star-label" for="rating-2")
              input(v-model="reviewData.rating"
                class="star-input" id="rating-1"
                type="radio" name="rating" value="1"
              )
              label(class="star-label" for="rating-1")

          div.body-line
            div.title Текст отзыва
            textarea(v-model.trim="reviewData.desc").textarea

          div.body-line
            //- div.title Рекомендация
            //- input(type="text").input
            label.check-label
              input(type="checkbox" v-model="reviewData.recommend").input-checkbox
              span.check-tip Рекомендуете?

          div.body-line
            div.title Имя автора
            input(v-model.trim="reviewData.author" type="text").input

          div.body-line
            div.title Число размещения отзыва
            input(v-model.trim="reviewData.date" type="text").input

        div.popup-footer
          button(v-if="!editMode" v-on:click="addedReview").btn.btn-green Добавить
          button(v-else v-on:click="updateReview").btn.btn-green Обновить

          button(v-on:click="hidePopup").btn.btn-white Отмена

</template>

<script>
  export default {
    name: 'popup-review',
    props: ['currentReview'],

    data() {
      return {
        title: '',
        editMode: false,

        beforeEditingCache: {},

        reviewData: {
          brand: '',
          model: '',
          desc: '',
          recommend: false,
          author: '',
          date: '',
          rating: '',
        },
      };
    },

    created() {
      if (this.currentReview !== null) {
        this.title = 'Редактирование отзыва';
        this.reviewData = this.currentReview;
        this.editMode = true;
      } else {
        this.title = 'Создание отзыва';
      }

      // Копирование объекта
      this.beforeEditingCache = Object.assign({}, this.currentReview);
    },

    methods: {
      addedReview() {
        const newReview = this.reviewData;
        newReview.id = this.generateRandomId();

        this.$emit('addedReview', newReview);
      },

      updateReview() {
        this.$emit('updateReview', this.reviewData);
      },

      hidePopup() {
        this.$emit('hidePopup', this.beforeEditingCache);
      },

      generateRandomId() {
        return Math.floor((1 + Math.random()) * 0x10000);
      },
    },
  };
</script>

<style lang="scss" scoped>

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
    z-index: 9998;
    overflow-y: auto;
  }

  .popup {
    position: absolute;
    top: 30px;
    left: 50%;
    width: 570px;
    margin-left: -285px;
    margin-bottom: 30px;
    background-color: #fff;
    border: solid 1px #e8e8e8;
    border-radius: 4px;
    box-shadow: 0 1px 0 0 #bbbbbb;
  }

  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 30px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #e8e8e8;

    .title {
      margin: 0;
      font-size: 19px;
      color: #9fa0a7;
    }

    .popup-close {
      display: block;
      width: 11px;
      height: 11px;
      background: url('~@/assets/img/icons/ic_close.svg') no-repeat center;
      cursor: pointer;
    }
  }

  .popup-body {
    padding: 40px 30px 0;
    background-color: #fff;

    .body-line {
      display: block;
      margin-bottom: 35px;

      .title {
        margin-bottom: 5px;
        font-size: 17px;
        font-weight: bold;
        color: #5a595e;
      }
    }
  }

  .popup-footer {
    padding: 30px 30px 50px;
    border-top: 1px solid #e8e8e8;
    text-align: right;

    .btn:last-of-type {
      margin-left: 8px;
    }
  }

  .star-rating{
    display: inline-block;
    vertical-align: top;
  }

  .star-rating::after{
    content: "";
    display: table;
    clear: both;
  }

  .star-label {
    float: right;
    cursor: pointer;
  }

  .star-label::before {
    content: "★";
    font-size: 35px;
    line-height: 30px;
    color: #bfbfbf;
  }

  .star-input {
    display: none;
  }

  .star-label:hover::before,
  .star-label:hover ~ .star-label::before,
  .star-input:checked ~ .star-label::before {
    color: #f6a623;
  }

</style>