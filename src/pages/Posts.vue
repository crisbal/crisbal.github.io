<template lang="pug">
SiteLayout.View--Posts
  .Post(v-for="post in $page.allPost.edges")
    .Post__date On {{ post.node.date }}
    h2.Post__title
      g-link(:to="post.node.path") {{ post.node.title }}
    .Post__preview {{ post.node.excerpt }}
    g-link.Post__read-more(:to="post.node.path") Read More
</template>

<page-query>
query {
  allPost {
    edges {
      node {
        id
        title
        date (format: "DD MMMM YYYY")
        excerpt
        path
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
@import "@/style/post.scss";
@import "@/style/mixins.scss";

.Post {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #cfcfcf;

  @include respond-below(sm) {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
}
</style>