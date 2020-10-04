<template lang="pug">
  SiteLayout.View--Photos
    .Photos
      .Photo(v-for="photo in $page.allPhotos.edges")
        g-image.Photo__image(:src="photo.node.src")
        .Photo__caption(v-if="photo.node.caption") {{ photo.node.caption }}
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

<style lang="scss" scoped>
.Photos {
  line-height: 0;
  column-count: 4;
  column-gap: 0;
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
  }

  &:hover {
    .Photo__caption {
      opacity: 1;
    }
  }
}
</style>