<template lang="pug">

  div.board-list
    //- Item cat
    board-item(
      v-for="card in filteredCatalogCard"
      :key="card.id"
      :card="card"
      @showEditForm="showEditForm"
      @deleteCard="deleteCard"
    )

</template>

<script>
  import BoardItem from '@/components/catalog/board/Board-item';

  export default {
    name: 'board-list',
    components: { BoardItem },
    props: ['filteredCatalogCard', 'searchCard'],

    data() {
      return {
      };
    },

    methods: {
      showEditForm(card) {
        this.$emit('showEditForm', card);
      },

      deleteCard(cardId) {
        this.$emit('deleteCard', cardId);
      },
    },
  };
</script>

<style lang="scss" scoped></style>
