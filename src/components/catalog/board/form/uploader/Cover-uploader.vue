<template lang="pug">

  div.box.upload-cover-box
    img(class="mask" src="~@/assets/img/photo.svg")
    input(
      class="input-image"
      ref="inputCoverImage"
      type="file"

      accept="image/*"
      @change="inputCoverImageChange($event)"
    )
    span(v-on:click="triggerEventForInput").add-image Добавить

</template>

<script>
  export default {
    name: 'cover-uploader',

    data() {
      return {
      };
    },

    methods: {
      triggerEventForInput() {
        this.$refs.inputCoverImage.click();
      },

      /*
       * @param {ChangeEvent} event
      */
      inputCoverImageChange(event) {
        const file = event.currentTarget.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
          this.$emit('addUploadedCoverImage', e.target.result, file);
        };

        reader.readAsDataURL(file);
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>