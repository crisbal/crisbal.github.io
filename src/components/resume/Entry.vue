<template lang="pug">
.Entry
  .Entry__meta
    .Entry__place {{ place }}
    .Entry__date {{ date }}
  .Entry__content
    .Entry__title {{ title }}
    .Entry__details
      ul
        li(v-for="detail in details") {{ detail }}
</template>

<script>
export default {
  name: "ResumeEntry",
  props: ["place", "date", "title", "details"],
};
</script>

<style lang="scss" scoped>
@import "@/style/mixins.scss";

.Entry {
  display: flex;

  @include respond-below(sm) {
    display: block;
  }

  &__meta {
    flex-basis: 22%;
    padding-right: 0.75rem;

    @include respond-below(sm) {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  &__place {
    @include respond-below(sm) {
      font-size: 1.1em;
    }
  }
  &__content {
    flex: 1;
  }

  &__date {
    font-size: 0.8em;
    color: #868686;
  }

  &__title {
    font-weight: 400;
    @include respond-below(sm) {
      font-size: 1.2em;
    }
  }

  &__details {
    padding-left: 0.5em;
    line-height: 1.3;

    @include respond-below(sm) {
      padding-left: 0.3em;
    }
    ul {
      list-style-position: inside;
      list-style-type: none;

      li::before {
        content: "• ";
      }
    }
  }
}
</style>