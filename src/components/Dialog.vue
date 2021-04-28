<template lang="pug">
  .Dialog(v-if="value")
    .Dialog__backdrop(@click="close")
      .Dialog__content(@click.stop)
        slot
</template>

<script>
export default {
    name: "Dialog",
    props: {
        value: {
            required: false
        }
    },
    methods: {
        close() {
            this.$emit('input', null)
        }
    }
}
</script>

<style lang="scss" scoped>
.Dialog {
    z-index: 10;
    &__backdrop {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
    }

    &__content {
        border-radius: 3px;
        max-width: 720px;
        background: var(--background-color);
        padding: 1rem;

        img {
            max-width: 100%;
        }
    }
}
</style>