<template lang="pug">
.Entry
  .Entry__meta
    .Entry__title {{ title }}
    .Entry__place &nbsp;- {{ place }}
    .spacer
    .Entry__date {{ date }}
  .Entry__content
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
  display: block;
  @include respond-below(sm) {
    display: block;
  }

  &__meta {
    display: flex;
    align-items: flex-end;

    .spacer {
      flex: 1;
    }
    .Entry__place {
      //margin-left: 0.75rem;
    }

    @include respond-below(sm) {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  &__title {
    font-size: 1.1em;
  }

  &__place {
    font-size: 1em;
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
    font-size: 0.95em;
    padding-left: 0.5em;
    line-height: 1.3;

    @include respond-below(sm) {
      padding-left: 0.3em;
    }
    ul {
      list-style-position: inside;
      list-style-type: none;

      li {
        text-indent: -0.75rem;
        padding-left: 0.75rem;
      }

      li::before {
        content: "• ";
      }
    }
  }
}
</style>
