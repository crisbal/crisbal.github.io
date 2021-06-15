<template lang="pug">
SiteLayout.View--Post
  article.Post
    header
      .Post__date On&nbsp;
        time(:datetime="$page.post.date" pubdate="pubdate") {{ $page.post.prettyDate }}
      h2.Post__title
        g-link(:to="$page.post.path") {{ $page.post.title }}
    .Post__content(v-html="$page.post.content")
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    id
    title
    prettyDate: date(format: "DD MMMM YYYY")
    date (format: "YYYY-MM-DD")
    path
    content
    excerpt

  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { name: "description", content: this.$page.post.excerpt }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/mixins.scss";
@import "@/style/post.scss";

.Post__content {
  font-size: 1.3rem;
  margin: 1rem 0;
  @include respond-below(sm) {
    margin: 0;
    font-size: 1.1rem;
  }

  & ::v-deep {
    * {
      margin-bottom: 1rem;
    }

    a {
      color: var(--link-color);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 0.25rem !important;
    }

    img,
    video {
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }

    figure {
      text-align: center;
      padding: 1rem;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #cfcfcf;
    }

    figure figcaption {
      margin-top: 0.25rem;
      font-style: italic;
    }

    hr {
      margin: 1rem 0;
    }

    blockquote {
      padding: 1rem;
      background-color: var(--light-gray);

      p {
        margin-bottom: 0;
      }
    }

    code {
      display: inline-block;
      background-color: var(--light-gray);
      padding: 0 0.2rem;
    }

    pre {
      code {
        display: block;
        padding: 0.75rem;
        overflow-x: auto;
      }
    }

    ul{
        -webkit-margin-start: 1em;
    }
  }
}
</style>