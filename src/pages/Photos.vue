<template lang="pug">
  SiteLayout.View--Photos
    .Photos
      .Photo(v-for="photo in $page.allPhotos.edges")
        g-image.Photo__image(:src="photo.node.src")
        .Photo__caption(v-if="photo.node.caption") {{ photo.node.caption }}
    .Photos__license
      | The photos are licensed under the&nbsp;
      a(href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank") CC-BY-SA 4.0 License
      | .
      br
      | When you use these photos, you can also&nbsp;
      a(:href="'mailto:' + $static.metadata.contactEmail") send me an email
      | &nbsp;and you will make my day :)
</template>

<page-query>
query {
  allPhotos {
    totalCount
    edges {
      node {
        id
        caption
        src
      }
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    contactEmail
  }
}
</static-query>

<style lang="scss" scoped>
@import "@/style/mixins.scss";

.Photos {
  line-height: 0;
  column-count: 4;
  column-gap: 0;

  @include respond-below(sm) {
    column-count: 1;
  }
}

.Photos__license {
  text-align: center;
  padding: 0 1rem;
  padding-top: 1rem;

  @include respond-below(sm) {
    padding: 0 0.25rem;
    padding-top: 0.25rem;
  }
}

.Photo {
  position: relative;
  transition: 0.1s linear all;

  &__image {
    width: 100%;
    height: auto;
  }

  &__caption {
    line-height: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.25rem 0.5rem;
    color: white;
    background-color: rgba(0,0,0,0.7);
    opacity: 0;
    transition: 0.1s linear all;

    @include respond-below(sm) {
      opacity: 1;
    }
  }

  &:hover {
    .Photo__caption {
      opacity: 1;
    }
  }
}
</style>