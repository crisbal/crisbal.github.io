<template lang="pug">
    header.Header
      // Fix for iOS/Safari: display:flex has no height (https://stackoverflow.com/questions/33636796/chrome-safari-not-filling-100-height-of-flex-parent)
      .Header__content
        g-link.Header__title(to="/") {{ this.$static.metadata.siteName }}
        .spacer
        nav.Header__nav
            a.Header__link(href="https://github.com/crisbal" target="_blank") Projects
            g-link.Header__link(to="/photos") Photos
            g-link.Header__link(to="/posts") Posts
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@import "@/style/mixins.scss";

.Header {
  padding: 1.25rem 2rem;
  &__content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @include respond-below(sm) {
      display: block;
      text-align: center;
    }
  }

  @include respond-below(sm) {
    padding: 0.75rem 1rem;
  }

  .spacer {
    @include respond-below(sm) {
      display: none;
    }
  }

  &__title {
    display: block;
    white-space: nowrap;
    color: var(--slate);
    font-size: 1.75rem;
    font-weight: 400;
    text-decoration: none;

    @include respond-below(sm) {
      margin-bottom: 0.25rem;
    }

    &:hover {
      text-decoration: none;
    }
  }

  &__nav {
    @include respond-below(sm) {
      text-align: center;
    }
  }
  &__link {
    padding: 0 0.5rem;
    margin: 0 0.5rem;
    color: var(--text-color);
    text-decoration: none;
    transition: 0.1s linear all;
    &:hover {
      color: var(--link-color);
      text-decoration: none;
    }

    &.active--exact {
      color: var(--link-color);
    }
  }
}
</style>
