<template lang="pug">

  span(:class="[ image.cover ? 'cover-box' : 'image-box' ]").box
    span(:style="{ backgroundImage: 'url(' + image.src + ')' }").image-view
    span(v-on:click="deleteImage(image.id, !!image.cover)").remove-image

</template>

<script>
  export default {
    name: 'image-box',
    props: ['image'],

    data() {
      return {
      };
    },

    methods: {
      /*
        * @param { number } id
        * @param { boolean } cover - is there a cover
      */
      deleteImage(id, cover) {
        if (cover) {
          this.$emit('deleteCoverImage', id);
        } else {
          this.$emit('deleteImage', id);
        }
      },
    },
  };
</script>

<style lang="scss" scoped>

  .cover-box,
  .image-box {
    position: relative;
    overflow: hidden;

    &:hover {
      .remove-image {
        top: 0;
        right: 0;
        opacity: 1;
      }
    }
  }

  .image-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 4px;
  }

  .remove-image {
    position: absolute;
    top: -14px;
    right: -14px;
    width: 14px;
    height: 14px;
    background: url('~@/assets/img/icons/ic_close-wh.svg') no-repeat center;
    background-size: 76%;
    background-color: rgba(0, 0, 0, 0.52);
    cursor: pointer;
    transition: all 0.2s ease;
    opacity: 0;
  }

</style>