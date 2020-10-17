<template lang="pug">
SiteLayout.View--Posts
  article.Post(v-for="post in $page.allPost.edges")
    header
      .Post__date On&nbsp;
        time(:datetime="post.node.date" pubdate="pubdate") {{ post.node.prettyDate }}
      h2.Post__title
        g-link(:to="post.node.path") {{ post.node.title }}
    .Post__preview {{ post.node.excerpt }}
    footer
      g-link.Post__read-more(:to="post.node.path") Read More
</template>

<page-query>
query {
  allPost {
    edges {
      node {
        id
        title
        prettyDate: date(format: "DD MMMM YYYY")
        date (format: "YYYY-MM-DD")
        excerpt
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Posts',
    meta: [
      { name: "description", content: "Blog with some posts that I have written." }
    ]
  },
};
</script>

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