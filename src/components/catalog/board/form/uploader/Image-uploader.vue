<template lang="pug">

  div(v-show="imagesLength").box.upload-box
    img(class="mask" src="~@/assets/img/photo.svg")
    input(
      class="input-image"
      ref="inputImages"
      type="file"

      accept="image/*"
      multiple
      @change="inputImageChange($event)"
    )
    span(v-on:click="triggerEventForInput").add-image Добавить

</template>

<script>
  export default {
    name: 'image-uploader',
    props: ['imagesLength'],

    data() {
      return {
      };
    },

    methods: {
      triggerEventForInput() {
        this.$refs.inputImages.click();
      },

      /*
       * @param {ChangeEvent} event
      */
      inputImageChange(event) {
        const input = event.currentTarget;
        const files = input.files;

        for (let i = 0; i < files.length; i += 1) {
          const file = files[i];
          const reader = new FileReader();

          reader.onload = (e) => {
            this.$emit('addUploadedImage', e.target.result, file);
          };

          reader.readAsDataURL(file);
        }
        // readAsDataURL - всего лишь указание формата, в каком нужно получить файл
        // этот метод инициализирует запрос (событие onload, результат - e.target.result)
      },
    },
  };
</script>

<style lang="scss">
</style>