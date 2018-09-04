<template lang="pug">

  section.panel.panel-feedback
    div.panel-head
      h2.panel-title Отзывы
      button(v-on:click="showCreatePopup").btn-string + Добавить отзыв

    div.panel-body
      review(
        v-for="review in reviews"
        :key="review.id"
        :review="review"
        @showEditPopup="showEditPopup"
        @deleteReview="deleteReview"
      )

    popup-review(
        v-if="toggleShowPopup"
        :currentReview="currentReview"
        @addedReview="addedReview"
        @updateReview="updateReview"
        @hidePopup="hidePopup"
      )

</template>

<script>
  import PopupReview from '@/components/catalog/board/form/reviews/Popup-review';
  import Review from '@/components/catalog/board/form/reviews/Review';

  export default {
    name: 'form-reviews',
    components: { Review, PopupReview },
    props: ['reviews'],

    data() {
      return {
        toggleShowPopup: false,
        currentReview: null,
      };
    },

    methods: {
      // Show / hide popup
      switchStatePopup(state) {
        const body = document.querySelector('body');  // TEMP!

        if (state) {
          body.classList.add('no-scroll');
          this.toggleShowPopup = true;
        } else {
          body.classList.remove('no-scroll');
          this.toggleShowPopup = false;
        }
      },

      showCreatePopup() {
        this.currentReview = null;
        this.switchStatePopup(true);
      },

      showEditPopup(review) {
        this.currentReview = review;
        this.switchStatePopup(true);
      },

      hidePopup(prevReview) {
        this.$emit('updateReview', prevReview);
        this.switchStatePopup(false);
      },

      addedReview(review) {
        this.$emit('addedReview', review);
        this.switchStatePopup(false);
      },

      updateReview(review) {
        this.$emit('updateReview', review);
        this.switchStatePopup(false);
      },

      deleteReview(id) {
        this.$emit('deleteReview', id);
      },
    },
  };

</script>

<style lang="scss" scoped>

  .panel.panel-feedback {
    .panel-body {
      padding: 0 25px;
    }
  }

</style>