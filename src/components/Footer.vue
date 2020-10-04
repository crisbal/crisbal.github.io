<template lang="pug">
    footer.Footer
        a.Footer__link(:href="'mailto:' + $static.metadata.contactEmail")
            | {{ $static.metadata.contactEmail }}
</template>

<static-query>
query {
  metadata {
    contactEmail
  }
}
</static-query>

<style lang="scss">
.Footer {
    padding: 1.25rem 2rem;
    text-align: center;

    &__link {
        text-decoration: none;
        color: var(--text-color);

        &:hover {
            color: var(--link-color);
        }
    }
}
</style>