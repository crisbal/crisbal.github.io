<template lang="pug">
  SiteLayout.View--Photos
    .Photos
      template(v-for="photo in $page.allPhotos.edges")
        .Photo(@click="selectedPhoto=photo.node")
          g-image.Photo__image(:src="photo.node.src")
          .Photo__caption(v-if="photo.node.caption") {{ photo.node.caption }}
    .Photos__license
      | These photos are licensed under the&nbsp;
      a(href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank") CC-BY-SA 4.0 License
      | .
      br
      | If you use these photos, you can make my day by &nbsp;
      a(:href="'mailto:' + $static.metadata.contactEmail") sending me an email
      | &nbsp;to let me know.
    Dialog.DialogPhoto(v-model="selectedPhoto" v-if="selectedPhoto")
      .DialogPhoto__header
        div.DialogPhoto__caption {{ selectedPhoto.caption }}
        .spacer
        i.mdi.mdi-close(@click="selectedPhoto=null")
      img(:src="selectedPhoto.src.src")
      .DialogPhoto__footer
        .spacer
        a.Button(:href="selectedPhoto.src.src" target="_blank")
          i.mdi.mdi-download
          | Download 
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

<script>
import Dialog from '~/components/Dialog';

export default {
  components: { Dialog },
  data() {
    return {
      selectedPhoto: null,
    }
  },
  metaInfo: {
    title: 'Photos',
    meta: [
      { name: "description", content: "Photos that I have taken." }
    ]
  },
};
</script>

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
  padding: 0.5rem;
  page-break-inside: avoid;
  break-inside: avoid;

  &__image {
    width: 100%;
    height: auto;
  }

  &__caption {
    line-height: 1;
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
    right: 0.5rem;
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

.DialogPhoto {
  &__header {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;

    .mdi-close {
      cursor: pointer;
      font-size: 1.25rem;
      padding: 0.25rem;
      padding-right: 0;
    }

    .DialogPhoto__caption {
      font-size: 1.25rem;
    }
  }
  &__footer {
    margin-top: 1rem;
    display: flex;
    .Button {
      width: 100%;
    }
  }

  

}
</style>