<template lang="pug">
    header.Header
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
.Header {
  display: flex;
  align-items: center;
  padding: 1.25rem 2rem;

  &__title {
    color: var(--slate);
    font-size: 1.75rem;
    font-weight: 400;
    text-decoration: none;
  }

  &__link {
    padding: 0 0.5rem;
    margin: 0 0.5rem;
    color: var(--text-color);
    text-decoration: none;
    transition: 0.1s linear all;
    &:hover {
      color: var(--link-color);
    }

    &.active--exact {
      color: var(--link-color);
    }
  }
}
</style>
