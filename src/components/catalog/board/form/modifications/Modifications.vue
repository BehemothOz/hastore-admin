<template lang="pug">

  section.panel.panel-modification
    div.panel-head
      h2.panel-title Размеры и модификации
      button(v-on:click="addedRowMod").btn-string + Добавить модификацию

    div(v-if="modifications.length").panel-body.panel-table
      div.row.row-head
        div.cell.cell-width Ширина, мм
        div.cell.cell-diameter Диаметр, "
        div.cell.cell-radius Вылет, мм
        div.cell.cell-holes Кол-во отверстий
        div.cell.cell-pcd Диаметр распо-#[br]ложения (PCD)
        div.cell.cell-dia Ступица (DIA)
        div.cell.cell-art Артикул
        div.cell.cell-color Цвет
        div.cell.cell-preview Превью
        div.cell.cell-price Цена (1 шт) руб
        div.cell.cell-prices Цена (4 шт) руб
        div.cell.cell-stock В наличии
        div.cell.cell-del

      modification(
        v-for="modification in modifications"
        :mod="modification"
        :key="modification.id"
        @initEmptyRowMod="initEmptyRowMod"
        @deleteRowMod="deleteRowMod"
      )

</template>

<script>
  import Modification from '@/components/catalog/board/form/modifications/Modification';

  export default {
    name: 'form-modifications',
    components: { Modification },
    props: ['modifications'],

    data() {
      return {
      };
    },

    methods: {
      addedRowMod() {
        this.$emit('addedRowMod', this.generateRandomId());
      },

      initEmptyRowMod(emptyRow) {
        this.$emit('initEmptyRowMod', emptyRow);
      },

      deleteRowMod(id) {
        this.$emit('deleteRowMod', id);
      },

      generateRandomId() {
        return Math.floor((1 + Math.random()) * 0x10000);
      },
    },
  };

</script>

<style lang="scss">

  .panel-modification {
    .panel-table {
      display: table;
      width: 100%;
      table-layout: fixed;
      padding: 0 15px 30px;
    }

    .row {
      display: table-row;
    }

    .cell-head,
    .cell {
      display: table-cell;
      vertical-align: middle;
      padding: 12px 6px;
      font-size: 13px;
      font-weight: 600;
      line-height: 1.07;
      color: #434343;
      border-right: solid 1px #d7d7d7;

      &:last-of-type {
        border-right: none;
      }
    }

    // Шапка таблицы
    .row-head {
      .cell {
        background-color: #f3f3f3;
      }
    }

    // Ширины ячеек
    .cell-width {
      width: 96px;
    }

    .cell-diameter {
      width: 85px;
    }

    .cell-radius {
      width: 85px;
    }

    .cell-holes {
      width: 80px;
    }

    .cell-pcd {
      width: 120px;
    }

    .cell-dia {
      width: 66px;
    }

    .cell-art {
      width: 98px;
    }

    .cell-color {
      width: 167px;
    }

    .cell-preview  {
      width: 65px
    }

    .cell-price {
      width: 115px;
    }

    .cell-prices {
      width: 115px;
    }

    .cell-stock {
      width: 85px;
    }

    .cell-del {
      width: 47px;
    }
  }

</style>