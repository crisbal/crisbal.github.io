<template lang="pug">
    .Section
        h3.Section__title(
          :style=`{
            color: titleColor
          }`
          :class=`{
            small: extra && extra.includes("smallTitle")
          }`
        ) {{ title }}
        .Section__content
          slot
</template>

<script>
export default {
  name: "ResumeSection",
  props: ["title", "titleColor", "extra"],
};
</script>

<style lang="scss" scoped>
@import "@/style/mixins.scss";

.Section {
  &__title {
    margin-bottom: 0.2rem;
    font-size: 1.9em;
    font-weight: 300;

    &.small {
      font-size: 1.4em;
    }
  }

  &__content {
    // padding-left: 0.3em;

    @include respond-below(sm) {
      padding-left: 0.3em;
    }
  }
}
</style>